// Prompt user for their name
const userName = prompt("Welcome! What's your name?");
const welcomeMessage = document.getElementById("welcomeMessage");

if (userName && userName.trim() !== "") {
    welcomeMessage.textContent = "Welcome, " + userName + "!";
}

// Skills Array + Loop
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];
const skillsList = document.getElementById("skillsList");

skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Featured Content Logic
const projectCount = document.querySelectorAll("#projectList li").length;
const uniDiv = document.getElementById("UniversityResources");
const personalDiv = document.getElementById("PersonalProjects");

if (projectCount < 3) {
    uniDiv.style.display = "block";
    personalDiv.style.display = "block";
} else {
    uniDiv.style.display = "none";
    personalDiv.style.display = "block";
}

// Dark Mode Toggle
const toggleButton = document.getElementById("darkModeToggle");
toggleButton.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
});

// ------------------------------
// DYNAMIC DOM CREATION
// ------------------------------

// Add new paragraph to Projects section
const newProjectParagraph = document.createElement("p");
newProjectParagraph.textContent =
    "Recently, I completed a JavaScript-based portfolio enhancement project focusing on DOM manipulation and user interaction.";
document.getElementById("projects").appendChild(newProjectParagraph);

// Delayed notification banner
setTimeout(() => {
    const note = document.createElement("div");
    note.textContent = "✨ New content has been added to the site!";
    note.style.background = "#ffeb3b";
    note.style.padding = "10px";
    note.style.textAlign = "center";
    note.style.fontWeight = "bold";
    note.style.borderBottom = "2px solid #333";
    document.body.prepend(note);
}, 3000);

// Modify existing elements
const aboutHeading = document.querySelector("#about h2");
aboutHeading.textContent = "About Me (Updated)";
aboutHeading.style.color = "#0077cc";

const featuredSection = document.getElementById("featured");
featuredSection.style.background = "#e8f4ff";
featuredSection.style.padding = "25px";
featuredSection.style.borderRadius = "8px";

// ------------------------------
// TIMED FORM CONFIRMATION
// ------------------------------

const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    const name = document.getElementById("senderName").value;

    // Create loading message
    const loadingMsg = document.createElement("p");
    loadingMsg.textContent = "Sending message...";
    loadingMsg.style.fontWeight = "bold";
    loadingMsg.style.color = "orange";
    document.getElementById("contact").appendChild(loadingMsg);

    // Replace with confirmation after delay
    setTimeout(() => {
        loadingMsg.textContent = "Message sent successfully! Thank you, " + name + "!";
        loadingMsg.style.color = "green";
    }, 2000);
});