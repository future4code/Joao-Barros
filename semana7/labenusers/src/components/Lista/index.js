import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`;

const headers = {
  headers: {
    Authorization: "joao-correia-lovelace",
  },
};

class Lista extends React.Component {
  state = {
    usersList: [],
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ usersList: res.data });
      })
      .catch((err) => {
        alert(err);
      });
  };

  deleteUser = (id) => {
    const pergunta = prompt("Tem certeza que deseja deletar?");
    if (
      pergunta === "sim" ||
      pergunta === "SIM" ||
      pergunta === "Sim" ||
      pergunta === "s" ||
      pergunta === "S"
    ) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
      axios
        .delete(url, {
          headers: {
            Authorization: "joao-correia-lovelace",
          },
        })
        .then(() => {
          alert("Usuário deletado com sucesso!");
          this.getAllUsers();
        })
        .catch(() => {
          alert("Ocorreu um erro, tente novamente.");
        });
    } else {
      alert("Tudo bem então, pai, c que manda.");
    }
  };

  getUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios
      .get(url, {
        headers: {
          Authorization: "joao-correia-lovelace",
        },
      })
      .then((res) => {
        alert(`Usuário: ${res.data.name} - Email: ${res.data.email}`);
      })
      .catch((err) => {
        console.log(err);
        alert("Ocorreu um erro, tente novamente.");
      });
  };

  render() {
    const usersListComponent = this.state.usersList.map(({ name, id }) => (
      <CardUsuario key={id} onClick={() => this.getUser(id)}>
        {name}
        <button onClick={() => this.deleteUser(id)}>Excluir</button>
      </CardUsuario>
    ));

    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Lista de Usuários</h3>
        {usersListComponent}
      </div>
    );
  }
}

export default Lista;
