import React from "react";
import axios from "axios";

const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`;

const headers = {
  headers: {
    Authorization: "joao-correia-lovelace",
  },
};

class Lista extends React.Component {
  state = {
    usersList: []
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {

    axios
      .get(url, headers)
      .then((res) => {
        this.setState({usersList: res.data})
      })
      .catch((err) => {
        alert(err)
      });
  };

  render() {
    const usersListComponent = this.state.usersList.map(({ name, id }) => (
      <p key={id}>{name}</p>
    ))

    return <div>{usersListComponent}</div>
  }
}

export default Lista;
