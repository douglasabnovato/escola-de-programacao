const carrossel = document.getElementById('carrossel');
const videos = carrossel.querySelectorAll('video');
const anterior = document.querySelector('.anterior');
const proximo = document.querySelector('.proximo');
let index = 0;

function getVideoWidth() {
  const video = videos[0];
  const estilo = getComputedStyle(carrossel);
  const gap = parseInt(estilo.gap) || 30;
  return video.offsetWidth + gap;
}

function atualizarCarrossel() {
  const offset = -(index * getVideoWidth());
  carrossel.style.transform = `translateX(${offset}px)`;
}

function trocarVideo(novoIndex) {
  if (videos[index]) {
    videos[index].pause();
    videos[index].currentTime = 0;
  }

  index = (novoIndex + videos.length) % videos.length;

  if (videos[index]) {
    videos[index].muted = true;
    videos[index].play();
  }

  atualizarCarrossel();
}

function configurarCarrossel() {
  anterior.addEventListener('click', () => trocarVideo(index - 1));
  proximo.addEventListener('click', () => trocarVideo(index + 1));
  window.addEventListener('resize', atualizarCarrossel);
  window.addEventListener('load', () => {
    videos.forEach((video, i) => {
      video.muted = true;
      video.autoplay = true;
      video.load();
      if (i !== index) video.pause();
    });
    atualizarCarrossel();
  });
}

function carregarComentarios() {
  const comentariosLista = document.getElementById('comentarios-lista');
  const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

  comentariosLista.innerHTML = '';

  comentarios.slice().reverse().forEach(({ nome, comentario }) => {
    const div = document.createElement('div');
    div.classList.add('comentario');
    div.innerHTML = `
      <strong>${nome || 'Anônimo'}</strong><br>
      <p>${comentario}</p>
      <hr>
    `;
    comentariosLista.appendChild(div);
  });
}

function configurarFormularioComentarios() {
  const form = document.getElementById('form-comentario');
  const nomeInput = document.getElementById('nome');
  const comentarioInput = document.getElementById('comentario');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = nomeInput.value.trim();
    const comentario = comentarioInput.value.trim();

    if (!comentario) {
      alert("O campo de comentário não pode estar vazio.");
      return;
    }

    const novoComentario = { nome, comentario };
    const comentariosExistentes = JSON.parse(localStorage.getItem('comentarios')) || [];

    comentariosExistentes.push(novoComentario);
    localStorage.setItem('comentarios', JSON.stringify(comentariosExistentes));

    nomeInput.value = '';
    comentarioInput.value = '';

    carregarComentarios();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  configurarCarrossel();
  configurarFormularioComentarios();
  carregarComentarios();
});
