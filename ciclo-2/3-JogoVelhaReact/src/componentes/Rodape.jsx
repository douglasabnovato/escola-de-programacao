import Jogada from "./Jogada";
import "./Rodape.css";

export default function Rodape({historico , onClick}){
    let jogadas = null;

    jogadas = historico.map(
        (item , index) => <Jogada jogada={item} id={index} onClick={()=>onClick(index)}/>
    )
    
    return (
        <footer className="rodape">
            <p>Histórico de Jogadas: </p>
            
            { jogadas }
        </footer>
    )
}