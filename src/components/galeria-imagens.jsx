import { useState } from "react";

const coresBorda = ['#3171a9', '#4f5026', '#aeb068', '#f26666', '#257f12']

const GaleriaImagem = () => {

    const [imagemAtual, setImagemAtual] = useState(1);
    const [corBorda, setCorBorda] = useState(coresBorda[0])

    const trocarImagem = () => {
        setImagemAtual((prevImagem) => (prevImagem < 5 ? prevImagem + 1 : 1))
    }

    const trocarCorBorda = () => {
        setCorBorda((prevCor) => {
            const indexAtual = coresBorda.indexOf(prevCor);
            return coresBorda[(indexAtual + 1) % coresBorda.length]
        })
    }

    return (
        <div style={{ textAlign: "center", marginTop: '20px' }}>
            <h2>Galeria de Imagens com Alteração de Borda</h2>
            <div style={{ border: `10px solid ${corBorda}`, borderRadius: '20px', display: 'inline-block' }}>
                <img src={`./images/${imagemAtual}.jpg`} alt="" style={{ width: '219px', height: '300px' }} />

            </div>
            <div style={{ marginTop: '10px', padding: '10px' }}>
                <button onClick={trocarImagem} style={{ margin: '10px' }}>
                    Próxima Imagem
                </button>
                <button onClick={trocarCorBorda}>
                    Próxima Cor de Borda
                </button>
            </div>
        </div>
    )
}

export default GaleriaImagem;