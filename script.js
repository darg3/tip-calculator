const btn = document.querySelector(".btn");

const output = document.getElementById("percValue");

const btn_rst = document.querySelector(".btn_reset");
const peopleN = document.querySelector(".peopleNo");

function clickCalcTip() {
  // console.log(document.querySelector(".checkValue").value);
  output.innerText = document.querySelector(".checkValue").value;
  // console.log("Button Clicked");

  // Select the fields(meal value and tips percentage)
  check = document.getElementById("checkValue");
  percent = document.getElementById("percValue");
  // peopleNumber = document.getElementById("peopleNo")
  // tipValue = document.getElementById("tipVal");

  // Calculate the total tip
  tipValue = (percValue.value / 100) * check.value;
  // console.log(tipValue);

  // Calculate tip per person
  tipPerPerson = tipValue / peopleN.value;

  // Calculate total including tip
  totalToPay = tipValue + parseInt(check.value);
  // console.log(totalToPay);

  // Populate fields(tip and total incl. tip)
  document.getElementById("tipVal").value = tipValue;
  document.getElementById("totalPlusTip").value = totalToPay;
  document.getElementById("tippp").value = tipPerPerson;

  tipVal.classList.remove("hideme");
  document.querySelector(".tip__val").classList.remove("hideme");

  setTimeout(function () {
    document.querySelector(".tip__pp").classList.remove("hideme");
    tippp.classList.remove("hideme");
  }, 400);
  setTimeout(function () {
    document.querySelector(".total__pt").classList.remove("hideme");
    totalPlusTip.classList.remove("hideme");
  }, 800);

  setTimeout(function () {
    btn_rst.classList.remove("hideme");
  }, 1200);
}

btn.addEventListener("click", clickCalcTip);

function clearInput() {
  document.getElementById("Form").reset();

  tipVal.classList.add("hideme");
  document.querySelector(".tip__val").classList.add("hideme");

  document.querySelector(".tip__pp").classList.add("hideme");
  tippp.classList.add("hideme");

  document.querySelector(".total__pt").classList.add("hideme");
  totalPlusTip.classList.add("hideme");

  btn_rst.classList.add("hideme");
}

btn_rst.addEventListener("click", clearInput);
