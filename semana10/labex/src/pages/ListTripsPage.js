import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const ListTripsPage = () => {
  const [data, loading, error, request] = useAuth();
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
      <p>ListTripsPage</p>
      <section>{loading ? 'Carregando' : <ul>{renderAllTrips}</ul>}</section>
      <Link to={'/'}><button>Voltar</button></Link>
      <Link to={'/ApplicationFormPage'}><button>Application Form</button></Link>
    </div>
  );
};

export default ListTripsPage;