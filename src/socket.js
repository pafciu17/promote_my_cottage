import io from 'socket.io-client';
const socket = io('http://localhost:1917');

socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});