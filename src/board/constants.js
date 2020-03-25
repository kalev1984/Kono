export default {
    HEIGHT : 550,
    WIDTH : HEIGHT * 0.9,
    FPS : 30,
    GRID_SIZE : 4,
    CELL : WIDTH / (GRID_SIZE + 2),
    STROKE : CELL / 12,
    DOT : STROKE,
    MARGIN : HEIGHT - (GRID_SIZE + 1) * CELL,

    COLOR_BOARD : "cornsilk",
    COLOR_BORDER : "wheat",
    COLOR_DOT : "sienna",
    COLOR_CPU : "crimson",
    COLOR_CPU_LIT : "lightpink",
    COLOR_PLAYER : "royalblue",
    COLOR_PLAYER_LIT : "lightsteelblue"
}