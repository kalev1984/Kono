//returns element's backgroundColor in a RGB form
function getDivColor(div) {
    return getComputedStyle(div).backgroundColor;
}

//returns an array containing RGB colors
function getRgb(element) {
    let backgroundColor = getDivColor(element);
    backgroundColor = backgroundColor.replace('rgb(', '').replace(')', '');
    return backgroundColor.split(',');
}

//returns RGB color number converted to hexadecimal
function rgbToHex (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

//returns hex code equivalent of RGB
export function getHexColor(rgb) {
    var red = rgbToHex(getRgb(rgb)[0]);
    var green = rgbToHex(getRgb(rgb)[1]);
    var blue = rgbToHex(getRgb(rgb)[2]);
    return '#' + red + green + blue;
}