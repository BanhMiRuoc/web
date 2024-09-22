var index = 1;
var idTimer;
function stepBack() {
    if(index == 1) {
        document.getElementsByTagName('img')[0].src = 'images/pic_010.jpg';
        document.getElementsByTagName('p')[0].innerHTML = 'pic_010.jpg (10/10)';
        document.getElementById('imageList').value = 'pic_010.jpg';
        index = 10;
        return;
    }
    if(index == 10) {
        document.getElementsByTagName('img')[0].src = 'images/pic_009.jpg';
        document.getElementsByTagName('p')[0].innerHTML = 'pic_009.jpg (09/10)';
        document.getElementById('imageList').value = 'pic_009.jpg';
        index = 9;
        return;
    }
    index -= 1;
    document.getElementsByTagName('img')[0].src = 'images/pic_00' + index + '.jpg';
    document.getElementsByTagName('p')[0].innerHTML = 'pic_00' + index + '.jpg (0' + index + '/10)';
    document.getElementById('imageList').value = 'pic_00' + index + '.jpg';
}

function stepForward() {
    if(index == 9) {
        document.getElementsByTagName('img')[0].src = 'images/pic_010.jpg';
        document.getElementsByTagName('p')[0].innerHTML = 'pic_010.jpg (10/10)';
        document.getElementById('imageList').value = 'pic_010.jpg';
        index = 10;
        return;
    }
    if(index == 10) {
        document.getElementsByTagName('img')[0].src = 'images/pic_001.jpg';
        document.getElementsByTagName('p')[0].innerHTML = 'pic_001.jpg (01/10)';
        document.getElementById('imageList').value = 'pic_001.jpg';
        index = 1;
        return;
    }
    index += 1;
    document.getElementsByTagName('img')[0].src = 'images/pic_00' + index + '.jpg';
    document.getElementsByTagName('p')[0].innerHTML = 'pic_00' + index + '.jpg (0' + index + '/10)';
    document.getElementById('imageList').value = 'pic_00' + index + '.jpg';
}
function slideShow() {
    if(document.getElementById('back-button').disabled == true) {
        document.getElementById('slide-button').innerHTML = 'Start slideshow';
        document.getElementById('back-button').disabled = false;
        document.getElementById('next-button').disabled = false;
        clearInterval(idTimer);
        return;
    }
    idTimer = setInterval(stepForward, 1000);
    document.getElementById('slide-button').innerHTML = 'Stop slideshow';
    document.getElementById('back-button').disabled = true;
    document.getElementById('next-button').disabled = true;
}

function chooseImage(image) {
    //get index of image
    index = parseInt(image.split("_")[1].substring(0,3)) - 1;
    stepForward();
}