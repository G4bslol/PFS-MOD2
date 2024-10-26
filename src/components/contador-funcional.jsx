import React, {useState} from "react"

const ContadorFuncional = () => {
    
    const [contador, setContador] = useState(0);
    const [usuario, setUsuario] = useState('');

    const incrementar = () => {
        setContador(contador+1)
    }
    const decrementar = () => {
        setContador(contador-1)
    }

    const handleChange = (e) => {
        setUsuario(e.target.value);
    }

        return (
            <div>
                <h2>Contador (Função)</h2>
                <p>Contador: {contador}</p>
                <button type="button" onClick={incrementar}>Incrementar</button>
                <button type="button" onClick={decrementar}>Decrementar</button>
                <br />
                <input type="text" placeholder="Nome do usuário" 
                    value={usuario}
                    onChange={handleChange}
                />
                <p>{usuario}</p>
            </div>
        )
    }

export default ContadorFuncional;