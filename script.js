window.onload = function () {

  /* -----------------------------
     PROJECT COUNT LOGIC
  ----------------------------- */
  const count = document.querySelectorAll("#Projects ul li").length;

  const uniDiv = document.getElementById("UniversityResources");
  const personalDiv = document.getElementById("PersonalProject");

  if (uniDiv && personalDiv) {
    if (count < 3) {
      uniDiv.style.display = "block";
      personalDiv.style.display = "block";
    } else {
      uniDiv.style.display = "none";
      personalDiv.style.display = "block";
    }
  }

  /* -----------------------------
     SKILLS LIST
  ----------------------------- */
  const skills = ["HTML", "JavaScript", "DevC++", "C#", "Python", "SQL"];
  const skillsList = document.getElementById("skillsList");

  if (skillsList) {
    skills.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
    });
  }

  /* -----------------------------
     DARK MODE TOGGLE
  ----------------------------- */
  function darkMode() {
    document.documentElement.classList.toggle("night-theme");

    document.querySelectorAll(".color-flip").forEach(item => {
      item.classList.toggle("flip-color");
    });
  }

  const darkToggle = document.getElementById("darkMode");
  if (darkToggle) {
    darkToggle.addEventListener("click", darkMode);
  }

  /* -----------------------------
     CONTACT FORM SUBMISSION
  ----------------------------- */
  const submit = document.querySelector("button[type='submit']");
  if (submit) {
    submit.addEventListener("click", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const displayName = name || "Guest";

      alert(`Thank you, ${displayName}, your message has been sent!`);
    });
  }
};