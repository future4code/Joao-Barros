import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useProtectedPage from "../hooks/useProtectedPage";

const AdminHomePage = () => {
  const [data, loading, error, request] = useAuth();
  const [listTrips, setlistTrips] = useState([]);

  useProtectedPage();

  const getTrips = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/thiago-santiago-lovelace/trips";
    const method = "get";
    const {
      response: {
        data: { trips: listTrips },
      },
    } = await request(url, undefined, undefined, method);
    setlistTrips(listTrips);
  };

  const renderAllTrips = listTrips.map(({ id, name }) => (
    <li key={id}>{name}</li>
  ));

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <div>
      <h2>AdminHomePage</h2>
      <Link to={"/"}>
        <button>Voltar</button>
      </Link>
      <Link to={"/CreateTripPage"}>
        <button>Criar Viagem</button>
      </Link>
      <section>{loading ? "Carregando" : <ul>{renderAllTrips}</ul>}</section>
    </div>
  );
};

export default AdminHomePage;
