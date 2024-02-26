

// 1. вытаскиваем из css значение ширины - целое число

// 2. делим или умножаем это начение на коффициент зума

// 3. ставим новое значение в css  к картинке + height = auto


btn_zoom_img_03.addEventListener('click', function () {

  const width = origin_width / 3

  document.querySelector('.image_origin').style.width = `${width}px`

  document.querySelector('.image_origin').style.height = 'auto'

})



btn_zoom_img_05.addEventListener('click', function () {

  const width = origin_width / 2

  document.querySelector('.image_origin').style.width = `${width}px`

  document.querySelector('.image_origin').style.height = 'auto'

})

btn_zoom_img_1x.addEventListener('click', function () {

  const width = origin_width

  document.querySelector('.image_origin').style.width = `${width}px`

  document.querySelector('.image_origin').style.height = 'auto'

})


btn_zoom_img_13x.addEventListener('click', function () {

  const width = origin_width * 1.3

  document.querySelector('.image_origin').style.width = `${width}px`

  document.querySelector('.image_origin').style.height = 'auto'

})


btn_zoom_img_17x.addEventListener('click', function () {

  const width = origin_width * 1.7

  document.querySelector('.image_origin').style.width = `${width}px`

  document.querySelector('.image_origin').style.height = 'auto'

})

