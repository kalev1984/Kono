import helper from './helpers/boardHelper';

export default function drawCanvas() {
    const HEIGHT = 550;
    const WIDTH = HEIGHT * 0.9;
    const FPS = 30;
    const GRID_SIZE = 5;
    const CELL = WIDTH / (GRID_SIZE + 2);
    const STROKE = CELL / 12;

    let canvas = document.createElement("canvas");
    canvas.height = HEIGHT;
    canvas.width = WIDTH;
    document.body.appendChild(canvas);

    let ctx = canvas.getContext("2d");
    ctx.lineWidth = STROKE;
    setInterval(helper.loop(ctx), 1000 / FPS);
}