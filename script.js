const bubbleWrapContainer = document.getElementById('bubbleWrap');
const popButton = document.getElementById('popButton');

const bubbleWrapIcons = [
    '🟠', '🔵', '🟢', '🟡', '🔴', '🟣', '⚫', '⚪'
    // Add more bubble wrap icons as needed
];

popButton.addEventListener('click', generateBubbleWrap);

function generateBubbleWrap() {
    bubbleWrapContainer.innerHTML = '';
    const numberOfBubbles = 50; // Number of bubbles to generate

    for (let i = 0; i < numberOfBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.textContent = bubbleWrapIcons[Math.floor(Math.random() * bubbleWrapIcons.length)];
        bubbleWrapContainer.appendChild(bubble);
        bubble.addEventListener('click', popBubble);
    }
}

function popBubble(event) {
    event.target.style.visibility = 'hidden'; // or animation to simulate popping
}
