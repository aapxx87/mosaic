let initialDistance = null;
let scale = 1;

const imageContainer = document.getElementById('image-container');
const image = imageContainer.querySelector('.image_origin');

imageContainer.addEventListener('touchstart', function (e) {
  if (e.touches.length === 2) {
    e.preventDefault(); // Предотвратить стандартное поведение скроллинга, зума браузера и т.д.
    initialDistance = getDistance(e.touches[0], e.touches[1]);
  }
}, { passive: false });

imageContainer.addEventListener('touchmove', function (e) {
  if (e.touches.length === 2) {
    const distance = getDistance(e.touches[0], e.touches[1]);

    if (initialDistance) {
      scale *= distance / initialDistance;
      initialDistance = distance; // Обновляем начальное расстояние для следующего события move

      // Применяем масштаб к изображению
      image.style.transform = `scale(${scale})`;
    }
  }
}, { passive: false });

imageContainer.addEventListener('touchend', function (e) {
  initialDistance = null; // Сброс начального расстояния
});

// Функция для вычисления расстояния между двумя точками касания
function getDistance(touch1, touch2) {
  const dx = touch1.pageX - touch2.pageX;
  const dy = touch1.pageY - touch2.pageY;
  return Math.sqrt(dx * dx + dy * dy);
}
