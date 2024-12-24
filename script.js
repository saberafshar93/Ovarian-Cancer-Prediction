const codeInput = document.getElementById('code-input');
const loginButton = document.getElementById('login-button');
const errorMessage = document.getElementById('error-message');
const loginContainer = document.getElementById('login-container');
const chatContainer = document.getElementById('chat-container');
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

const validCode = '12345'; // کد معتبر

loginButton.addEventListener('click', () => {
    const enteredCode = codeInput.value;
    if (enteredCode === validCode) {
        loginContainer.style.display = 'none';
        chatContainer.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
    }
});

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

messageInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        sendButton.click();
    }
});