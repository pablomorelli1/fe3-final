import React from "react";
import Card from "../Components/Card";
import { useUsersState } from "../Context/Context";

const Favs = () => {
  const { favsState } = useUsersState();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favsState && favsState.map(fav => <Card key={fav.id} user={fav} />)}
      </div>
    </>
  );
};

export default Favs;