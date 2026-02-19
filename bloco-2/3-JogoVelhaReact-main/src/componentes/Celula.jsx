import './Celula.css';

export default function Celula({valor, onClick}){ 
    return(
        <button className="celula" onClick={onClick}>
            {valor}
        </button>
    )
}