



btn_save.addEventListener('click', function () {


  const cells_arr = []

  playground_grid_cells.forEach(function (cell) {

    const styles = getComputedStyle(cell)

    const background = styles.backgroundColor

    if (background && background !== "rgba(0, 0, 0, 0)") {

      const cell_id = cell.id.split('-')[1]
      const cell_background = background

      cells_arr.push([cell_id, cell_background])


    }

  })

  console.log(cells_arr);

  array_save_box.textContent = JSON.stringify(cells_arr);





})





copy_btn.addEventListener('click', () => {

  const text = array_save_box.textContent;

  navigator.clipboard.writeText(text).then(() => {
    console.log('Текст скопирован в буфер обмена');
  }).catch(err => {
    console.error('Ошибка при копировании текста: ', err);
  });


  array_save_box.textContent = ''

});






// загрузка массива дял построения изображения 

document.getElementById('loadArrayButton').addEventListener('click', () => {

  const inputText = document.getElementById('textInput').value;

  try {

    const arrayFromText = JSON.parse(inputText);

    if (Array.isArray(arrayFromText)) {

      // console.log('Преобразованный массив: ', arrayFromText);
      // Здесь вы можете выполнить дополнительные манипуляции с массивом


      container_savings_popup.classList.add('hidden')

      playground_grid_cells.forEach(function (cell) {
        cell.style.background = "transparent"
      })


      arrayFromText.forEach(function (data) {
        document.getElementById(`cell-${data[0]}`).style.background = `${data[1]}`
      })


    } else {
      console.error('Введённый текст не является массивом');
    }

  } catch (e) {

    console.error('Ошибка при преобразовании текста в массив: ', e);

  }


  document.getElementById('textInput').value = ''

});






btn_reset.addEventListener('click', function () {

  playground_grid_cells.forEach(function (cell) {
    if (cell.style.background) {
      cell.style.background = "transparent"
    }
  })

})



