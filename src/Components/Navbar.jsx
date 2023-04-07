import React from "react";
import { routes } from "../Routes/routes.js";
import { Link } from "react-router-dom";
import { useGlobalStates } from "../Context/Context.jsx";

const Navbar = () => {
  const { themeState, themeDispatch } = useGlobalStates();

  const switchTheme = () => {
    if (themeState.theme) {
      themeDispatch({ type: "SWITCH_LIGHT" });
    } else {
      themeDispatch({ type: "SWITCH_DARK" });
    }
  };
  console.log(themeState);

  return (
    <nav className="nav">
      <Link to={routes.home}>
        <h3>Home</h3>
      </Link>
      <Link to={routes.contact}>
        <h3>Contact</h3>
      </Link>
      <Link to={routes.favs}>
        <h3>Favs</h3>
      </Link>
      <button className="nav-button" onClick={switchTheme}>
        {themeState.theme ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;