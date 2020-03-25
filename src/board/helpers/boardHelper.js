import gridHelper from './gridHelper';
import * as constants from '../constants';

function loop(ctx) {
    drawBoard(ctx);
    drawGrid(ctx);
}

function drawBoard(ctx) {
    ctx.fillStyle = constants.COLOR_BOARD;
    ctx.strokeStyle = constants.COLOR_BORDER;
    ctx.fillRect(0, 0, constants.WIDTH, constants.HEIGHT);
    ctx.strokeRect(constants.STROKE / 2, constants.STROKE / 2, constants.WIDTH - constants.STROKE, constants.HEIGHT - constants.STROKE);
}

function drawGrid(ctx) {
    for (let i = 0; i < constants.GRID_SIZE + 1; i++) {
        for (let j = 0; j < constants.GRID_SIZE + 1; j++) {
            gridHelper.drawDot(gridHelper.getGridX(j), gridHelper.getGridY(i), ctx);
        }
    }
}

export default { loop };