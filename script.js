
// // Get references to the input fields and the result element
var calculateBtn = document.getElementById("calculateBtn");
var bmiResult = document.getElementById("bmi-result");
var weightConditionEl = document.getElementById("weight-condition");

// Define the calculateBMI function
function calculateBMI() {
    var hightValue = document.getElementById("heightInput").value/100; // convert cm to m by multiply by 100
  var weightValue = document.getElementById("weightInput").value;


  var bmiValue = weightValue / (hightValue * hightValue); // Calculate the BMI

    bmiResult.value = bmiValue;  // Display the result on the web page

 if (bmiValue < 18.5) {
    weightConditionEl.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = "Obesity";
  }

}
	// Attach the calculateBMI function to the button's click event
calculateBtn.addEventListener("click",calculateBMI)


