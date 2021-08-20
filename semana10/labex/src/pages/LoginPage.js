import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const LoginPage = () => {
  const { loading, request } = useAuth();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const getInfoAdmin = async () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labeX/thiago-santiago-lovelace/login';
    const body = {
      email: values.email.trim(),
      password: values.password.trim(),
    };
    const headers = {
      ContentType: 'application/json',
    };
    const method = 'post';

    const { response } = await request(url, body, { headers }, method);
    localStorage.setItem('token', response.data.token);
    console.log(response)
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div>
      <input
        placeholder={'E-mail'}
        name="email"
        value={values.email}
        onChange={handleInputChange}
      />
      <input
        placeholder={'Senha'}
        name="password"
        value={values.password}
        onChange={handleInputChange}
      />
      <br />
      <Link to={'/'}>Voltar</Link>
      <Link
        to={'/AdminHomePage'}
        onClick={getInfoAdmin}
      >
        {loading ? 'Carregando' : ' entrar'}
      </Link>
    </div>
  );
};

export default LoginPage;