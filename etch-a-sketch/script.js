const container = document.getElementById("container");
const resizeBtn = document.getElementById("resizeBtn");

function createGrid(size) {
  container.innerHTML = "";

  const squareSize = 720 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

resizeBtn.addEventListener("click", () => {
  let newSize = prompt("Enter grid size (max 100):");
  newSize = parseInt(newSize);

  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  }
});

createGrid(16);