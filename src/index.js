import { moveGamePiece } from './board/mouse';

let canvas = document.getElementById("container");
canvas.addEventListener("click", moveGamePiece);
