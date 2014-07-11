var dragndrop = (function() {
  var defaultX = '';
  var defaultY = '';
  var whichArt = '';

  function resetZ() {
    var elements = document.querySelectorAll('img');
    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].style.zIndex = 5;
    };
  }

  function moveStart(e) {
    whichArt = e.target;
    defaultX = e.offsetX === undefined ? e.layerX : e.offsetX;
    defaultY = e.offsetY === undefined ? e.layerY : e.offsetY;
    // console.log("movestart");
    resetZ();
    whichArt.style.zIndex = 10;
  }

  function moveDragOver(e) {
    e.preventDefault();
    // console.log('moveDragOver executing');
  }

  function moveDrop(e) {
    e.preventDefault();
    // console.log('moveDrop');
    whichArt.style.left = e.pageX - defaultX + 'px';
    whichArt.style.top = e.pageY - defaultY + 'px';
  }
//for touch devices
function touchStart(e) {
  e.preventDefault();
  var whichArt = e.target;
  var touch = e.touches[0];
  var moveOffsetX = whichArt.offsetLeft - touch.pageX;
  var moveOffsetY = whichArt.offsetTop - touch.pageY;
  resetZ();
  whichArt.style.zIndex = 10;

  whichArt.addEventListener('touchmove', function() {
    var positionX = touch.pageX + moveOffsetX;
    var positionY = touch.pageY + moveOffsetY;
    whichArt.style.left = positionX + 'px';
    whichArt.style.top = positionY + 'px';
  }, false);
}
  //for browsers
  document.querySelector('body').addEventListener('dragstart', moveStart, false);
  document.querySelector('body').addEventListener('dragover', moveDragOver, false);
  document.querySelector('body').addEventListener('drop', moveDrop, false);
  //for touch devices
  document.querySelector('body').addEventListener('touchstart', touchStart, false);

})();