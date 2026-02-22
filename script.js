wwindow.onload = function () {

  // Count project items (will be 0 unless you add <ul><li> items)
  const count = document.querySelectorAll("#Projects ul li").length;

  const uniDiv = document.getElementById("UniversityResources");
  const personalDiv = document.getElementById("PersonalProject");

  // Show/hide project sections based on count
  if (uniDiv && personalDiv) {
    if (count < 3) {
      uniDiv.style.display = "block";
      personalDiv.style.display = "block";
    } else {
      uniDiv.style.display = "none";
      personalDiv.style.display = "block";
    }
  }

  // Skills list
  const skills = ["HTML", "JavaScript", "DevC++", "C#", "Python", "SQL"];
  const skillsList = document.getElementById("skillsList");



  if (skillsList) {
  skills.forEach(skills => {
    const li = document.createElement("li");
    li.textContent = skills;
    skillsList.appendChild(li);
  });
}

function toggleDarkMode() {
  document.documentElement.classList.toggle('night-theme');

  document.querySelectorAll('.color-flip').forEach(item => {
    item.classList.toggle('flip-color');
  });
}

// Click toggles dark mode
document.getElementById('darkModeToggle')
  .addEventListener('click', toggleDarkMode);

// Pressing Enter toggles dark mode
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    toggleDarkMode();
  }
});


// Contact form submit button
const submitButton = document.querySelector("button[type='submit']");
if (submitButton) {
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    alert("Thank you, " + name + ", your message has been sent!");
  });
}
}

