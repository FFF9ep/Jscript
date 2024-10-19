const socket = new WebSocket('ws://localhost:8080');

const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatBox = document.getElementById('chatBox');

socket.onmessage = (event) => {
    const messageItem = document.createElement('li');
    messageItem.textContent = event.data;
    chatBox.appendChild(messageItem);
};

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    socket.send(message);
    messageInput.value = '';
});
