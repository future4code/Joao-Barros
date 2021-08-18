import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const { data, request } = useAuth();

  const getInfoAdmin = async () => {
    
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-barros-lovelace/login";
    const body = {
      email: "astrodev@gmail.com.br",
      password: "123456"
    };
    const header = {
      ContentType: "application/json"
    };
    const method = "POST";

    request(url, body, { header }, method);
    console.log(data)
  }

  useEffect(() => getInfoAdmin(), [request])
  
  return (
    <div>
      <input placeholder={"E-mail"} />
      <input placeholder={"Senha"} />
      <br />
      <Link to={"/"}>Voltar</Link>
      <Link to={"/AdminHomePage"} onClick={getInfoAdmin}>Entrar</Link>
    </div>
  );
};

export default LoginPage;