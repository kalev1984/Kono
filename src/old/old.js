const HEIGHT = 550;
const WIDTH = HEIGHT * 0.9;
const FPS = 30;
const GRID_SIZE = 4;
const CELL = WIDTH / (GRID_SIZE + 2);
const STROKE = CELL / 12;
const DOT = STROKE;
const MARGIN = HEIGHT - (GRID_SIZE + 1) * CELL;

const COLOR_BOARD = "cornsilk";
const COLOR_BORDER = "wheat";
const COLOR_DOT = "sienna"; 
const COLOR_CPU = "crimson";
const COLOR_CPU_LIT = "lightpink";
const COLOR_PLAYER = "royalblue";
const COLOR_PLAYER_LIT = "lightsteelblue";

const Side = {
    BOTTOM: 0,
    LEFT: 1,
    RIGHT: 2,
    TOP: 3
}

var canvas = document.createElement("canvas");
canvas.height = HEIGHT;
canvas.width = WIDTH;
document.body.appendChild(canvas);
var canvasRectangle = canvas.getBoundingClientRect();

var ctx = canvas.getContext("2d");
ctx.lineWidth = STROKE;

var squares, playersTurn;

newGame();

canvas.addEventListener("mousemove", highlightGrid);

setInterval(loop, 1000 / FPS);

function loop() {
    drawBoard();
    drawSquares();
    drawGrid();
}

function drawBoard() {
    ctx.fillStyle = COLOR_BOARD;
    ctx.strokeStyle = COLOR_BORDER;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.strokeRect(STROKE / 2, STROKE / 2, WIDTH - STROKE, HEIGHT - STROKE);
}

function drawDot(x, y) {
    ctx.fillStyle = COLOR_DOT;
    ctx.beginPath();
    ctx.arc(x, y, DOT, 0, Math.PI * 2);
    ctx.fill();
}

function drawGrid() {
    for (let i = 0; i < GRID_SIZE + 1; i++) {
        for (let j = 0; j < GRID_SIZE + 1; j++) {
            drawDot(getGridX(j), getGridY(i));
        }
    }
}

function drawLine(x0, y0, x1, y1, color) {
    ctx.strokeStyle = color;
    ctx.beginPath;
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
}

function drawSquares() {
    for (let row of squares) {
        for (let square of row) {
            square.drawSides();
            square.drawFill();
        }
    }
}

function getColor(player, light) {
    if (player) {
        return light ? COLOR_PLAYER_LIT : COLOR_PLAYER;
    } else {
        return light ? COLOR_CPU_LIT : COLOR_CPU;
    }
}

function getGridX(col) {
    return CELL * (col + 1);
}

function getGridY(row) {
    return MARGIN + CELL * row;
}

function highlightGrid(/** @type {MouseEvent} */ ev) {
    if (!playersTurn) {
        return;
    }

    let x = ev.clientX - canvasRectangle.left;
    let y = ev.clientY - canvasRectangle.top;

    highlightSide(x, y);
}

function highlightSide(x, y) {
    for (let row of squares) {
        for (let square of row) {
            square.highlight = null;
        }
    }

    let rows = squares.length;
    let cols = squares[0].length;

    OUTER: for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (squares[i][j].contains(x, y)) {
                let side = squares[i][j].highlightSide(x, y);
                break OUTER;
            }
        }
    }
}

function newGame() {
    playersTurn = Math.random() >= 0.5;

    squares = [];
    for (let i = 0; i < GRID_SIZE; i++) {
        squares[i] = [];
        for (let j = 0; j < GRID_SIZE; j++) {
            squares[i][j] = new Square(getGridX(j), getGridY(i), CELL, CELL);
        }
    }
}

function Square(x, y, w, h) {
    this.w = w;
    this.h = h;
    this.bottom = y + h;
    this.left = x;
    this.right = x + w;
    this.top = y;
    this.highlight = null;

    this.sideBottom = {owner: null, selected: false};
    this.sideLeft = {owner: null, selected: false};
    this.sideRight = {owner: null, selected: false};
    this.sideTop = {owner: null, selected: false};

    this.contains = function(x, y) {
        return x >= this.left && x < this.right && y >= this.top && y < this.bottom;
    }

    this.drawFill = function() {

    }

    this.drawSide = function(side, color) {
        switch(side) {
            case Side.BOTTOM:
                drawLine(this.left, this.bottom, this.right, this.bottom, color);
                break;
            case Side.LEFT:
                drawLine(this.left, this.top, this.left, this.bottom, color);
                break;
            case Side.RIGHT:
                drawLine(this.right, this.top, this.right, this.bottom, color);
                break;
            case Side.TOP:
                drawLine(this.left, this.top, this.right, this.top, color);
                break;
        }
    }

    this.drawSides = function() {
        if (this.highlight != null) {
            this.drawSide(this.highlight, getColor(playersTurn, true));
        }
    }

    this.highlightSide = function(x, y) {
        let dBottom = this.bottom - y;
        let dLeft = x - this.left;
        let dRight = this.right - x;
        let dTop = y - this.top;

        let dClosest = Math.min(dBottom, dLeft, dRight, dTop);

        if (dClosest == dBottom && !this.sideBottom.selected) {
            this.highlight = Side.BOTTOM
        } else if (dClosest == dLeft && !this.sideLeft.selected) {
            this.highlight = Side.LEFT
        } else if (dClosest == dRight && !this.sideRight.selected) {
            this.highlight = Side.RIGHT
        } else if (dClosest == dTop && !this.sideTop.selected) {
            this.highlight = Side.TOP
        }
        
        return this.highlight;
    } 
}