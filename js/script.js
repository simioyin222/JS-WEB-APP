const formElement = document.getElementById("selection-form");
const resetButton = document.getElementById("resetButton");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  resetButton.addEventListener("click", function () {
    resultSection.textContent = "";
  });

  let devType = document.querySelector("#devType").value;
  let goalType = document.querySelector("#goalType").value;
  let machineLearning = document.querySelector("#machineLearning").value;
  let learningStyle = document.querySelector("#learningStyle").value;
  let performance = document.querySelector("#performance").value;

  let resultSection = document.getElementById("result");
  let result = "";

  if (devType === "web") {
    if (goalType === "yes") {
      if (machineLearning === "yes") {
        if (learningStyle === "read") {
          if (performance === "yes") {
            result = "Consider trying Python!";
          }
        }
      }
    }
  }

  if (devType === "web") {
    if (goalType === "yes") {
      if (machineLearning === "no") {
        if (learningStyle === "practice") {
          if (performance === "yes") {
            result = "Consider trying JavaScript!";
          }
        }
      }
    }
  }

  if (devType === "app") {
    if (goalType === "yes") {
      if (machineLearning === "yes") {
        if (learningStyle === "read") {
          if (performance === "no") {
            result = "Consider trying C#!";
          }
        }
      }
    }
  }

  resultSection.textContent = result;
});
