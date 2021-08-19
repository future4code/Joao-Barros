import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  
  return (
    <div>
      <h2>LabeX</h2>
      <Link to={"/ListTripsPage"}>Lista de Viagens</Link>
      <Link to={"/LoginPage"}>Administrador</Link>
    </div>
  );
};

export default HomePage;