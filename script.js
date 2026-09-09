// Sample Data: You can replace this with your actual participant list
const presentationQueue = [
    { id: 1, name: "Deventur", topic: "AI based Advisory and Farmer support system" },
    { id: 2, name: "AEC", topic: "STARLINK-The internet from space" },
    { id: 3, name: "NOVASTRO", topic: "Drone communication" },
    { id: 4, name: "spray vision", topic: "intelligent pesticide sprinkling system determined by the infection level of a plant " },
    { id: 5, name: "Tech Orbit", topic: "Ai urban flood prediction and evacuation system" },
    { id: 6, name: "TBC", topic: "To Be Confirmed" },
    { id: 7, name: "TBC", topic: "To Be Confirmed" },
    { id: 8, name: "TBC", topic: "To Be Confirmed" },
    { id: 9, name: "TBC", topic: "To Be Confirmed" },
    { id: 10, name: "TBC", topic: "To Be Confirmed" },
    { id: 11, name: "TBC", topic: "To Be Confirmed" },
    { id: 12, name: "TBC", topic: "To Be Confirmed" },
    { id: 13, name: "TBC", topic: "To Be Confirmed" }
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
