import React from "react";
import axios from "axios";
import Input from "../Imput";

class Login extends React.Component {
  state = {
    inputNameValue: "",
    inputEmailValue: "",
  };

  onChangeName = (event) => {
    this.setState({ inputNameValue: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ inputEmailValue: event.target.value });
  };

  render() {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`;

    const headers = {
      headers: {
        Authorization: "joao-correia-lovelace",
      },
    };

    const handleClick = (event) => {
      event.preventDefault();

      this.setState({ inputNameValue: "" });
      this.setState({ inputEmailValue: "" });

      const criarUser = (name, email) => {
        const body = {
          name,
          email,
        };

        axios
          .post(url, body, headers)
          .then(() => {
            alert("Usuario criado com sucesso!")
          })
          .catch(() => {
            alert("Verifique os dados preenchidos e tente novamente.")
          });
      };

      criarUser(this.state.inputNameValue, this.state.inputEmailValue);
    };

    return (
      <form>
        <Input
          value={this.state.inputNameValue}
          event={this.onChangeName}
          label={"Nome"}
          type={"text"}
          placeholder={"Digite seu nome"}
        />
        <Input
          value={this.state.inputEmailValue}
          event={this.onChangeEmail}
          label={"Email"}
          type={"email"}
          placeholder={"Digite seu email"}
        />
        <button onClick={(event) => handleClick(event)}>Enviar</button>
      </form>
    );
  }
}

export default Login;
