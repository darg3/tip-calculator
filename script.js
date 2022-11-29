const btn = document.querySelector(".btn");

const output = document.getElementById("percValue");

function clickCalcTip() {
  console.log(document.querySelector(".checkValue").value);
  output.innerText = document.querySelector(".checkValue").value;
  console.log("Button Clicked");

  // Select the fields(meal value and tips percentage)
  check = document.getElementById("checkValue");
  percent = document.getElementById("percValue");
  // tipValue = document.getElementById("tipVal");

  // Calculate the tip
  tipValue = (percValue.value / 100) * check.value;
  // console.log(tipValue);

  // Calculate total including tip
  totalToPay = tipValue + parseInt(check.value);
  // console.log(totalToPay);

  // Populate fields(tip and total incl. tip)
  document.getElementById("tipVal").value = tipValue;
  document.getElementById("totalPlusTip").value = totalToPay;
}

btn.addEventListener("click", clickCalcTip);
