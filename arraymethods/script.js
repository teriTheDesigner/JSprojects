const colors = ["pink", "green", "blue", "purple", "blue"];

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

function find() {
  const pinkColor = colors.find((color) => color === "pink");
  const found = document.getElementById("found");

  found.innerHTML = "";

  if (pinkColor) {
    const pinkDiv = document.createElement("div");
    pinkDiv.className = "circle pink";
    found.appendChild(pinkDiv);
  }
}

document.querySelector(".findbutton").addEventListener("click", find);

const modal = document.getElementById("myModal");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementsByClassName("close")[0];

function openModal(explanationText, imagePath) {
  modalText.innerHTML = "";

  const text = document.createElement("p");
  text.textContent = explanationText;
  modalText.appendChild(text);

  if (imagePath) {
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = "Explanation Image";
    modalText.appendChild(img);
  }

  modal.style.display = "block";
}

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.querySelectorAll(".explanation").forEach((button, index) => {
  button.addEventListener("click", function () {
    if (index === 0) {
      openModal(
        "The .filter() method creates a new array with all elements that pass the test implemented by the provided function.",
        "img/filter.png"
      );
    } else if (index === 1) {
      openModal(
        "The .find() method returns the value of the first element in the array that satisfies the provided testing function.",
        "img/filter.png"
      );
    }
  });
});
