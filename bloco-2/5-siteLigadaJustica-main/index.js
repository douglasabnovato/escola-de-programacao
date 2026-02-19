const menu = document.getElementById('menu');
const content = document.getElementById('content');
const indicators = document.querySelector('.carousel-indicators');
let currentSlide = 0;
let interval;
let slides;

// Inicializa os slides
function initializeSlides() {
    slides = document.querySelectorAll('.carousel-images img');
    showSlide(currentSlide);
}

// Função para mostrar o slide atual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Função para mover os slides
function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Função para inicializar o carrossel
function initializeCarousel() {
    initializeSlides();
    clearInterval(interval);
    interval = setInterval(() => {
        moveSlide(1);
    }, 3000);
}

// Função para abrir e fechar o menu
function toggleMenu() {
    menu.classList.toggle('open');
    content.classList.toggle('shifted');
    indicators.classList.toggle('shifted');
}

// Seleciona todos os itens do menu e adiciona o nome como um span
document.querySelectorAll('.menu-item').forEach(item => {
    const heroName = item.getAttribute('data-hero');

    // Cria o elemento span para o nome do herói
    const nameSpan = document.createElement('span');
    nameSpan.textContent = heroName;
    item.appendChild(nameSpan);

    // Adiciona o evento de clique a cada item
    item.addEventListener('click', event => {
        if (heroName !== "Home") {
            content.innerHTML = `<h1>${heroName}</h1>`;
            changeSlide([...document.querySelectorAll('.menu-item')].indexOf(item));
        } else {
            toggleMenu();
            loadHomeContent();
        }
    });
});

function changeSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    
    // Atualiza os botões de indicador
    const buttons = document.querySelectorAll('.carousel-indicators button');
    buttons.forEach((button, i) => {
        button.classList.remove('active');
        if (i === index) {
            button.classList.add('active');
        }
    });
}

// Função para carregar o conteúdo da home
function loadHomeContent() {
    content.innerHTML = `
       <h1 id="homeH1">Sejam bem-vindos a Liga da Justiça!!!</h1>
        <p id="homeP">
            A Liga da Justiça é uma das mais icônicas equipes de super-heróis da DC, reunindo personagens que simbolizam
            valores como justiça, coragem e sacrifício. Desde sua criação nos anos 60 até as adaptações em filmes e
            séries, a liga enfrenta ameaças que nenhum herói pode combater sozinho, cativando fãs ao redor do mundo.
            Neste espaço, vamos explorar alguns dos personagens que compõem essa equipe lendária e descobrir
            curiosidades fascinantes sobre eles!
        </p>
        <div class="carousel">
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <div class="carousel-images">
                <img src="imagens/liga.jpg" alt="liga" class="active">
                <img src="imagens/liga1.jpg" alt="liga1">
                <img src="imagens/liga2.jpg" alt="liga2">
                <img src="imagens/liga3.jpg" alt="liga3">
                <img src="imagens/liga4.jpg" alt="liga4">
            </div>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
            <div class="carousel-indicators">
                <button type="button" onclick="changeSlide(0)" class="active"></button>
                <button type="button" onclick="changeSlide(1)"></button>
                <button type="button" onclick="changeSlide(2)"></button>
                <button type="button" onclick="changeSlide(3)"></button>
                <button type="button" onclick="changeSlide(4)"></button>
            </div>
        </div>
        </div>`;

    currentSlide = 0; // Reseta o slide atual
    initializeCarousel(); // Chama a função para iniciar o carrossel
}

// Inicia o carrossel ao carregar
initializeCarousel();


// Adiciona evento de clique específico para "Batman"
document.querySelector('.menu-item[data-hero="Batman"]').addEventListener('click', function() {
  
    content.innerHTML = `
        <h1 class="heroH1"> Batman</h1>
        <p class="heroP"> Batman é a identidade secreta de Bruce Wayne, um bilionário e filantropo de Gotham City. 
        Após testemunhar o assassinato de seus pais na infância, ele jura combater o crime. Treinando física e 
        intelectualmente, Bruce cria a persona de Batman, inspirada em morcegos. Ao contrário de muitos super-heróis, 
        ele não possui superpoderes e utiliza seu intelecto, habilidades em artes marciais e recursos financeiros 
        para lutar contra o crime. Uma grande variedade de vilões compõe a galeria de inimigos do Batman, 
        incluindo o Coringa, um dos seus principais inimigos.</p>
        <div class="carousel">
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <div class="carousel-images">
                <img src="imagens/batman1.jpg" alt="batman1">
            </div>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>`;

    // Oculta os botões
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';

    // Reseta o slide atual
    currentSlide = 0; 
    slides = document.querySelectorAll('.carousel-images img'); // Atualiza a variável de slides
    initializeCarousel(); // Chama a função para iniciar o carrossel
});

// Adiciona evento de clique específico para "Superman"
document.querySelector('.menu-item[data-hero="Superman"]').addEventListener('click', function() {
  
    content.innerHTML = `
        <h1 class="heroH1"> Superman</h1>
        <p class="heroP"> Superman é a identidade secreta de Clark Kent, 
        um extraterrestre de Krypton que foi enviado à Terra ainda bebê. 
        Criado por um casal de fazendeiros em Smallville, Clark descobre seus poderes extraordinários, 
        incluindo superforça, velocidade e capacidade de voar. Como adulto, ele se torna um repórter em Metrópolis, 
        onde usa sua identidade de Superman para proteger a humanidade. Diferente de Batman, 
        Superman possui superpoderes, mas também valoriza a justiça e a moralidade. 
        Sua galeria de vilões inclui Lex Luthor, seu arqui-inimigo, que frequentemente tenta destruir 
        tanto Superman quanto a cidade.</p>
        <div class="carousel">
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <div class="carousel-images">
                <img src="imagens/superman1.jpg" alt="superman1">
            </div>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>`;

    // Oculta os botões
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
    
    // Reseta o slide atual
    currentSlide = 0; 
    slides = document.querySelectorAll('.carousel-images img'); // Atualiza a variável de slides
    initializeCarousel(); // Chama a função para iniciar o carrossel
});

// Adiciona evento de clique específico para "Flash"
document.querySelector('.menu-item[data-hero="Flash"]').addEventListener('click', function() {
  
    content.innerHTML = `
        <h1 class="heroH1"> Flash</h1>
        <p class="heroP"> Flash é a identidade secreta de Barry Allen, um cientista forense que 
        ganha supervelocidade após ser atingido por um raio e exposto a produtos químicos. 
        Como Flash, ele se torna o defensor de Central City, usando sua incrível rapidez para 
        combater o crime e proteger os inocentes. Barry não só pode correr em alta velocidade, 
        mas também manipula o tempo e viaja entre dimensões. Apesar de seus poderes, ele também 
        é guiado por um forte senso de justiça. Entre seus principais inimigos está o Flash Reverso, 
        um vilão que representa sua antítese e desafia suas habilidades em várias corridas épicas.</p>
        <div class="carousel">
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <div class="carousel-images">
                <img src="imagens/flash1.jpg" alt="flash1">
            </div>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>`;

    // Oculta os botões
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';

    // Reseta o slide atual
    currentSlide = 0; 
    slides = document.querySelectorAll('.carousel-images img'); // Atualiza a variável de slides
    initializeCarousel(); // Chama a função para iniciar o carrossel
});

// Adiciona evento de clique específico para "Mulher Maravilha"
document.querySelector('.menu-item[data-hero="Mulher Maravilha"]').addEventListener('click', function() {
  
    content.innerHTML = `
        <h1 class="heroH1"> Mulher Maravilha</h1>
        <p class="heroP"> Mulher-Maravilha, ou Diana Prince, é uma princesa da ilha mítica de Themyscira, 
        habitada por Amazonas. Filha da rainha Hipólita e criada em um ambiente de guerreiros, Diana é dotada de 
        força sobre-humana, agilidade, habilidades de combate e poderes divinos. Ela deixa sua terra natal para 
        lutar pela justiça e pela paz no mundo dos homens, acreditando na importância da igualdade e da compaixão. 
        Como Mulher-Maravilha, Diana usa sua icônica armadura, laço da verdade e braceletes indestrutíveis para 
        enfrentar vilões e proteger os inocentes. Entre seus principais inimigos está Ares, o deus da guerra, 
        que frequentemente busca espalhar o caos e a destruição. Mulher-Maravilha representa não apenas a força, 
        mas também a sabedoria e a empatia.</p>
        <div class="carousel">
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <div class="carousel-images">
                <img src="imagens/mulherMaravilha1.jpg" alt="mulherMaravilha1">
            </div>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>`;

    // Oculta os botões
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';

    // Reseta o slide atual
    currentSlide = 0; 
    slides = document.querySelectorAll('.carousel-images img'); // Atualiza a variável de slides
    initializeCarousel(); // Chama a função para iniciar o carrossel
});

// Adiciona evento de clique específico para "Lanterna Verde"
document.querySelector('.menu-item[data-hero="Lanterna Verde"]').addEventListener('click', function() {
  
    content.innerHTML = `
        <h1 class="heroH1"> Lanterna Verde</h1>
        <p class="heroP"> Lanterna Verde é a identidade de Hal Jordan, um piloto de caça da Força 
        Aérea dos Estados Unidos que se torna um membro da Tropa dos Lanternas Verdes, uma corporação 
        intergaláctica dedicada à proteção do universo. Hal é escolhido para portar o anel de poder, 
        que lhe confere a habilidade de criar construções e realizar feitos incríveis através da força 
        de sua vontade e imaginação.
        Como Lanterna Verde, ele luta contra ameaças cósmicas e defende a paz e a justiça em todo o universo. 
        Hal é guiado por um forte senso de dever e coragem. Entre seus principais inimigos estão Sinestro, 
        um ex-Lanterna Verde que se torna um dos seus maiores rivais, e Parallax, uma entidade que representa o medo. 
        Lanterna Verde simboliza a luta contra a opressão e a busca por esperança.</p>
        <div class="carousel">
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <div class="carousel-images">
                <img src="imagens/lanternaVerde1.jpg" alt="lanternaVerde1">
            </div>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>`;

    // Oculta os botões
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';

    // Reseta o slide atual
    currentSlide = 0; 
    slides = document.querySelectorAll('.carousel-images img'); // Atualiza a variável de slides
    initializeCarousel(); // Chama a função para iniciar o carrossel
});

// Adiciona evento de clique específico para "Arqueiro Verde"
document.querySelector('.menu-item[data-hero="Arqueiro Verde"]').addEventListener('click', function() {
  
    content.innerHTML = `
        <h1 class="heroH1"> Arqueiro Verde</h1>
        <p class="heroP"> Arqueiro Verde, ou Oliver Queen, é um bilionário e playboy de Star City 
        que se transforma em vigilante após ficar preso em uma ilha deserta por cinco anos. Durante esse tempo, 
        ele aprende a sobreviver e se torna um mestre arqueiro, utilizando suas habilidades de tiro com arco e 
        estratégias de combate para lutar contra a corrupção e o crime.
        Como Arqueiro Verde, Oliver se dedica a proteger sua cidade, frequentemente enfrentando tanto criminosos 
        quanto figuras políticas corruptas. Ele é conhecido por seu forte senso de justiça e suas opiniões progressistas. 
        Entre seus principais inimigos estão o Exterminador, um mercenário habilidoso, e Malcolm Merlyn, um rival que 
        busca desestabilizar sua missão. Arqueiro Verde simboliza a luta contra a injustiça e a defesa dos oprimidos.</p>
        <div class="carousel">
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <div class="carousel-images">
                <img src="imagens/arqueiroVerde1.jpg" alt="arqueiroVerde1">
            </div>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>`;

    // Oculta os botões
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';

    // Reseta o slide atual
    currentSlide = 0; 
    slides = document.querySelectorAll('.carousel-images img'); // Atualiza a variável de slides
    initializeCarousel(); // Chama a função para iniciar o carrossel
});

// Adiciona evento de clique específico para "Aquaman"
document.querySelector('.menu-item[data-hero="Aquaman"]').addEventListener('click', function() {
  
    content.innerHTML = `
        <h1 class="heroH1"> Aquaman</h1>
        <p class="heroP"> Aquaman é a identidade secreta de Arthur Curry, o filho de um humano e 
        da rainha Atlanna, soberana do reino submarino de Atlântida. Desde jovem, Arthur descobre 
        que possui a habilidade de se comunicar com criaturas marinhas, além de superforça, 
        resistência e a capacidade de nadar em altas velocidades.
        Como Aquaman, ele luta para proteger tanto o mundo subaquático quanto a superfície, 
        defendendo a paz entre os dois reinos. Entre seus principais inimigos estão o Ocean Master, 
        seu meio-irmão que busca o trono de Atlântida, e Black Manta, um mercenário que nutre um forte 
        ódio por Aquaman. A história de Aquaman explora temas de identidade, liderança e a importância 
        da harmonia entre os mundos aquático e terrestre.</p>
        <div class="carousel">
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <div class="carousel-images">
                <img src="imagens/aquaman1.jpg" alt="aquaman1">
            </div>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>`;

    // Oculta os botões
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';

    // Reseta o slide atual
    currentSlide = 0; 
    slides = document.querySelectorAll('.carousel-images img'); // Atualiza a variável de slides
    initializeCarousel(); // Chama a função para iniciar o carrossel
});

// Adiciona evento de clique específico para "Ciborgue"
document.querySelector('.menu-item[data-hero="Ciborgue"]').addEventListener('click', function() {
  
    content.innerHTML = `
        <h1 class="heroH1"> Ciborgue</h1>
        <p class="heroP"> Ciborgue, ou Victor Stone, é um jovem prodígio em tecnologia e atlético 
        que se torna um herói após um trágico acidente que o deixa gravemente ferido. Seu pai, um 
        cientista, utiliza tecnologia avançada para salvá-lo, transformando Victor em um híbrido 
        de humano e máquina, dotado de habilidades cibernéticas extraordinárias.
        Como Ciborgue, ele possui força sobre-humana, velocidade e a capacidade de se conectar e 
        interagir com sistemas eletrônicos, tornando-se um especialista em tecnologia. Victor se 
        junta à Liga da Justiça para lutar contra ameaças que colocam o mundo em perigo, defendendo 
        tanto a humanidade quanto a tecnologia. Entre seus principais inimigos estão o Lobo da Estepe 
        e a equipe de vilões conhecidos como a "União dos Villains". Ciborgue representa a luta pela aceitação 
        e a interseção entre humanidade e tecnologia.</p>
        <div class="carousel">
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <div class="carousel-images">
                <img src="imagens/ciborgue1.jpg" alt="ciborgue1">
            </div>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>`;

    // Oculta os botões
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';

    // Reseta o slide atual
    currentSlide = 0; 
    slides = document.querySelectorAll('.carousel-images img'); // Atualiza a variável de slides
    initializeCarousel(); // Chama a função para iniciar o carrossel
});

// Adiciona evento de clique específico para "Shazam"
document.querySelector('.menu-item[data-hero="Shazam"]').addEventListener('click', function() {
  
    content.innerHTML = `
        <h1 class="heroH1"> Shazam</h1>
        <p class="heroP"> Shazam é a identidade secreta de Billy Batson, um garoto que se transforma 
        em um super-herói adulto ao pronunciar a palavra "Shazam", invocando os poderes de deuses 
        e heróis antigos. Ele combina a inocência de uma criança com a força de um herói, lutando 
        contra vilões. Um importante adversário é o Adão Negro, que também possui poderes mágicos, 
        mas os usa para fins egoístas. A dinâmica entre Shazam e Adão Negro representa o conflito 
        entre poder e responsabilidade, destacando os diferentes caminhos que 
        se pode seguir ao ter grande poder.</p>
        <div class="carousel">
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <div class="carousel-images">
                <img src="imagens/shazam1.jpg" alt="shazam1">
            </div>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>`;

    // Oculta os botões
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';

    // Reseta o slide atual
    currentSlide = 0; 
    slides = document.querySelectorAll('.carousel-images img'); // Atualiza a variável de slides
    initializeCarousel(); // Chama a função para iniciar o carrossel
});
