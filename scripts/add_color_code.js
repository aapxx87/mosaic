input_color_code.addEventListener('change', function () {

  const color_code = input_color_code.value

  color = color_code

  current_color_box.style.backgroundColor = color
  document.querySelector('.btn_saved_list').style.background = color

  input_color_code.value = ''

})