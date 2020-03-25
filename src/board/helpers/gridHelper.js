import * as constants from '../constants';

function drawDot(x, y, ctx) {
    ctx.fillStyle = constants.COLOR_DOT;
    ctx.beginPath();
    ctx.arc(x, y, constants.DOT, 0, Math.PI * 2);
    ctx.fill();
}

function getGridX(col) {
    return constants.CELL * (col + 1);
}

function getGridY(row) {
    return constants.MARGIN + constants.CELL * row;
}

export default { drawDot, getGridX, getGridY };