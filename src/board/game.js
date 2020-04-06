import { getHexColor } from './color';
import { Board } from './constants';

export function move(destinationId, playerOne) {
    let divId = null;
    let divs = document.getElementsByClassName(playerOne.elementClassName);
    for (let i = 0; i < divs.length; i++) {
        if (getHexColor(divs[i]) == playerOne.selectedColor) {
            divId = divs[i];
            break
        }
    }
    
    let b = new Board();
    if (
        divId !== null 
        && divId.id !== destinationId 
        && destinationId.indexOf('p') === -1 
        && destinationId.indexOf('container') === -1 
        && document.getElementById(destinationId).style.backgroundColor == b.possibleMoves) {
            
        document.getElementById(destinationId).style.backgroundColor = '#dcdcdc';
        let fragment = document.createDocumentFragment();
        fragment.appendChild(document.getElementById(divId.id));
        document.getElementById(destinationId).appendChild(fragment);
        document.getElementById(divId.id).style.backgroundColor = playerOne.notSelectedColor;
        playerOne.selected = 'false';
        return true;
    }
    return false;
}

export function highlightMoves(moveArray, isSelected) {
    let b = new Board();
    if (moveArray.length > 0) {
        for (let i = 0; i < moveArray.length; i++) {
            if (isSelected) {
                document.getElementById(moveArray[i]).style.backgroundColor = b.possibleMoves;
            } else {
                document.getElementById(moveArray[i]).style.backgroundColor = b.emptyBoard;
            }
        }
    }
}