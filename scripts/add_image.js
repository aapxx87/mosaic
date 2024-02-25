btn_add_image_link.addEventListener('click', function () {

  const url = input_image_link.value

  const img_element = document.createElement('img')
  img_element.classList.add('image_origin')
  img_element.src = url

  container_img_preview.innerHTML = ''

  container_img_preview.insertAdjacentElement('afterbegin', img_element)

  input_image_link.value = ''



})