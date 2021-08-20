import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const ApplicationFormPage = () => {
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

  useEffect(() => {
    getTrips();
  }, []);
  
  return (
    <div>
      <h2>Inscreva-se para uma viagem</h2>
      <form>
        <select name="tripsList">
          <option value="trip"></option>
        </select>
      </form>
    </div>
  );
};

export default ApplicationFormPage;