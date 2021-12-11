import React,{ useEffect, useState } from "react";
import styled from 'styled-components'

const TableBlock = styled.div`
    display: flex,
    flex-direction: column
`;

const Item = styled.div`
    list-style: none,
    display: flex,
    flex-direction: column,
    align-items: flex-start,
    padding: 12px,
    border: 1px solid #cecece
`;

export const Table = () => {
    const [populacoes, setPopulacoes] = useState([]);

    useEffect(() => {
        fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            .then(response => response.json())
            .then(data => setPopulacoes(data.data))
            .catch(err => alert('Ops!!! Aconteceu algum erro!!! Erro:' + err));
    }, []);

    return (
        <TableBlock>
            <h1>Populações do EUA(desde 2013)</h1>
            <ul>
            {populacoes.map((populacao, index) => (
                <Item key={index}>
                    <div><b>Ano: </b>{populacao["ID Year"]}</div>
                    <div><b>Quantidade: </b>{populacao["Population"]}</div>
                </Item>
            ))}
            </ul>
        </TableBlock>
    );
}