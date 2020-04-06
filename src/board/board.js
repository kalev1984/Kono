//return array of possible moves
export function possibleMoves(elementId) {
    let positions = [];
    let number = document.getElementById(elementId).parentElement.id;
    let row = findRowNumber(number);

    let ne = parseInt(number) - 6;
    let sw = parseInt(number) + 6;
    let nw = parseInt(number) - 4;
    let se = parseInt(number) + 4;

    //TODO: and is not occupied by another piece
    if (se < 26 && findRowNumber(se) - row == 1) {
        positions.push(se);
    } 
    if (sw < 26 && row - findRowNumber(sw) == -1) {
        positions.push(sw);
    } 
    if (nw > 1 && findRowNumber(nw) - row == -1) {
        positions.push(nw);
    } 
    if (ne > 0 && row - findRowNumber(nw) == 1) {
        positions.push(ne);
    }
    return positions;
}

//return row number of given number (0-4)
function findRowNumber(number) {
    if (number % 5 == 0) {
        return number / 5 - 1;
    }
    return (number - (number % 5)) / 5;
}