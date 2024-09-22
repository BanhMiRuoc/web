function updateText(message) {
    console.log('It works');
    let alert = document.getElementsByClassName('alert-success')[0];
    alert.innerHTML = message;
}
function updateColor(color) {
    let alert = document.getElementsByClassName('alert-success')[0];
    console.log(color);
    alert.style.color = color;
}
function changeWeight(isBold) {
    let alert = document.getElementsByClassName('alert-success')[0];
    if (isBold) {
        alert.style.fontWeight = 'bold';
    }
    else {
        alert.style.fontWeight = 'normal';
    }
}
function changeStyle(isItalic) {
    let alert = document.getElementsByClassName('alert-success')[0];
    if (isItalic) {
        alert.style.fontStyle = 'italic';
    }
    else {
        alert.style.fontStyle = 'normal';
    }
}
function changeDecoration(isUnderline) {
    let alert = document.getElementsByClassName('alert-success')[0];
    if (isUnderline) {
        alert.style.textDecoration = 'underline';
    }
    else {
        alert.style.textDecoration = 'normal';
    }
}
function restoreDefault() {
    let alert = document.getElementsByClassName('alert-success')[0];
    alert.style.color = 'black';
    alert.style.fontWeight = 'normal';
    alert.style.fontSytle = 'normal';
    alert.style.textDecoration = 'normal';
}