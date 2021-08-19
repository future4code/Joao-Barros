import React from "react";
import { Link } from "react-router-dom";

const AdminHomePage = () => {
  
  return (
    <div>
      <p>AdminHomePage</p>
      <Link to={"/"}>Voltar</Link>
      <button>Criar Viagem</button>
      <button>Logout</button>
    </div>
  );
};

export default AdminHomePage;