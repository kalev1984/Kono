import { getHexColor } from './color';
import { PlayerOne, PlayerTwo } from './constants';
import { move, highlightMoves } from './game';
import { possibleMoves } from './board';

//returns id of an element clicked
function getDiv(ev) {
    var x = ev.clientX;
    var y = ev.clientY;

    return document.elementFromPoint(x, y).id;
}

function getDivId(ev) {
    let selected = getDiv(ev);
    return document.getElementById(selected);
}

let isPlayerTwo = 'false';
let p1 = new PlayerOne();
let p2 = new PlayerTwo();

export function moveGamePiece(/** @type {MouseEvent} */ ev) {
    let b = getDivId(ev);
    let color = getHexColor(b);

    if (isPlayerTwo == 'false') {
        if (color == p1.notSelectedColor && p1.selected == 'false') {
            b.style.backgroundColor = p1.selectedColor;
            highlightMoves(possibleMoves(b.id), true);
            p1.selected = 'true';
        } else if (color == p1.selectedColor) {
            b.style.backgroundColor = p1.notSelectedColor;
            highlightMoves(possibleMoves(b.id), false);
            p1.selected = 'false';
        }
        //make a move if a piece is selected
        if (move(b.id, p1) == true) {
            isPlayerTwo = 'true';
        }
        
    } else if (isPlayerTwo == 'true') {
        if (color == p2.notSelectedColor && p2.selected == 'false') {
            b.style.backgroundColor = p2.selectedColor;
            highlightMoves(possibleMoves(b.id), true);
            p2.selected = 'true';
        } else if (color == p2.selectedColor) {
            b.style.backgroundColor = p2.notSelectedColor;
            highlightMoves(possibleMoves(b.id), false);
            p2.selected = 'false';
        }
        if (move(b.id, p2) == true) {
            isPlayerTwo = 'false';
        }
    }
}