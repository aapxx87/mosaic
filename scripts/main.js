function centerGridContainer() {
  const container = document.querySelector('.playground_container');
  const gridItems = document.querySelectorAll('.grid-item');

  if (gridItems.length === 0) return; // Выход, если элементы сетки не найдены

  const itemStyle = window.getComputedStyle(gridItems[0]);
  const itemWidth = parseFloat(itemStyle.width) + parseFloat(itemStyle.marginRight) * 2;
  const itemHeight = parseFloat(itemStyle.height) + parseFloat(itemStyle.marginBottom) * 2;

  // Предполагая, что сетка квадратная, 120x120 элементов
  const totalItems = 150; // Измените, если количество элементов в сетке изменится
  const gridSize = totalItems * itemWidth; // Предполагаем, что ширина и высота элементов одинаковы

  const viewportWidth = container.offsetWidth;
  const viewportHeight = container.offsetHeight;

  // Вычисление начальной позиции скролла
  const scrollX = (gridSize / 2) - (viewportWidth / 2);
  const scrollY = (gridSize / 2) - (viewportHeight / 2);

  // Применение вычисленных значений скролла к контейнеру
  container.scrollLeft = scrollX;
  container.scrollTop = scrollY;
}








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


const row_col = 150


createGrid(grid_container_playground, row_col, row_col);



document.addEventListener("DOMContentLoaded", centerGridContainer);



const playground_grid_cells = document.querySelectorAll('.grid-item')



const grid_cells = document.querySelectorAll('.grid-item')


let color = 'transparent'



color_picker_container.addEventListener('click', function (event) {
  if (event.target.classList.contains('color-choice')) {
    color = event.target.getAttribute('data-color');
  }
  current_color_box.style.backgroundColor = color
  document.querySelector('.btn_saved_list').style.background = color
});

favourite_colors_container.addEventListener('click', function (event) {
  if (event.target.classList.contains('color-choice')) {
    color = event.target.getAttribute('data-color');
  }
  current_color_box.style.backgroundColor = color
  document.querySelector('.btn_saved_list').style.background = color

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

  document.getElementById('grid-container').style.gridTemplateColumns = `repeat(${row_col}, 30px)`;
  document.getElementById('grid-container').style.gridTemplateRows = `repeat(${row_col}, 30px)`;

  centerGridContainer()

})


btn_zoom_out_075.addEventListener('click', function () {

  document.getElementById('grid-container').style.gridTemplateColumns = `repeat(${row_col}, 23px)`;
  document.getElementById('grid-container').style.gridTemplateRows = `repeat(${row_col}, 23px)`;

  centerGridContainer()

})


btn_zoom_out_05.addEventListener('click', function () {

  document.getElementById('grid-container').style.gridTemplateColumns = `repeat(${row_col}, 15px)`;
  document.getElementById('grid-container').style.gridTemplateRows = `repeat(${row_col}, 15px)`;

  centerGridContainer()

})


btn_zoom_out_035.addEventListener('click', function () {

  document.getElementById('grid-container').style.gridTemplateColumns = `repeat(${row_col}, 10px)`;
  document.getElementById('grid-container').style.gridTemplateRows = `repeat(${row_col}, 10px)`;

  centerGridContainer()

})



// btn_zoom_out_02.addEventListener('click', function () {

//   document.getElementById('grid-container').style.gridTemplateColumns = `repeat(${row_col}, 6px)`;
//   document.getElementById('grid-container').style.gridTemplateRows = `repeat(${row_col}, 6px)`;

//   centerGridContainer()


// })



btn_menu_close.addEventListener('click', function () {
  menu.style.display = 'none'
})

btn_menu_open.addEventListener('click', function () {
  menu.style.display = 'block'
})



input_grid.addEventListener('change', function () {

  if (this.checked) {
    for (const item of grid_cells) {
      item.style.border = '.1px solid #373c43'
    }

  } else {
    for (const item of grid_cells) {
      item.style.border = 'none'
    }
  }

})







