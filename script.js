
var calculateBtn = document.getElementById("calculateBtn");
var bmiResult = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
    var hightValue = document.getElementById("heightInput").value/100;
    var weightValue = document.getElementById("weightInput").value;
    var bmiValue = weightValue /(hightValue * hightValue) ;
    bmiResult.value = bmiValue;

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

calculateBtn.addEventListener("click",calculateBMI)


