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

document.querySelector(".filterbutton").addEventListener("click", filter);
