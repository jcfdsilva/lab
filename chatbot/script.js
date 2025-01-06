function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    var chatDisplay = document.getElementById('chat-display');

    if (userInput.trim() !== '') {
        // Display user's message
        chatDisplay.innerHTML += '<div class="sent"><p> ' + userInput + '</p></div>';
        
        // Simulate a bot response (you can replace this with actual bot logic)
        var botResponse = 'Bot: Thanks for your message!';
        chatDisplay.innerHTML += '<div class="received"><p>' + botResponse + '</p></div>';

        // Clear the input field
        document.getElementById('user-input').value = '';

        // Scroll to the bottom of the chat display
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
}
