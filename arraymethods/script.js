const colors = ["red", "green", "blue", "yellow", "blue"];

function filter() {
  const blueColors = colors.filter((color) => {
    return color === "blue";
  });
  const filtered = document.getElementById("filtered");

  filtered.innerHTML = "";

  blueColors.forEach(() => {
    const blueDiv = document.createElement("div");
    blueDiv.className = "circle blue";
    filtered.appendChild(blueDiv);
  });
}

function find() {
  const pinkColor = colors.find((color) => color === "red");
  const found = document.getElementById("found");

  found.innerHTML = "";

  if (pinkColor) {
    const pinkDiv = document.createElement("div");
    pinkDiv.className = "circle red";
    found.appendChild(pinkDiv);
  }
}

document.querySelector(".filterbutton").addEventListener("click", filter);

document.querySelector(".findbutton").addEventListener("click", find);
