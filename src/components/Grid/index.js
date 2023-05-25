import React from 'react'
import * as C from "./styles";
import GridItem from '../GridItem';

export const Grid = ({ itens, setItens }) => {
    //função para deletar
    const onDelete = (ID) => {
        const novoVetor = itens.filter((transacao) => transacao.id !== ID);
        setItens(novoVetor);
        localStorage.setItem("transacao", JSON.stringify(novoVetor));
    };

    return (
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th width={40}> Descrição </C.Th>
                    <C.Th width={40}> Valor </C.Th>
                    <C.Th width={10} alignCenter> Tipo </C.Th>
                    <C.Th width={10}> </C.Th>
                </C.Tr>
            </C.Thead>
            <C.Tbody>
                {itens?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete} />
                ))}
            </C.Tbody>
        </C.Table>
    );
};

export default Grid;