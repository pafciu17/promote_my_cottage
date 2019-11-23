import io from 'socket.io-client';
const socketHandler = io('http://localhost:1917');

export default socketHandler;