



// Добавление изображения в контейнер
btn_add_image_link.addEventListener('click', function () {
  const url = input_image_link.value;

  // Создаём элемент изображения
  const img_element = document.createElement('img');
  img_element.classList.add('image_origin');
  img_element.src = url;

  // Очищаем контейнер и добавляем изображение
  document.getElementById('image-container').innerHTML = '';
  // container_img_preview.innerHTML = '';
  // container_img_preview.insertAdjacentElement('afterbegin', img_element);
  document.getElementById('image-container').insertAdjacentElement('afterbegin', img_element);

  // Проверяем, существует ли уже ручка для изменения размера, и добавляем её, если необходимо
  let resizeHandle = document.getElementById('resize-handle');
  if (!resizeHandle) {
    resizeHandle = document.createElement('div');
    resizeHandle.id = 'resize-handle';
    resizeHandle.style.cssText = "position: absolute; right: 0; bottom: 0; width: 20px; height: 20px; background: #CCC; cursor: nwse-resize;";

    // Добавляем ручку для изменения размера обратно в контейнер
    container_img_preview.appendChild(resizeHandle);

    // Добавляем обработчики для изменения размера
    addResizeFunctionality(resizeHandle, container_img_preview);
  }

  // Очищаем поле ввода
  input_image_link.value = '';
});





function addResizeFunctionality(handle, container) {
  handle.addEventListener('touchstart', function (e) {
    e.preventDefault(); // Предотвратим стандартное действие скроллинга

    let startWidth = container.offsetWidth;
    let startHeight = container.offsetHeight;
    let startX = e.touches[0].clientX;
    let startY = e.touches[0].clientY;

    function touchMove(e) {
      // Рассчитываем новые размеры
      let touchX = e.touches[0].clientX;
      let touchY = e.touches[0].clientY;

      let width = startWidth + (touchX - startX);
      let height = startHeight + (touchY - startY);

      // Применяем новые размеры к контейнеру
      container.style.width = `${width}px`;
      container.style.height = `${height}px`;
    }

    function touchEnd() {
      // Удаляем обработчики событий
      document.removeEventListener('touchmove', touchMove);
      document.removeEventListener('touchend', touchEnd);
    }

    // Добавляем обработчики событий для перемещения и окончания касания
    document.addEventListener('touchmove', touchMove);
    document.addEventListener('touchend', touchEnd);
  });
}





checkbox_display_image.addEventListener('change', function () {

  if (this.checked) {

    container_img_preview.style.display = 'block'

  } else {

    container_img_preview.style.display = 'none'

  }

})