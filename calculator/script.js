const display = document.querySelector("#display");
const buttons = document.querySelectorAll("#buttons button");

// keydown, keyup, keypress

document.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.code.includes("Digit")) {
    addToDisplay(event.key);
  }
  if (
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/"
  ) {
    addToDisplay(event.key);
  }
  if (event.key === "=" || event.key === "Enter") {
    calculate();
  }
  if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
});

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
