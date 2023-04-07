import { createContext, useContext, useEffect, useReducer } from "react";

const GlobalStates = createContext();

const themes = {
  dark: {
    theme: true,
  },
  light: {
    theme: false,
  },
};

const initialApiState = [];
const intialThemeState = themes.light;
const initialFavState = JSON.parse(localStorage.getItem("favs")) || [];

const apiReducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTIST":
      return action.payload;
    default:
      throw new Error();
  }
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_DARK":
      return themes.dark;
    case "SWITCH_LIGHT":
      return themes.light;
    default:
      throw new Error();
  }
};

const favReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return [...state, action.payload];
    default:
      throw new Error();
  }
};

const Context = ({ children }) => {
  const [apiState, apiDispatch] = useReducer(apiReducer, initialApiState);
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    intialThemeState
  );
  const [favState, favDispatch] = useReducer(favReducer, initialFavState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favState));
  }, [favState]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => apiDispatch({ type: "GET_DENTIST", payload: data }));
  }, []);

  return (
    <GlobalStates.Provider
      value={{ apiState, themeState, themeDispatch, favState, favDispatch }}
    >
      {children}
    </GlobalStates.Provider>
  );
};
export default Context;

export const useGlobalStates = () => useContext(GlobalStates);