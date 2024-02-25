const saving_list = []


const create_current_date_label = function () {

  const current_dateTime = new Date();

  // Создаем массив с короткими названиями дней недели
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Получаем короткое название дня недели
  const day = days[current_dateTime.getDay()];

  // Получаем часы, минуты и секунды, форматируем их
  const hours = `${current_dateTime.getHours()}`.padStart(2, '0');
  const minutes = `${current_dateTime.getMinutes()}`.padStart(2, '0');
  const seconds = `${current_dateTime.getSeconds()}`.padStart(2, '0');

  // Комбинируем всё в итоговую строку
  const format_date = `${day}, ${hours}:${minutes}:${seconds}`;

  // console.log(format_date);

  return format_date;

}


create_current_date_label()



btn_save.addEventListener('click', function () {

  const saving_name = create_current_date_label()

  const cells_arr = []

  playground_grid_cells.forEach(function (cell) {

    if (cell.style.background) {

      const cell_id = cell.id.split('-')[1]
      const cell_background = cell.style.background

      if (cell_background !== "rgb(46, 50, 56)") {
        cells_arr.push([cell_id, cell_background])
      }

    }

  })

  const obj = {
    name: saving_name,
    cells: [cells_arr]
  }

  saving_list.push(obj)

  // Преобразование массива в строку JSON
  const saving_data_array = JSON.stringify(saving_list);

  // Сохранение строки в Local Storage
  localStorage.setItem('saving_arr', saving_data_array);


  // console.log(saving_list);

  const html = `
  <div class="raw__save_item">

   <div class="save_name">${saving_name}</div>
  
   <div class="btn_delete_box">
      <button class="btn btn_delete">❌</button>
    </div>

  </div>
  `

  document.querySelector('.saving_box').insertAdjacentHTML('afterbegin', html)


  click_save_item()



})

// загрузка сохранненного рисунка
const click_save_item = function () {

  document.querySelectorAll('.save_name').forEach(function (item) {

    item.addEventListener('click', function () {

      container_savings_popup.classList.add('hidden')

      playground_grid_cells.forEach(function (cell) {
        cell.style.background = "#2E3238"
      })

      // вытаскиваем из локал сторейдж

      // Извлечение строки из Local Storage
      const myObjectString = localStorage.getItem('saving_arr');

      // Преобразование строки обратно в объект
      const saving_data = JSON.parse(myObjectString);

      saving_data.forEach(function (save_item) {

        if (save_item.name === item.textContent) {

          save_item.cells.forEach(function (cell) {

            cell.forEach(function (data) {
              document.getElementById(`cell-${data[0]}`).style.background = `${data[1]}`
            })

          })

        }

      })

    })

  })


}

// click_save_item()


btn_saved_list.addEventListener('click', function () {
  container_savings_popup.classList.remove('hidden')
})


btn_reset.addEventListener('click', function () {

  playground_grid_cells.forEach(function (cell) {
    if (cell.style.background) {
      cell.style.background = "#2E3238"
    }
  })

})


container_saving_box_close.addEventListener('click', function () {
  container_savings_popup.classList.add('hidden')
})





const updateUI = function () {

  // вытаскиваем из локал сторейдж

  // Извлечение строки из Local Storage
  const myObjectString = localStorage.getItem('saving_arr');

  // Преобразование строки обратно в объект
  const saving_data = JSON.parse(myObjectString);


  saving_data.forEach(function (item) {
    // console.log(item);

    const html = `
    <div class="raw__save_item">
  
     <div class="save_name">${item.name}</div>
    
     <div class="btn_delete_box">
        <button class="btn btn_delete">❌</button>
      </div>
  
    </div>
    `

    document.querySelector('.saving_box').insertAdjacentHTML('afterbegin', html)
  })

  // console.log(saving_data);

  click_save_item()

}



updateUI()


