// Получаем контейнер и ручку для изменения размера
const container = document.getElementById('resizable-container');
const resizeHandle = document.getElementById('resize-handle');

resizeHandle.addEventListener('touchstart', function (e) {
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

// Добавляем события для предотвращения всплытия касаний от изображения
document.querySelectorAll('.image_origin').forEach(image => {
  image.addEventListener('touchstart', e => e.stopPropagation());
  image.addEventListener('touchmove', e => e.stopPropagation());
  image.addEventListener('touchend', e => e.stopPropagation());
});