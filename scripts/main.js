const grid_container_playground = document.querySelector('.grid-container')
const color_picker_container = document.querySelector('.color_picker_container')
const favourite_colors_container = document.querySelector('.favourite_colors_container')

// Buttons
const btn_zoom_normal = document.querySelector('.btn_zoom_normal')
const btn_zoom_out_05 = document.querySelector('.btn_zoom_out_05')
const btn_zoom_out_035 = document.querySelector('.btn_zoom_out_035')
const btn_zoom_out_02 = document.querySelector('.btn_zoom_out_02')

const btn_color_to_favourite = document.querySelector('.btn_color_to_favourite')
const btn_reset_favourite = document.querySelector('.btn_reset_favourite')


colors.forEach(color => {
  // Создание кнопки
  const button = document.createElement('button');
  button.className = 'color-choice';
  button.setAttribute('data-color', color);
  button.style.backgroundColor = color;

  // Добавление кнопки в контейнер
  color_picker_container.appendChild(button);
});


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

createGrid(grid_container_playground, 250, 250);



const grid_cells = document.querySelectorAll('.grid-item')


let color = '#2e3238'


color_picker_container.addEventListener('click', function (event) {
  if (event.target.classList.contains('color-choice')) {
    color = event.target.getAttribute('data-color');
  }
});

favourite_colors_container.addEventListener('click', function (event) {
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


btn_color_to_favourite.addEventListener('click', function () {

  const button = document.createElement('button');
  button.className = 'color-choice';
  button.setAttribute('data-color', color);
  button.style.backgroundColor = color;

  // Добавление кнопки в контейнер
  favourite_colors_container.appendChild(button);

})



btn_reset_favourite.addEventListener('click', function () {

  favourite_colors_container.innerHTML = ''

})













btn_zoom_normal.addEventListener('click', function () {

  document.getElementById('grid-container').style.gridTemplateColumns = `repeat(250, 30px)`;
  document.getElementById('grid-container').style.gridTemplateRows = `repeat(250, 30px)`;

  for (const item of grid_cells) {
    item.style.border = '.1px solid #373c43'
  }

})

btn_zoom_out_05.addEventListener('click', function () {

  document.getElementById('grid-container').style.gridTemplateColumns = `repeat(250, 15px)`;
  document.getElementById('grid-container').style.gridTemplateRows = `repeat(250, 15px)`;


  for (const item of grid_cells) {
    item.style.border = 'none'
  }

})

btn_zoom_out_035.addEventListener('click', function () {

  document.getElementById('grid-container').style.gridTemplateColumns = `repeat(250, 10px)`;
  document.getElementById('grid-container').style.gridTemplateRows = `repeat(250, 10px)`;

  for (const item of grid_cells) {
    item.style.border = 'none'
  }

})

btn_zoom_out_02.addEventListener('click', function () {

  document.getElementById('grid-container').style.gridTemplateColumns = `repeat(250, 6px)`;
  document.getElementById('grid-container').style.gridTemplateRows = `repeat(250, 6px)`;

  for (const item of grid_cells) {
    item.style.border = 'none'
  }

})
