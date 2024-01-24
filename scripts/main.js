// const grid_container_playground = document.querySelector('.')



function createGrid(containerId, rows, cols) {

  const container = document.getElementById(containerId);

  container.style.gridTemplateColumns = `repeat(${cols}, 30px)`;
  container.style.gridTemplateRows = `repeat(${rows}, 30px)`;

  // Удаляем предыдущие ячейки, если они есть
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const totalCells = rows * cols;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.id = `cell-${i}`
    container.appendChild(cell);
  }

}

createGrid('grid-container', 100, 100);



const grid_cells = document.querySelectorAll('.grid-item')

let color = '#baafaf'


document.getElementById('colorPicker').addEventListener('click', function (event) {
  if (event.target.classList.contains('color-choice')) {
    color = event.target.getAttribute('data-color');
  }
});



for (const item of grid_cells) {

  item.addEventListener('click', function () {
    const id = item.id

    document.getElementById(id).style.background = color

  })

}
