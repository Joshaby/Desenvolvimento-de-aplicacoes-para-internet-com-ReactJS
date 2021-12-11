import React, { useState } from "react";

const ShowFruits = () => {

    const [items, setItems] = useState(['Banaca', "Laranja", "Melancia"]);

    const [test, setTest] = useState('oi');

    const addItem = (item) => {
        setItems([...items, item]);
    }

    const removeItem = () => {
        setItems([...items.slice(0, -1)]);
    }

    const teste = () => {
        console.log(test);
    }

    return (
        <div>
            <h1>Fitero do zé</h1>
            <ul>
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <br />
            <button onClick={() => addItem('Limão')}>Adicionar limão</button>
            <button onClick={() => removeItem()}>Remover limão</button>
            <br />
            <input type="text" value={test} onChange={(e) => {
                setTest(e.target.value);
                teste();
            }} />
        </div>
    );
}

export default ShowFruits;