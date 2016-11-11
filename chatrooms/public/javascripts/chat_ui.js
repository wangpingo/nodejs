/**
 * Created by 35031 on 2016/11/10.
 */
function divEscapedContentElement(message) {
    return $('<div></div>').text(message);
}
function divSystemContentElement(message) {
    return $('<div></div>').html('<li>' + message + '</li>');
}
function processUserInput(chatApp, socket) {
    var message = $('#send-message').val();
    var systemMessage;
    if (message.charAt(0) == '/') {
        systemMessage = chatApp.processCommand(message);
        $('#messages').append(divSystemContentElement(systemMessage));
    } else {
        chatApp.sendMessage($('#room').text(), message);
        $('#messages').append(divEscapedContentElement(message));
        $('#messages').scrollTop($('#message').prop('scrollHeight'));
    }
    $('#send-message').val('');
}
var socket = io.connect();
$(document).ready(function () {
    var chatApp = new Chat(socket);
    socket.on('nameResult', function (result) {
        var message;
        if (result.success) {
            message = "You are now known as" + result.name + '.';
        } else {
            message = result.message;
        }
        $('#message').append(divSystemContentElement(message));
    });
    socket.on('joinResult', function (result) {
        $('#room').text(result.room);
        $('#message').append(divSystemContentElement('Room change.'))
    });
    socket.on('message', function (message) {
        var newElement = $('<div></div>').text(message.text);
        $('#messages').append(newElement);
    });
    socket.on('rooms',function(rooms){
        $('#room-list').empty();
        for(var room in rooms){
            room=room.substring(0,room.length);
            if(room!=''){
                $('#room-list').append(divEscapedContentElement(room));
            }
        }
        $('#room-list div').click(function(){
            chatApp.processCommand('/join'+$(this).text());
            $('#send-message').focus();
        })
    });
    setInterval(function(){
        socket.emit('room');
    },1000);
    $('#send-message').focus();
    $('#send-form').submit(function(){
        processUserInput(chatApp,socket);

        return false;
    })
});