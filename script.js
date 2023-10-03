
const assistant = document.getElementById('assistant');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const welcomeMessage = document.getElementById('welcomeMessage');
const typedText = document.getElementById('typedText');
// Add more card variables as needed

card1.addEventListener('mouseover', () => {
    assistant.style.transform = 'translateX(0)'; // Move to card 1
});

card2.addEventListener('mouseover', () => {
    assistant.style.transform = 'translateX(100%)'; // Move to card 2
});


// Display the welcome message when the page loads
window.addEventListener('load', () => {
    welcomeMessage.style.display = 'block';
});



const welcomeText = "Welcome to Get Help! Hover on the card under the button you want to use.";
let index = 0;

function typeWelcomeMessage() {
    if (index < welcomeText.length) {
        typedText.textContent += welcomeText.charAt(index);
        index++;
        setTimeout(typeWelcomeMessage, 50); // Typing speed: 50 milliseconds
    } else {
        setTimeout(() => {
            clearWelcomeMessage();
        }, 5000); // Clear message after 10 seconds (10000 milliseconds)
    }
}

function clearWelcomeMessage() {
    typedText.textContent = '';
    index = 0;
    welcomeMessage.style.display = 'none';
}

// Display the welcome message when the page loads
window.addEventListener('load', () => {
    welcomeMessage.style.display = 'block';
    typeWelcomeMessage();
});