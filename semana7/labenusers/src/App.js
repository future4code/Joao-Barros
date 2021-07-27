import React from "react";
import Login from "./components/Login";
import Lista from "./components/Lista";

class App extends React.Component {
  state = {
    paginaInicial: true,
  };

  changePage = () => {
    this.setState({
      paginaInicial: !this.state.paginaInicial,
    });
  };

  render() {
    return (
      <div>
        {this.state.paginaInicial ? <Login /> : <Lista />}
        <button onClick={this.changePage}>
          {this.state.paginaInicial
            ? "Ir para pagina de lista"
            : "Ir para pagina de login"}
        </button>
      </div>
    );
  }
}

export default App;
