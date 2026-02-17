window.onload = function () {
  const count = doucment.querySelectorAll("#projectList ul li").length;

  const uniDiv = document.getElementById("universityResources");
  const personalDiv = document.getElementById("PersonalProjects");

  switch (count < 3) {
    case true: uniDiv.style.display = "block";
      personalDiv.style.display = "block";
      break;

    case false:
      uniDiv.style.display = "none";
      personalDiv.style.display = "block";
      break;
  }

const skills = [ "HTML", "JavaScript", "DevC++", "C#", "Python", "SQL"];
  const skillsList = document.getElementById("skillsList");

  for ( let i = 0; i < skills.length; i++) {
    const li = document.createElement("li");
    li.textContent = skills[i];
    skillsList.appendChild(li);
  });
