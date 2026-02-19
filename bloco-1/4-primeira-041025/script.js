// 1. Obter os elementos DOM
const h1 = document.getElementById('tituloPrincipal');
const body = document.body; // document.body já faz referência ao elemento <body>

// 2. Definir a cor que queremos
const corDestino = 'green';
const corOriginal = 'blue'; // Opcional, mas boa prática para garantir o estado

// 3. Função para quando o mouse ENTRAR no H1
function handleMouseOver() {
    body.style.backgroundColor = corDestino; // Muda para verde
}

// 4. Função para quando o mouse SAIR do H1
function handleMouseOut() {
    body.style.backgroundColor = corOriginal; // Retorna para azul
}

// 5. Anexar os ouvintes de evento ao H1
h1.addEventListener('mouseover', handleMouseOver);
h1.addEventListener('mouseout', handleMouseOut);