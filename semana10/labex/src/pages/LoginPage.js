import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const [data, loading, error, request] = useAuth();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const submitLogin = (e) => {
    e.preventDefault()
    request(
      'https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-barros-lovelace/login',
      { email: values.email, password: values.password },
      { header: { ContentType: 'application/json' } },
      'post'
    )
    data &&
      localStorage.setItem('token', data.data.token);
      history.push('/AdminHomePage');
    error && alert(error.response.data.message);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submitLogin}>
        <input
          placeholder="E-mail"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          required
          type="email"
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          value={values.password}
          onChange={handleInputChange}
          required
        />
        <Link to={"/"}>
          <button type="button">Voltar</button>
        </Link>
        <button type="submit">{loading ? "Carregando" : " entrar"}</button>
      </form>
    </div>
  );
};

export default LoginPage;
