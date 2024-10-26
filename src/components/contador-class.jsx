import React, { Component } from "react";

class ContadorClasse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 0,
            nomeUsuario: ''
        }
    }

    incrementar = () => {
        this.setState({ contador: this.state.contador + 1 })
    }
    decrementar = () => {
        this.setState({ contador: this.state.contador - 1 })
    }

    handleChange = (e) => {
        this.setState({nomeUsuario: e.target.value});
    }

    render() {
        return (
            <div>
                <h2>Contador (Classe)</h2>
                <p>Contador: {this.state.contador}</p>
                <button type="button" onClick={this.incrementar}>Incrementar</button>
                <button type="button" onClick={this.decrementar}>Decrementar</button>
                <br />
                <input type="text" placeholder="Nome do usuário" 
                    value={this.state.nomeUsuario}
                    onChange={this.handleChange}
                />
                <p>{this.state.nomeUsuario}</p>
            </div>
        )
    }
}

export default ContadorClasse;