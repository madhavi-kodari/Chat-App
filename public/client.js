// const socket = io();

// const form = document.getElementById('chat-form');
// const input = document.getElementById('msg');
// const messages = document.getElementById('messages');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (input.value) {
//         socket.emit('chat message', input.value);
//         input.value = '';
//     }
// });

// socket.on('chat message', (msg) => {
//     const item = document.createElement('li');
//     item.textContent = msg;
//     messages.appendChild(item);
//     window.scrollTo(0, document.body.scrollHeight);
// });




// ////updated code---------------------------------------------------------------




const socket = io();

const form = document.getElementById('chat-form');
const input = document.getElementById('msg');
const messages = document.getElementById('messages');

let username = prompt("Enter your username:"); // Prompt for username

// Notify others that the user has joined
socket.emit('chat message', `${username} joined the chat`);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', `${username}: ${input.value}`);
        input.value = '';
    }
});

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    if (msg.startsWith(username)) {
        item.classList.add('right'); // Align user's own messages to the right
    } else {
        item.classList.add('left'); // Align others' messages to the left
    }
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
