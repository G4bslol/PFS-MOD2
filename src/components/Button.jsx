import '../styles/Button.css'

function Botao(props) {
    return (
        <>
            <button className={props.tipo==="limpar"?"bnt limpar":"button"} type={props.type==="clean"?"reset":"submit"}>{props.title}</button>
        </>
    )
}

export default Botao;