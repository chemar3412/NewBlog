window.onload = function () {

  const count = document.querySelectorAll("#Projects ul li").length;

  const uniDiv = document.getElementById("UniversityResources");
  const personalDiv = document.getElementById("PersonalProject");

  switch (count < 3) {
    case true:
      uniDiv.style.display = "block";
      personalDiv.style.display = "block";
      break;

    case false:
      uniDiv.style.display = "none";
      personalDiv.style.display = "block";
      break;
  }

  const skills = ["HTML", "JavaScript", "DevC++", "C#", "Python", "SQL"];
  const skillsList = document.getElementById("skillsList");

  for (let i = 0; i < skills.length; i++) {
    const li = document.createElement("li");
    li.textContent = skills[i];
    skillsList.appendChild(li);
  }
};

const toggleButton = document.getElementById("darkModeToggle");
toggleButton.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
});

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  alert("Thank you, " + name + ", your message has been sent!");
});