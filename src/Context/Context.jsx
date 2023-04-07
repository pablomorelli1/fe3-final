import { useContext, createContext, useEffect, useState, useReducer } from "react";

export const UsersState = createContext();

const themes = {
    dark: {
        theme: false,
        bgColor: '#949494',
        color: 'white',
        fontSize: '3rem',
        cardColor: '#E2E2E2',
        navColor: '#12121296'
    },
    light: {
        theme: true,
        bgColor: 'white',
        color: 'black',
        fontSize: '2.5rem',
        cardColor: 'white',
        navColor: '#E5E5E5'
    }
};

const initialThemeState = themes.light;

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'SWITCH_DARK':
            return themes.dark;
        case 'SWITCH_LIGHT':
            return themes.light;
        default:
            throw new Error();
    }
};

const favsReducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAV':
            return [ ...state, action.payload ];
        case 'REMOVE_FAV':
            return state.filter(user => user !== action.payload);
        default:
            throw new Error();
    }
};

const Context = ({ children }) => {
    const [users, setUsers] = useState([]); 
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState);
    const initialValueFavs = JSON.parse(localStorage.getItem('favs')) || []; 
    const [favsState, favsDispatch] = useReducer(favsReducer, initialValueFavs); 

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favsState));
    }, [favsState]); 

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    return (
        <UsersState.Provider value={{ users, setUsers, themeState, themeDispatch, favsState, favsDispatch }}>
            {children}
        </UsersState.Provider>
    );
};

export default Context;

export const useUsersState = () => useContext(UsersState);