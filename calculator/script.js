const display = document.querySelector("#display");
const buttons = document.querySelectorAll("#buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => chooseAction(button));
});

function chooseAction(button) {
  const value = button.getAttribute("data-value");

  if (value === "C") {
    clearDisplay();
  } else if (value === "=") {
    calculate();
  } else {
    addToDisplay(value);
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function addToDisplay(input) {
  display.value = display.value + input;
}
