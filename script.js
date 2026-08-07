// Sample Data: You can replace this with your actual participant list
const presentationQueue = [
    { id: 1, name: "Team Orion", topic: "AI-driven Occupational Classification" },
    { id: 2, name: "Alpha Squad", topic: "Decentralized Civic Reporting Platforms" },
    { id: 3, name: "Circuit Breakers", topic: "Standalone Crash Detection Systems" },
    { id: 4, name: "Byte Force", topic: "IoT Smart Home Architectures" },
    { id: 5, name: "Data Miners", topic: "Predictive Analysis in Cloud Computing" }
];

// State variable to track who is currently on stage
let currentIndex = 0;

function updateDashboard() {
    const currentTeamEl = document.getElementById('current-team');
    const currentTopicEl = document.getElementById('current-topic');
    const nextTeamEl = document.getElementById('next-team');
    const queueListEl = document.getElementById('queue-list');

    // Clear the current queue list
    queueListEl.innerHTML = '';

    // Update Currently Presenting
    if (currentIndex < presentationQueue.length) {
        currentTeamEl.textContent = presentationQueue[currentIndex].name;
        currentTopicEl.textContent = `Topic: ${presentationQueue[currentIndex].topic}`;
    } else {
        currentTeamEl.textContent = "Event Concluded!";
        currentTopicEl.textContent = "Thank you to all participants.";
        document.querySelector('.pulse-indicator').style.display = 'none';
    }

    // Update Up Next
    if (currentIndex + 1 < presentationQueue.length) {
        nextTeamEl.textContent = presentationQueue[currentIndex + 1].name;
    } else {
        nextTeamEl.textContent = "None (Final Presentation)";
    }

    // Populate the Remaining Queue
    for (let i = currentIndex + 2; i < presentationQueue.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${i + 1}. ${presentationQueue[i].name}`;
        queueListEl.appendChild(li);
    }
}

// Function simulating the organizer clicking "Next"
function advanceQueue() {
    if (currentIndex < presentationQueue.length) {
        currentIndex++;
        updateDashboard();
    }
}

// Initialize the UI on first load
document.addEventListener('DOMContentLoaded', updateDashboard);