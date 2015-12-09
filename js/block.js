$(document).ready(function() {
    $('input').keydown(function(event) {
        if(event.which == 13) {
            console.log("ENTER");
            checkCommand();
            $('input').val("");
        }
    });
});

function checkCommand() {
    var command = $('input').val();

    if(command === "red") {
        $('input').css('background-color', command);
    }

    if(command === "right") {
        $('div').css('left', $('div').offset().left + 20);
    } else if(command === "left") {
        $('div').css('left', $('div').offset().left - 20);
    }

    if(command === "wider") {
        $('input').css('width', $('input').width() + 20);
    }

    if(command === "drop") {
        $('div').css('top', '0px');
    }

    if(command === "generate") {
        $('body').append('<input type="text" />');
    }
}