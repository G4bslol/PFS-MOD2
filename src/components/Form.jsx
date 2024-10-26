import React, { useState } from "react";
import '../styles/Form.css';
import Botao from "./Button";

function Form({ onDataChange }) {
    const [name, setName] = useState("");

    const [rollCall, setRollCall] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setRollCall([...rollCall, {name}]);

        onDataChange(rollCall)
        setName("");
    };

    const handleReset = (e) => {
        setName("")
    }

    return (
        <>
            <h1>Lista de chamada</h1>

            <form onSubmit={handleSubmit} onReset={handleReset}>
                <div>
                    <label>Nome: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Botao title="Adicionar"/>
                    <Botao tipo="limpar" type="clean" title="Limpar"/>
                </div>
                <p>Nota do Aluno: Para começar a surgir os nomes informe pelo menos 2!</p>
            </form>

        </>
    );

}

export default Form;