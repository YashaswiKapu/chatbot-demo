function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value;
    let chatBox = document.getElementById("chat-box");

    if (message === "") return;

    chatBox.innerHTML += "<div class='user'>You: " + message + "</div>";

    let reply = getBotReply(message.toLowerCase());

    setTimeout(() => {
        chatBox.innerHTML += "<div class='bot'>Bot: " + reply + "</div>";
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = "";
}

function getBotReply(message) {
    if (message.includes("hi") || message.includes("hello")) {
        return "Hello! How can I help you?";
    } else if (message.includes("name")) {
        return "I am a simple chatbot.";
    } else if (message.includes("help")) {
        return "Sure, please tell me your query.";
    } else {
        return "Sorry, I didn't understand that.";
    }
}

document.getElementById("userInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
}
);
