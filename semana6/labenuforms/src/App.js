import React from 'react'

import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Etapa4 from './components/Etapa4'

class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Etapa4 />
      default:
        return <Etapa1 />
    }
  }

  irParaProximaEtapa = () => {
    this.state.etapa <= 1 || this.state.etapa <= 3 
    ? this.setState({ etapa: this.state.etapa + 1 }) 
    : this.setState({ etapa: this.state.etapa })
    console.log(this.state.etapa)
  }
  
  render() {
    return (
      <div className="botao">
        {this.renderizaEtapa()}
        {
          this.state.etapa === 4 ? "" : 
          <button onClick={this.irParaProximaEtapa}>
            Próxima etapa
          </button>
        }
      </div>
    );
  }
}

export default App;