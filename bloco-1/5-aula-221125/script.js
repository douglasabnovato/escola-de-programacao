const form = document.getElementById('form');
const descInput = document.getElementById('desc');
const valorInput = document.getElementById('valor');
const tipoInput = document.getElementById('tipo');
const lista = document.getElementById('lista');
const saldo = document.getElementById("saldo");

let transacoes = JSON.parse(localStorage.getItem('transacoes')) || [];

document.addEventListener('DOMContentLoaded', () => {
    transacoes.forEach(t => adicionarNaLista(t));
    atualizarSaldo();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const desc = descInput.value.trim();
    const valor = Number(valorInput.value);
    const tipo = tipoInput.value;

    if (desc === "" || isNaN(valor) || valor <= 0) return;

    const transacao = {
        id: Date.now(),
        desc,
        valor,
        tipo
    };

    transacoes.push(transacao);
    salvarLocal();
    adicionarNaLista(transacao);
    atualizarSaldo();

    descInput.value = '';
    valorInput.value = '';
    tipoInput.value = 'entrada';
});

function adicionarNaLista(t){
    const li = document.createElement("li")

    li.innerHTML= `
    <span>${t.desc}</span>
    <span class = "${t.tipo}">
        ${t.tipo === 'entrada' ? '+' : '-'} R$ ${t.valor.toFixed(2)}
        </span>

    <button class = "remove" onclick="remover(${t.id})>x</buton>
    `;
    lista. appendchild(li);
}

function remover (id){
    transacoes=transacoes.filter(t=> t.id !==id)
    salvarlocal();
    lista.immerHTML=""
    transacoes.forEach(t=> adicionarNalista(t));
    atualizarSaldo();
}

function atualizarSaldo(){
    const total=transacoes.reduce((acc,t) => {
    return t.tipo==='entrada? acc ++.valor:au-t.valor;
},0); 
    
    saldoE1.textContent= `saldo - R$ ${total.toFixed(2)}` ;

}

function salvarLocal(){localstorange.setIten ('transacoes',JSON.stringify(transacoes))}










    

        