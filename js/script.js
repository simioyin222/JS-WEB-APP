document.getElementById("selection-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const devType = document.querySelector("#devType").value;
  const goalType = document.querySelector("#goalType").value;
  const machineLearning = document.querySelector("#machinelearning").value;
  const learningStyle = document.querySelector("#learningstyle").value;
  const performance = document.querySelector("#performance").value;

  const resultSection = document.getElementById("result");

  if (devType === "web") {
    if (goalType === "no") {
      if (learningStyle === "yes") {
        resultSection.textContent = "We suggest Javascript!";
      }
    }
  } else if (devType === "app") {
    if (goalType === "yes") {
      if (performance === "no") {
        resultSection.textContent = "We suggest C#!";
      }
    }
  } else if (machineLearning === "yes") {
    if (learningStyle === "yes") {
      resultSection.textContent = "We suggest Python!";
    }
  } else {
    resultSection.textContent = "Maybe consider learning none of them and just giving up!";
  }

  resultSection.classList.remove("hidden");
});
