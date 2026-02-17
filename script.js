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
      personalDiv.style.display = "block"
      break;
  }
};
