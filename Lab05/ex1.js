$(document).ready(function() {
    makeBlocks(10);
    randomColor();
    showColorCode();
    changeBG();
    hoverBG();
    $('.cell').mouseleave(function() {
        if (previousColor) {
            $('body').css('background-color', previousColor); // Quay lại màu nền trước
        }
    });
});
function makeBlocks(n) {
    $('body').append('<div class="container"></div>')
    for(let i =  0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            $(".container").append('<div class="cell"></div>')
        }
    }
}
function showMessage(message) {
    const messageBox = $('<div class="message-box">' + message + '</div>');
    messageBox.hide().fadeIn(500).delay(3000).fadeOut(500, function() {
      messageBox.remove(); 
    });
    $('body').append(messageBox);
  }
function randomColor() {
    $('.cell').each(function() {
        $('#color-display').text('Hover a cell');
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        $(this).css('background-color', randomColor);
      });
}
function showColorCode() {
    $('.cell').hover(function() {
        color = $(this).css('background-color');
        $('#color-display').text(`${color}`); // Cập nhật mã màu hiển thị
    });
}
function changeBG() {
    $('.cell').click(function() {
        const color = $(this).css('background-color');
        $('body').css('background-color', color);
        previousColor = color; // Lưu trữ màu nền trước
        showMessage('Background color has been changed')
    });
}
function hoverBG() {
    $('.cell').hover(function() {
        const color = $(this).css('background-color');
        $('body').css('background-color', color);
    });
}
