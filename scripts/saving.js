const saving_list = []

// saving_1: {
//   cells: [
//     ['160', 'rgb(51, 153, 255)'],
//     ['320', 'rgb(51, 153, 255)'],
//   ]
// },

// saving_2: {
//   cells: [
//     ['160', 'rgb(51, 153, 255)'],
//     ['320', 'rgb(51, 153, 255)'],
//   ]
// },






const create_current_date_label = function () {

  const current_dateTime = new Date()

  console.log(current_dateTime);

  const day = current_dateTime.getDay()
  const hours = current_dateTime.getHours()
  const minutes = current_dateTime.getMinutes()
  const seconds = current_dateTime.getSeconds()

  const format_date = `${day} / ${hours}: ${minutes} : ${seconds}`

  return format_date

}






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


const click_save_item = function () {

  document.querySelectorAll('.save_name').forEach(function (item) {

    item.addEventListener('click', function () {

      // console.log(item.textContent);

      playground_grid_cells.forEach(function (cell) {
        cell.style.background = "#2E3238"
      })

      saving_list.forEach(function (save_item) {

        // console.log(save_item);

        if (save_item.name === item.textContent) {
          // console.log(save_item.cells);

          save_item.cells.forEach(function (cell) {

            cell.forEach(function (data) {

              // console.log(data);

              // console.log(document.getElementById(data[0]));
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


// savins_list_items.forEach(function (item) {

//   item.addEventListener('click', function () {

//     console.log(item.textContent);

//   })

// })