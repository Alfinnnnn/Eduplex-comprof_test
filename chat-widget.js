const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const chatMessages = document.getElementById('chat-messages');
const chatAttentionElements = document.getElementById('chat-attention-elements');
function toggleChat() {
    if (chatWindow.classList.contains('hidden')) {
        chatWindow.classList.remove('hidden');
        if (chatAttentionElements) chatAttentionElements.classList.add('opacity-0', 'pointer-events-none');
        setTimeout(() => {
            chatWindow.classList.remove('opacity-0', 'translate-y-4');
        }, 10);
    } else {
        chatWindow.classList.add('opacity-0', 'translate-y-4');
        if (chatAttentionElements) chatAttentionElements.classList.remove('opacity-0', 'pointer-events-none');
        setTimeout(() => {
            chatWindow.classList.add('hidden');
        }, 300);
    }
}
if (chatToggle && closeChat) {
    chatToggle.addEventListener('click', toggleChat);
    closeChat.addEventListener('click', toggleChat);
}
function askFAQ(question, answer) {
    const userMsg = document.createElement('div');
    userMsg.className = 'flex items-end justify-end gap-2 max-w-[85%] self-end';
    userMsg.innerHTML = `
        <div class="bg-primary text-white p-3 rounded-2xl rounded-tr-none text-body-sm">
            ${question}
        </div>
    `;
    chatMessages.appendChild(userMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'flex items-start gap-2 max-w-[85%]';
        aiMsg.innerHTML = `
            <div class="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-sm">smart_toy</span>
            </div>
            <div class="bg-surface-container p-3 rounded-2xl rounded-tl-none text-body-sm text-on-surface">
                ${answer}
            </div>
        `;
        chatMessages.appendChild(aiMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
}
