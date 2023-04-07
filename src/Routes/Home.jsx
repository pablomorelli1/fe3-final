import Card from "../Components/Card.jsx";

const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <Card />
    </main>
  );
};

export default Home;


/*
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const fetchDentists = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setDentists(data);
    };

    fetchDentists();
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Link to={`/dentist/${dentist.id}`} key={dentist.id}>
            <Card name={dentist.name} username={dentist.username} id={dentist.id} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
*/

/*
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const fetchDentists = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setDentists(data);
    };
    fetchDentists();
  }, []);

  const addFav = (id) => {
    const favDentists = JSON.parse(localStorage.getItem('favDentists')) || [];
    if (!favDentists.includes(id)) {
      favDentists.push(id);
      localStorage.setItem('favDentists', JSON.stringify(favDentists));
    }
  }

  return (
    <main className="">
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map(dentist => (
          <div className='card' key={dentist.id}>
            <h2>{dentist.name}</h2>
            <p>{dentist.username}</p>
            <button onClick={() => addFav(dentist.id)} className='favButton'>Add fav</button>
            <Link to={`/dentist/${dentist.id}`}>View details</Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home
*/

/*
import React from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {//Aqui deberias renderizar las cards //}
      </div>
    </main>
  )
}

export default Home
*/