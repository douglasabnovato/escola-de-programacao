import './Jogo.css';

import Cabecalho from './Cabecalho';
import Celula from './Celula';
import Rodape from './Rodape';
import Jogada from './Jogada';

import { useState } from 'react';

export default function Jogo() {

    const [vezJogador, setVezJogador] = useState('x');
    const [estadoTabuleiro, setEstadoTabuleiro] = useState(
        [null, null, null, null, null, null, null, null, null]
    );
    const [historicoJogadas, setHistoricoJogadas] = useState([])

 function fimJogo(tab) {
    if (tab[0] !== null && tab[0] === tab[1] && tab[0] === tab[2]) return tab[0];
    if (tab[3] !== null && tab[3] === tab[4] && tab[3] === tab[5]) return tab[3];
    if (tab[6] !== null && tab[6] === tab[7] && tab[6] === tab[8]) return tab[6];

    if (tab[0] !== null && tab[0] === tab[3] && tab[0] === tab[6]) return tab[0];
    if (tab[1] !== null && tab[1] === tab[4] && tab[1] === tab[7]) return tab[1];
    if (tab[2] !== null && tab[2] === tab[5] && tab[2] === tab[8]) return tab[2];

    if (tab[0] !== null && tab[0] === tab[4] && tab[0] === tab[8]) return tab[0];
    if (tab[2] !== null && tab[2] === tab[4] && tab[2] === tab[6]) return tab[2];

    return null;
}

    function empateJogo(tab) {
        const tabCheio = tab.every(celula => celula !== null);
        const vencedor = fimJogo(tab);
        
        return tabCheio && vencedor === null;
    }


    function fazerJogada(pos) {
        if (estadoTabuleiro[pos] == null && !fimJogo(estadoTabuleiro)) {
            let vez = vezJogador;
            let estadoNovo = [...estadoTabuleiro];
            let historico = [...historicoJogadas];

            estadoNovo[pos] = vez;

            if (vez == 'x') {
                vez = 'o';
            } else {
                vez = 'x';
            }

            const vencedor = fimJogo(estadoNovo);
            if (vencedor) {
                alert(`O Jogo acabou e o vencedor foi ${vencedor}`);
            } else if (empateJogo(estadoNovo)) {
                alert("O Jogo terminou em empate!");
            }

            historico.push(estadoNovo);

            setEstadoTabuleiro(estadoNovo);
            setVezJogador(vez);
            setHistoricoJogadas(historico);

        }
    }

    function reiniciarJogo() {
        setEstadoTabuleiro([null, null, null, null, null, null, null, null, null]);
        setVezJogador('x'); 
        setHistoricoJogadas([]); 
    }
    
    function retornarHistorico(ind){
        let indExcluir = ind + 1
        let historico = [...historicoJogadas];
        //alert(historico)
        let novoHistorico = historico.slice(0, indExcluir)
        //alert(novoHistorico)

        setEstadoTabuleiro(novoHistorico[ind]);
        setHistoricoJogadas(novoHistorico);

        if (novoHistorico.length % 2 == 0) {
            setVezJogador('x');
        }else{
            setVezJogador('o');
        }
    }

    return (
        <div className='tela'>
            <div className="jogo">
                <Cabecalho vez={vezJogador} />
                <div className='tabuleiro'>
                    <div className='linhaJogo'>
                        <Celula valor={estadoTabuleiro[0]} onClick={() => fazerJogada(0)} />
                        <Celula valor={estadoTabuleiro[1]} onClick={() => fazerJogada(1)} />
                        <Celula valor={estadoTabuleiro[2]} onClick={() => fazerJogada(2)} />
                    </div>
                    <div className='linhaJogo'>
                        <Celula valor={estadoTabuleiro[3]} onClick={() => fazerJogada(3)} />
                        <Celula valor={estadoTabuleiro[4]} onClick={() => fazerJogada(4)} />
                        <Celula valor={estadoTabuleiro[5]} onClick={() => fazerJogada(5)} />
                    </div>
                    <div className='linhaJogo'>
                        <Celula valor={estadoTabuleiro[6]} onClick={() => fazerJogada(6)} />
                        <Celula valor={estadoTabuleiro[7]} onClick={() => fazerJogada(7)} />
                        <Celula valor={estadoTabuleiro[8]} onClick={() => fazerJogada(8)} />
                    </div>
                </div>
                <Rodape historico={historicoJogadas} onClick={retornarHistorico}/>
                <button className="reiniciarJogo" onClick={(reiniciarJogo)}>Reiniciar Jogo</button>
            </div>
        </div>

    )
}