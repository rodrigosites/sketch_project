const gridContainer = document.querySelector('.grid-container');
const gridSizeBtn = document.querySelector('.btn');

window.onload = (event) => {
  setGridSize(16);
};

gridSizeBtn.addEventListener('click', (event) => {
  let gridSize = 0;
  gridSize = prompt('Set the grid size. Max grid size = 100.');
  if (gridSize < 1) gridSize = 1;
  if (gridSize > 100) gridSize = 100;
  setGridSize(gridSize);
});

function setGridSize(gridSize) {
  clearGrid();
  for (let i = 1; i <= gridSize; i++) {
    const gridLineDiv = document.createElement('div');
    gridLineDiv.className = `grid-line-${i}`;
    gridContainer.appendChild(gridLineDiv)
    for (let j = 1; j <= gridSize; j++) {
      const squareDiv = document.createElement('div');
      squareDiv.className = `square-div-${i}x${j}`;
      squareDiv.onmouseenter = (event) => {
        squareDiv.style.backgroundColor = 'black';
      }
      squareDiv.onmouseleave = (event) => {
        squareDiv.style.backgroundColor = 'white';
      }
      gridLineDiv.appendChild(squareDiv);
    }
  }
}

function clearGrid() {
  while (gridContainer.childElementCount > 0) {
    gridContainer.childNodes[0].remove();
  }
}