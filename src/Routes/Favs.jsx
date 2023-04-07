import React from "react";
import { useGlobalStates } from "../Context/Context";
import { Link } from "react-router-dom";

const Favs = () => {
  const { favState, favDispatch } = useGlobalStates();

  const removeFav = (id) => {
    favDispatch({ type: "REMOVE_FAV", payload: id });
    alert("Dentista eliminado de favoritos");
  };

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favState.map(({ id, name, username }) => (
          <div key={id}>
            <div className="card">
              <img className="card-img" src="./images/doctor.jpg" alt="" />
              <Link to={`/dentista/${id}`}>
                <h3>{name}</h3>
              </Link>
              <h4>{username}</h4>
              <button
                className="favButton-fav"
                aria-label="Favourite Dentist"
                onClick={() => removeFav(id)}
              >
                ⭐
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favs;


/*
import React from "react";
import { useGlobalStates } from "../Context/Context";
import { Link } from "react-router-dom";

const Favs = () => {
  const { favState } = useGlobalStates();

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favState.map(({ id, name, username }) => (
          <div key={id}>
            <div className="card">
              <img className="card-img" src="./images/doctor.jpg" alt="" />
              <Link to={`/dentista/${id}`}>
                <h3>{name}</h3>
              </Link>
              <h4>{username}</h4>
              <button className="favButton-fav" aria-label="Favourite Dentist">
                ⭐
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favs;
*/