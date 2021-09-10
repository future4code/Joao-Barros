import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const goToPage = () => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      return (
        <Link to={"/LoginPage"}>
          <button>Login</button>
        </Link>
      );
    } else {
      return (
        <Link to={"/AdminHomePage"}>
          <button>Admin</button>
        </Link>
      );
    }
  };

  return (
    <div>
      <h2>LabeX</h2>
      <Link to={"/ListTripsPage"}>
        <button>Lista de Viagens</button>
      </Link>
      {goToPage()}
    </div>
  );
};

export default HomePage;
