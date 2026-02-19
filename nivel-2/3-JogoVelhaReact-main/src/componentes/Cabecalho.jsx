
import './Cabecalho.css';

export default function Cabecalho({ vez }){
    return (
        <header className="cabecalho">
            <h1 className='titulo'>Jogo da Velha</h1>
            <p>Vez do jogador: {vez}</p>
        </header>
    )
}