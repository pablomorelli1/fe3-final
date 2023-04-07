import { useCallback, useMemo } from "react";
import { useGlobalStates } from "../Context/Context.jsx";
import { Link } from "react-router-dom";

const Card = () => {
  const { apiState, favState, favDispatch } = useGlobalStates();

  const isDentistInFavorites = useCallback(
    (dentist) => {
      return favState && favState.find((fav) => fav.id === dentist.id);
    },
    [favState]
  );

  const addFav = useCallback(
    (dentist) => {
      if (isDentistInFavorites(dentist)) {
        alert("Este dentista ya está en tus favoritos");
      } else {
        favDispatch({ type: "ADD_FAV", payload: dentist });
        alert("Dentista agregado a favoritos");
      }
    },
    [isDentistInFavorites, favDispatch]
  );

  const removeFav = useCallback(
    (dentist) => {
      favDispatch({ type: "REMOVE_FAV", payload: dentist.id });
      alert("Dentista eliminado de favoritos");
    },
    [favDispatch]
  );

  const memoizedApiState = useMemo(() => apiState, [apiState]);

  return (
    <div className="card-grid">
      {memoizedApiState.map((card) => (
        <div key={card.id}>
          <div className="card">
            <img className="card-img" src="./images/doctor.jpg" alt="" />
            <Link key={card.id} to={"/dentista/" + card.id}>
              <h3>{card.name}</h3>
            </Link>
            <Link to="/destacados">
              <h4>{card.username}</h4>
              {isDentistInFavorites(card) ? (
                <button onClick={() => removeFav(card)} className="favButton">
                  🗑️
                </button>
              ) : (
                <button onClick={() => addFav(card)} className="favButton">
                  ⭐
                </button>
              )}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;



/*
import { useCallback, useMemo } from "react";
import { useGlobalStates } from "../Context/Context.jsx";
import { Link } from "react-router-dom";

const Card = () => {
  const { apiState, favState, favDispatch } = useGlobalStates();

  const isDentistInFavorites = useCallback(
    (dentist) => {
      return favState && favState.find((fav) => fav.id === dentist.id);
    },
    [favState]
  );

  const addFav = useCallback(
    (dentist) => {
      if (isDentistInFavorites(dentist)) {
        alert("Este dentista ya está en tus favoritos");
      } else {
        favDispatch({ type: "ADD_FAV", payload: dentist });
        alert("Dentista agregado a favoritos");
      }
    },
    [isDentistInFavorites, favDispatch]
  );

  const memoizedApiState = useMemo(() => apiState, [apiState]);

  return (
    <div className="card-grid">
      {memoizedApiState.map((card) => (
        <div key={card.id}>
          <div className="card">
            <img className="card-img" src="./images/doctor.jpg" alt="" />
            <Link key={card.id} to={"/dentista/" + card.id}>
              <h3>{card.name}</h3>
            </Link>
            <Link to="/destacados">
              <h4>{card.username}</h4>
              <button onClick={() => addFav(card)} className="favButton">
                ⭐
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
*/
