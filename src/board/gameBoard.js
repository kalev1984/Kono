export default function drawCanvas() {
    const HEIGHT = 550;
    const WIDTH = HEIGHT * 0.9;
    const FPS = 30;
    const COLOR_BOARD = "cornsilk";

    let canvas = document.createElement("canvas");
    canvas.height = HEIGHT;
    canvas.width = WIDTH;
    document.body.appendChild(canvas);

    let ctx = canvas.getContext("2d");

    setInterval(loop, 1000 / FPS);

    function loop() {
        drawBoard();
    }

    function drawBoard() {
        ctx.fillStyle = COLOR_BOARD;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }
}
