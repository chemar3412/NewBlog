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
  skills.forEach(skill => {
    console.log(skill);

    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}

function darkMode() {
  document.documentElement.classList.toggle('night-theme');

  document.querySelectorAll('.color-flip').forEach((item)=> {
    item.classList.toggle('flip-color');
  });
}

document.getElementById('darkMode')
  .addEventListener('click', darkMode);




// Contact form submit button
const submit = document.querySelector("button[type='submit']");
if (submit) {
  submit.addEventListener("click", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value;
      alert("Thank you, " + name + ", your message has been sent!");
    });
}
}

