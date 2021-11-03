import { Component } from "react";

class Form1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sabor: 'uva',
            casquinha: true,
            guardanapos: 'sim'
        }
    }

    changeItem = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [target.name]: value
        });
    }

    showItems = (event) => {
        const { sabor, casquinha, guardanapos } = this.state;
        const message = casquinha ? ', com casquinhas' : ', sem casquinha';
        const message1 = guardanapos === 'sim' ? ' e com guardanapos' : 'e sem guardanapos'

        alert('Você pediu sorvete sabor ' + sabor + message + message1);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Sorvete</h1>
                <form onSubmit={this.showItems}>
                    <label>Escolha um sabor:</label>
                    <select name="sabor" value={this.state.sabor} onChange={this.changeItem}>
                        <option value="uva">Uva</option>
                        <option value="limao">Limão</option>
                        <option value="coco">Coco</option>
                        <option value="chocolate">Chocolate</option>
                        <option value="morango">Morango</option>
                    </select>
                    <br />
                    <label>Colocar casquinha?</label>
                    <input type="checkbox" name="casquinha" checked={this.state.casquinha} />
                    <br />
                    <label>Quer guardanapos?</label>
                    <input type="radio" id="guardanapos" name="guardanapos" value="sim" />
                    <label>Sim</label>
                    <input type="radio" id="guardanapos" name="guardanapos" value="nao" />
                    <label>Não</label>
                    <br />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}

export default Form1;