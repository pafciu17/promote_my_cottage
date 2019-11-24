import io from 'socket.io-client';
const socketHandler = io('http://172.104.250.87:3001');

export default socketHandler;