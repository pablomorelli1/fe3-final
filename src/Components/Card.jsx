import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useUsersState } from "../Context/Context";

const Card = ({ user }) => {
  const { name, username, id } = user;
  const { themeState, favsState, favsDispatch } = useUsersState();

  const handleFavs = () => {
    if (favsState.includes(user)) {
      favsDispatch({ type: "REMOVE_FAV", payload: user });
      alert(`${name} se eliminó de tus favoritos`);
    } else {
      favsDispatch({ type: "ADD_FAV", payload: user });
      alert(`${name} se agregó a tus favoritos`);
    }
  };

  const favButton = favsState.includes(user) ? "❌" : "⭐";

  return (
    <div className="card" style={{ background: themeState.cardColor }}>
      <Link to={`/dentist/:${id}`} className="card-link">
        <div className="content-card">
          <img
            src="../images/doctor.jpg"
            alt="Imagen de un doctor"
            className="card-image"
          />
          <p className="card-text card-title">{name}</p>
          <p className="card-text">{username}</p>
          <p className="card-text">{`ID ${id}`}</p>
        </div>
      </Link>
      <button onClick={handleFavs} className="card-button">
        {favButton}
      </button>
    </div>
  );
};

export default Card;
