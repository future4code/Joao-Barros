import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useHistory } from 'react-router';

const TripDetailsPage = () => {
  const { data, request } = useAuth();

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token === null) {
      console.log('Nao esta logado');
      history.push('/LoginPage');
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-barros-lovelace/trip/${token}`;
    const headers = {
      headers: {
        ContentType: 'application/json',
        auth: token,
      },
    };
    const method = 'get';

    const getTripDetails = async () => {
      request(url, undefined, headers, method)
    };

    // axios
    //   .get(
    //     ,
    //     headers
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //     localStorage.setItem('token', response.data.token);
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
  }, []);

  return (
    <div>
      <p>TripDetailsPage</p>
    </div>
  );
};

export default TripDetailsPage;