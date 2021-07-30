import React from "react";
import axios from "axios";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

export default class Playlists extends React.Component {
  state = {
    playlists: [],
    musics: '',
    inputMusic: '',
    inputArtist: '',
    inputLink: '',
  };

  componentDidMount() {
    this.showPlaylists();
  }

  showPlaylists = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const headers = {
      headers: {
        Authorization: "joao-correia-lovelace",
      },
    };
    const response = await axios.get(url, headers);
    console.log(response);
    this.setState({ playlists: response.data.result.list });
  };

  deletePlaylist = async (id) => {
    try {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
      const headers = {
        headers: {
          Authorization: "joao-correia-lovelace",
        },
      };
      const response = await axios.delete(url, headers);
      console.log(response);
      this.showPlaylists();
    } catch (error) {
      console.log(error.response);
    }
  };

  addMusic = async (id, name) => {
    try {
      const url =
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/${name}`;
      const headers = {
        headers: {
          Authorization: "joao-correia-lovelace",
        },
      };
      const body = {
        name: "string",
        artist: "string",
        url: "string",
      };
      const response = await axios.post(url, body, headers);
      
      console.log(response)
    } catch (error) {
      console.log(error.response);
    }
  };

  onChangeMusic = (event) => {
    this.setState({ inputMusic: event.target.value });
  };
  onChangeArtist = (event) => {
    this.setState({ inputArtist: event.target.value });
  };
  onChangeLink = (event) => {
    this.setState({ inputLink: event.target.value });
  };

  

  render() {
    const renderPlaylists = this.state.playlists.map(({ name, id }) => (
      <ListContainer key={id}>
        {name}
        <label>Musica:</label>
        <input
          type="text"
          value={this.state.inputMusic}
          onChange={this.onChangeMusic}
        />
        <label>Artista:</label>
        <input
          type="text"
          value={this.state.inputArtist}
          onChange={this.onChangeArtist}
        />
        <label>Link:</label>
        <input
          type="text"
          value={this.state.inputLink}
          onChange={this.onChangeLink}
        />
        <button onClick={() => this.addMusic()}>Adicionar Musica</button>
        <button onClick={() => this.deletePlaylist(id)}>Excluir</button>
      </ListContainer>
    ));

    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Playlists</h2>
        <section style={{ textAlign: "center" }}>
          <div>{renderPlaylists}</div>
        </section>
      </div>
    );
  }
}
