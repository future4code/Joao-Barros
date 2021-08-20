import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useData from '../hooks/useAuth';

const AdminHomePage = () => {
  const { loading, request } = useData();
  const [listTrips, setlistTrips] = useState([]);

  const getTrips = async () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labeX/thiago-santiago-lovelace/trips';
    const method = 'get';
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
      <p>AdminHomePage</p>
      <Link to={'/'}>Voltar</Link>
      <Link to={'/CreateTripPage'}>Criar Viagem</Link>
      <button>Logout</button>

      <section>{loading ? 'Carregando' : <ul>{renderAllTrips}</ul>}</section>
    </div>
  );
};

export default AdminHomePage;