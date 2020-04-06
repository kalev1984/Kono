export class PlayerOne {

    constructor(){
        this.selected = 'false';
        this.selectedColor = '#ffffff';
        this.notSelectedColor = '#ffff00';
        this.elementClassName = 'player1';
    }
}

export class PlayerTwo {
    
    constructor(){
        this.selected = 'false';
        this.selectedColor = '#ff54ff';
        this.notSelectedColor = '#ff0000';
        this.elementClassName = 'player2';
    }
}

export class Board {
    constructor() {
        this.possibleMoves = '#99ff99';
        this.emptyBoard = '#dcdcdc';
    }
}