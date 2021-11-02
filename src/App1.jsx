import { Component } from "react";

class App1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: ''
        }
        this.showNome = this.showNome.bind(this);
    }

    setNome(nome) {
        console.log(nome);
        this.setState({
            nome: nome
        })
    }

    showNome(e) {
        alert("Seu nome é ", this.state.nome);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.showNome}>
                    <h1>Exibir nomes</h1>
                    <label>Nome: </label>    
                    <input type="text" value={this.state.nome} onChange={e => this.setNome(e.target.value)} />
                    <button type="submit" value="Submit">Mostrar</button>
                </form>
            </div>
        );
    }
}

export default App1;