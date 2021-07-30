import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Playlists from './components/Playlists'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default class App extends React.Component {
  state = {
    inputValue: ''
  }

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }


  createPlaylist = async () => {

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    const body = {name: this.state.inputValue}
    const headers = {
      headers: {
        Authorization: "joao-correia-lovelace"
      }
    }

    const response = await axios.post(
      url, body, headers
    )
    this.setState({inputValue: ''})
    console.log(response)
  }

  render() {
    return (
      <div>
        <header>
          <h1 style={{textAlign: 'center'}}>Labefy</h1>
        </header>
        <Content>
          <h2>Criar Playlist</h2>
          <input type="text" value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.createPlaylist}>Enviar</button>
          <Playlists></Playlists>
        </Content>
      </div>
    )
  }
}

