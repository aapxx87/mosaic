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






btn_menu_close.addEventListener('click', function () {
  menu.style.display = 'none'
})

btn_menu_open.addEventListener('click', function () {
  menu.style.display = 'block'
})


// ? DISPLAY FAVOURITE COLORS BOX

checkbox_display_favourite.addEventListener('change', function () {

  if (checkbox_display_favourite.checked) {
    favourite_colors_box.classList.remove('hidden')
  } else {
    favourite_colors_box.classList.add('hidden')
  }


})