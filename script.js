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



  if(skillsList) {
    skills.forEach(skill  {
      const li = document.createElement("li");
    li.textContent = skills;
    skillsList.appendChild(li);
    });
  }
};


const toggleButton = document.getElementById("darkModeToggle");
if (toggleButton) {
  toggleButton.addEventListener("change", () -> {
    document.body.classList.toggle("dark-mode");
  });
}

// Contact form submit button
const submitButton = document.querySelector("button[type='submit']");
if (submitButton) {
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    alert("Thank you, " + name + ", your message has been sent!");
  });
}
