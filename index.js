function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    dodger.style.left = parseInt(dodger.style.left) - 1 + 'px';
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    dodger.style.left = parseInt(dodger.style.left) + 1 + 'px';
  }
  