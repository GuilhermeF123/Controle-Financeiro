import React, { useState } from 'react'
import * as C from "./styles";

import Grid from "../Grid";

export const Form = ({ handleAdd, listaTransacao, setListaTransacao }) => {

    const [desc, setDesc] = useState("");
    const [entrada, setEntrada] = useState("");
    const [saida, setSaida] = useState(false);

    const geraId = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !entrada) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (entrada < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }
        //Cria um transação
        const transacao = {
            id: geraId(),
            desc: desc,
            entrada: entrada,
            saida: saida,
        };

        handleAdd(transacao);
        setDesc("");
        setEntrada("");
    };

    return (
        <>
            <C.Container>

                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input
                        value={desc}
                        onChange={(e) =>
                            setDesc(e.target.value)} />
                </C.InputContent>

                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input
                        value={entrada}
                        type='number'
                        onChange={(e) => setEntrada(e.target.value)} />
                </C.InputContent>

                <C.RadioGroup>
                    <C.Input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={() => setSaida(!saida)}
                    />

                    <C.Label htmlFor="rIncome">Entrada</C.Label>

                    <C.Input
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={() => setSaida(!saida)}
                    />
                    <C.Label htmlFor="rExpenses">Saída</C.Label>
                </C.RadioGroup>
                <C.Button onClick={handleSave}>Adicionar</C.Button>
            </C.Container>

            <Grid itens={listaTransacao} setItens={setListaTransacao} />
        </>
    );
};
export default Form;