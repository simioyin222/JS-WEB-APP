const formElement = document.getElementById("selection-form");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();


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
            result =
              "Consider trying Python & I'm not talking about the snake hahah!";
          }
        }
      }
    }
  }

  resultSection.textContent = result;
});
