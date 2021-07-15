import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    arr: [
      {
        nome: 'paulinha',
        fotoUser: 'https://picsum.photos/50/50?a=1',
        fotoPost: 'https://picsum.photos/200/150?a=1'
      },
      {
        nome: 'joao',
        fotoUser: 'https://picsum.photos/50/50?a=2',
        fotoPost: 'https://picsum.photos/200/150?a=2'
      },
      {
        nome: 'pedro',
        fotoUser: 'https://picsum.photos/50/50?a=3',
        fotoPost: 'https://picsum.photos/200/150?a=3'
      }
    ],
    valorInputFoto: "",
    valorInputLegenda: "",
    valorInputTexto: ""
  }

  adicionaPost = (arr) => {
    const novoPost = {
      valorInputFoto: this.state.valorInputFoto,
      valorInputLegenda: this.state.valorInputLegenda,
      valorInputTexto: this.state.valorInputTexto,
    };

    arr.push(novoPost);
  }

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  };

  onChangeInputLegenda = (event) => {
    this.setState({ valorInputLegenda: event.target.value });
  };

  onChangeInputTexto = (event) => {
    this.setState({ valorInputTexto: event.target.value });
  };

  render() {
    return (
      <MainContainer>
        <input
            value={this.state.valorInputFoto}
            onChange={this.onChangeInputFoto}
            placeholder={"Link da foto"}
          />
          <input
            value={this.state.valorInputLegenda}
            onChange={this.onChangeInputLegenda}
            placeholder={"Legenda"}
          />
          <input
            value={this.state.valorInputTexto}
            onChange={this.onChangeInputTexto}
            placeholder={"Texto"}
          />
          <button onClick={this.adicionaPost}>Postar</button>
        {this.state.arr.map(({ nome, fotoUser, fotoPost }) => (
          <Post
            nomeUsuario={nome}
            fotoUsuario={fotoUser}
            fotoPost={fotoPost}
          />
        ))}
      </MainContainer>
    );
  }
}

export default App;
