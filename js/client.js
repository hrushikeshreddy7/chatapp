const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');

const mh = prompt('enter your name');
socket.emit('new-user-joined', mh);

socket.on('user-joined', (data) => {
  append('${mh} joined the chat', 'right');
});
