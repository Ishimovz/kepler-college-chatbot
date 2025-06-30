// Basic chatbot functionality
document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const chatOutput = document.getElementById('chat-output');
    
    chatOutput.innerHTML += `<div class="user-message">${userInput}</div>`;
    // Add your response logic here
});
