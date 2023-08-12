document.getElementById("selection-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const devType = document.querySelector("#devType").value;
  const goalType = document.querySelector("#goalType").value;
  const machineLearning = document.querySelector("#machineLearning").value;
  const learningStyle = document.querySelector("#learningStyle").value;
  const performance = document.querySelector("#performance").value;

  const resultSection = document.getElementById("result");
  resultSection.textContent = "";

  if (devType === "web") {
    if (machineLearning === "yes") {
      resultSection.textContent = "We suggest JavaScript with TensorFlow.js!";
    } else if (goalType === "no") {
      resultSection.textContent = "We suggest PHP!";
    } 
  } else if (devType === "app") {
    if (performance === "no") {
      resultSection.textContent = "We suggest Java!";
    } else if (performance === "yes") {
      resultSection.textContent = "We suggest Swift!";
    }
  } else if (machineLearning === "yes") {
    if (learningStyle === "read") {
      resultSection.textContent = "We suggest Python!";
    } 
  } else {
    resultSection.textContent = "Explore based on your personal interests!";
  }

  resultSection.classList.remove("hidden");
});
