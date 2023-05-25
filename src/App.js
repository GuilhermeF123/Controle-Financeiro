import React, { useState, useEffect } from 'react'
import GlobalStyle from './styles/global';
import { Header } from './components/Header';
import { Resume } from './components/Resume';
import { Form } from './components/Form';


const App = () => {
    //o método getItem pega os itens do localStorage 
    const data = localStorage.getItem("transacao");
    const [listaTransacao, setListaTransacao] = useState(
        //verifica se existe algum iten no data
        data ?
            //se existir ele transforma os dados em JSON
            JSON.parse(data) :
            //senão ele retorna um vetor vazio
            []
    );

    const [entrada, setEntrada] = useState(0);
    const [saida, setSaida] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        //pega o total de saídas
        const totalSaidas = listaTransacao
            .filter((item) => item.saida)
            .map((transacao) => Number(transacao.entrada));
        //pega o total de entradas
        const totalEntradas = listaTransacao
            .filter((item) => !item.saida)
            .map((transacao) => Number(transacao.entrada));
        //calcula o total de entradas e saídas e joga em total
        const saida = totalSaidas.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const entrada = totalEntradas.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const total = Math.abs(entrada - saida).toFixed(2);
        //seta as entradas, saídas e total no useState
        setEntrada(`R$ ${entrada}`);
        setSaida(`R$ ${saida}`);
        setTotal(`${Number(entrada) < Number(saida) ? "-" : ""}R$ ${total}`);
    }, [listaTransacao]);

    //adicionar
    const handleAdd = (transacao) => {
        const novoVetorTransacao = [...listaTransacao, transacao];
        setListaTransacao(novoVetorTransacao);
        localStorage.setItem("transacao", JSON.stringify(novoVetorTransacao));
    };


    return (
        <>
            <Header />
            <Resume entrada={entrada} saida={saida} total={total} />
            <Form
                handleAdd={handleAdd}
                listaTransacao={listaTransacao}
                setListaTransacao={setListaTransacao}
            />
            <GlobalStyle />
        </>
    )
}

export default App