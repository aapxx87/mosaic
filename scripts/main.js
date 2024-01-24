const grid_container_playground = document.querySelector('.grid-container')
const color_picker_container = document.querySelector('.color_picker_container')


// Buttons
const btn_zoom_normal = document.querySelector('.btn_zoom_normal')
const btn_zoom_out_05 = document.querySelector('.btn_zoom_out_05')
const btn_zoom_out_02 = document.querySelector('.btn_zoom_out_02')




function createGrid(container, rows, cols) {

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

createGrid(grid_container_playground, 200, 200);



const grid_cells = document.querySelectorAll('.grid-item')



color_picker_container.addEventListener('click', function (event) {
  if (event.target.classList.contains('color-choice')) {
    color = event.target.getAttribute('data-color');
  }
});



let color = '#2e3238'

for (const item of grid_cells) {

  item.addEventListener('click', function () {
    const id = item.id
    document.getElementById(id).style.background = color
  })

}





btn_zoom_normal.addEventListener('click', function () {

  document.getElementById('grid-container').style.gridTemplateColumns = `repeat(200, 30px)`;
  document.getElementById('grid-container').style.gridTemplateRows = `repeat(200, 30px)`;

  for (const item of grid_cells) {
    item.style.border = '.1px solid #373c43'
  }

})

btn_zoom_out_05.addEventListener('click', function () {

  document.getElementById('grid-container').style.gridTemplateColumns = `repeat(200, 15px)`;
  document.getElementById('grid-container').style.gridTemplateRows = `repeat(200, 15px)`;


  for (const item of grid_cells) {
    item.style.border = 'none'
  }

})


btn_zoom_out_02.addEventListener('click', function () {

  document.getElementById('grid-container').style.gridTemplateColumns = `repeat(200, 6px)`;
  document.getElementById('grid-container').style.gridTemplateRows = `repeat(200, 6px)`;

  for (const item of grid_cells) {
    item.style.border = 'none'
  }

})
