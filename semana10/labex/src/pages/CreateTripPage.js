import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useProtectedPage from "../hooks/useProtectedPage";

const CreateTripPage = () => {
  const [data, loading, error, request] = useAuth();
  const [values, setValues] = useState({
    name: "",
    planet: "",
    date: "",
    description: "",
    duration: "",
  });
  const history = useHistory();
  useProtectedPage();

  const createTrip = (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem("token");
    request(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-barros-lovelace/trips",
      {
        name: values.name,
        planet: values.planet,
        date: values.date,
        description: values.description,
        durationInDays: values.duration,
      },
      { header: { ContentType: "application/json", auth: token } },
      "post"
    );
    history.push("/AdminHomePage");
    error && alert(error.response.data.message);
  };

  const handleInputChange = (e) => {
    const { name, value, select, description, duration } = e.target;
    setValues({
      ...values,
      [name]: value,
      [select]: select,
      [description]: description,
      [duration]: duration,
    });
  };

  return (
    <div>
      <h2>Criar Viagem</h2>
      <form onSubmit={createTrip}>
        <input
          placeholder="Nome"
          name="name"
          value={values.name}
          onChange={handleInputChange}
          required
          type="name"
        />
        <select name="select">
          <option value="valor1">Mercúrio</option>
          <option value="valor2">Vênus</option>
          <option value="valor3">Terra</option>
          <option value="valor3">Marte</option>
          <option value="valor3">Jupter</option>
          <option value="valor3">Saturno</option>
          <option value="valor3">Urano</option>
          <option value="valor3">Netuno</option>
          <option value="valor3">Plutão</option>
        </select>
        <input id="date" type="date" />
        <input
          type="text"
          placeholder="Descrição"
          name="description"
          value={values.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          placeholder="Duração em dias"
          name="duration"
          value={values.duration}
          onChange={handleInputChange}
          required
        />
        <Link to={"/"}>
          <button type="button">Voltar</button>
        </Link>
        <button type="submit">{loading ? "Carregando" : " Criar"}</button>
      </form>
    </div>
  );
};

export default CreateTripPage;
