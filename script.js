// Load Q&A data
const qaData = {
    "How do I apply for admission?": "Visit our website and complete the online application form at https://keplercollege.ac.rw/apply",
    "What programs does Kepler offer?": "Kepler offers undergraduate degrees in Business, Communications, and Healthcare Management with international recognition through U.S. partnerships.",
    "Is financial aid available?": "Yes, financial aid is available for eligible students through scholarships and payment plans.",
    "What is the campus like?": "Our Kigali campus features modern facilities, high-speed internet, and a vibrant student community.",
    "Can I transfer credits?": "Yes, credit transfers are evaluated case-by-case. Contact admissions@keplercollege.ac.rw with your transcripts.",
    "": "I couldn't find that information. Please contact admissions@keplercollege.ac.rw for assistance."
};

// Chat functionality
document.addEventListener('DOMContentLoaded', () => {
    const chatHistory = document.getElementById('chat-history');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    function addMessage(role, content) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${role}`;
        msgDiv.innerHTML = `
            <div class="msg-content">${content}</div>
            <div class="msg-time">${new Date().toLocaleTimeString()}</div>
        `;
        chatHistory.appendChild(msgDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    function handleUserInput() {
        const question = userInput.value.trim();
        if (!question) return;

        addMessage('user', question);
        userInput.value = '';

        setTimeout(() => {
            const answer = qaData[question] || qaData[""];
            addMessage('bot', answer);
        }, 500);
    }

    sendBtn.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserInput();
    });
});
