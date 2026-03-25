"use strict";

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;

document.getElementById("content").appendChild(canvas);

// Assets
const bgImage = new Image();
let bgReady = false;
bgImage.onload = () => (bgReady = true);
bgImage.src = "./images/background.png";

const heroImage = new Image();
let heroReady = false;
heroImage.onload = () => (heroReady = true);
heroImage.src = "./images/hero.png";

const monsterImage = new Image();
let monsterReady = false;
monsterImage.onload = () => (monsterReady = true);
monsterImage.src = "./images/monster.png";

// Game State
const hero = { speed: 256, x: 0, y: 0 };
const monster = { x: 0, y: 0 };
let monstersCaught = 0;
const keysDown = {};

// Input
window.addEventListener("keydown", (e) => (keysDown[e.keyCode] = true));
window.addEventListener("keyup", (e) => delete keysDown[e.keyCode]);

const reset = () => {
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;
  monster.x = 32 + Math.random() * (canvas.width - 64);
  monster.y = 32 + Math.random() * (canvas.height - 64);
};

const update = (modifier) => {
  if (38 in keysDown) hero.y -= hero.speed * modifier; // Up
  if (40 in keysDown) hero.y += hero.speed * modifier; // Down
  if (37 in keysDown) hero.x -= hero.speed * modifier; // Left
  if (39 in keysDown) hero.x += hero.speed * modifier; // Right

  // Collision Check
  if (
    hero.x <= monster.x + 32 &&
    monster.x <= hero.x + 32 &&
    hero.y <= monster.y + 32 &&
    monster.y <= hero.y + 32
  ) {
    ++monstersCaught;
    reset();
  }
};

const render = () => {
  if (bgReady) ctx.drawImage(bgImage, 0, 0);
  if (heroReady) ctx.drawImage(heroImage, hero.x, hero.y);
  if (monsterReady) ctx.drawImage(monsterImage, monster.x, monster.y);

  // Pontuação Nexus Style
  ctx.fillStyle = "#fccf2f"; // Amarelo Nexus
  ctx.font = "bold 22px Lato, Arial";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Pessoas salvas: " + monstersCaught, 32, 32);
};

let then = Date.now();
const main = () => {
  const now = Date.now();
  const delta = now - then;
  update(delta / 1000);
  render();
  then = now;
  requestAnimationFrame(main);
};

reset();
main();
