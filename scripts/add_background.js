btn_aapply_bg_img.addEventListener('click', function () {

  const url = bg_img_url.value

  const opacity = Number(bg_opacity_value.value)

  container_background_img.style.background = `linear-gradient(rgba(46, 50, 56, ${opacity}), rgba(46, 50, 56, ${opacity})), url('${url}')`

  container_background_img.style.backgroundSize = 'cover'
  container_background_img.style.backgroundPosition = 'bottom'

  bg_img_url.value = ''

})