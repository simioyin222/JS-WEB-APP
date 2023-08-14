document.getElementById("selection-form");
document.addEventListener("submit", function (event) {
  event.preventDefault();

  let devType = document.querySelector("devType").value;
  let goalType = document.querySelector("goalType").value;
  let machineLearning = document.querySelector("machineLearning").value;
  let learningStyle = document.querySelector("learningStyle").value;
  let performance = document.querySelector("performance").value;

  let resultSection = document.getElementById("result");
  resultSection.textContent = "";