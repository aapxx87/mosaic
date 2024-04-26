btn_zoom_normal.addEventListener('click', function () {

  document.getElementById('grid-container').style.gridTemplateColumns = `repeat(${row_col}, 30px)`;
  document.getElementById('grid-container').style.gridTemplateRows = `repeat(${row_col}, 30px)`;

  centerGridContainer()

})


btn_zoom_out_075.addEventListener('click', function () {

  document.getElementById('grid-container').style.gridTemplateColumns = `repeat(${row_col}, 23px)`;
  document.getElementById('grid-container').style.gridTemplateRows = `repeat(${row_col}, 23px)`;

  centerGridContainer()

})


btn_zoom_out_05.addEventListener('click', function () {

  document.getElementById('grid-container').style.gridTemplateColumns = `repeat(${row_col}, 15px)`;
  document.getElementById('grid-container').style.gridTemplateRows = `repeat(${row_col}, 15px)`;

  centerGridContainer()

})


btn_zoom_out_035.addEventListener('click', function () {

  document.getElementById('grid-container').style.gridTemplateColumns = `repeat(${row_col}, 10px)`;
  document.getElementById('grid-container').style.gridTemplateRows = `repeat(${row_col}, 10px)`;

  centerGridContainer()

})



btn_zoom_out_02.addEventListener('click', function () {

  document.getElementById('grid-container').style.gridTemplateColumns = `repeat(${row_col}, 6px)`;
  document.getElementById('grid-container').style.gridTemplateRows = `repeat(${row_col}, 6px)`;

  centerGridContainer()


})