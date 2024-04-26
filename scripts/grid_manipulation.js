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