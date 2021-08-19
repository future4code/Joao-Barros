import React, { useEffect, useHistory } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const TripDetailsPage = () => {
  const { data, request } = useAuth();

  const getTripDetails = (data, request) => {

  }

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(token === null) {
      console.log("Nao esta logado")
      history.push("/LoginPage")
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-barros-lovelace/trip/HDg3stHNdBdbWzhp68Iy",
    {
      headers: {
        auth: token
      }
    })
      .then((response) => {
        console.log(response.data)
        localStorage.setItem("token", response.data.token)
      }).catch((err) => {
        console.log(err.response)
      })
  }, []);
  
  return (
    <div>
      <p>TripDetailsPage</p>
    </div>
  );
};

export default TripDetailsPage;