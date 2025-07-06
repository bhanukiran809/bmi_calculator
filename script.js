function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);
  const heightM = heightCm / 100;

  const bmi = weight / (heightM * heightM);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}