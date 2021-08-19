import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const { data, request } = useAuth();
  const [ values, setValues ] = useState({
    email: "",
    password: ""
  })

  const getInfoAdmin = () => {
    
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-barros-lovelace/login";
    const body = {
      email: values.email.trim(),
      password: values.password.trim()
    };
    const header = {
      "Content-Type": "application/json"
    };
    const method = "POST";

    request(url, body, { header }, method);
    console.log(data)
  }

  useEffect(() => getInfoAdmin(), [request])

  const handleInputChange = (event) => {
    const {name, value} = event.target
    setValues({
      ...values,
      [name]: value
    })
  }
  
  return (
    <div>
      <input placeholder={"E-mail"} onChange={handleInputChange} />
      <input placeholder={"Senha"} onChange={handleInputChange} />
      <br />
      <Link to={"/"}>Voltar</Link>
      <Link to={"/AdminHomePage"} onClick={getInfoAdmin}>Entrar</Link>
    </div>
  );
};

export default LoginPage;