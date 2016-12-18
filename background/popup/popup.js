(function(window, document, undefined, Clipboard) {
  window.onload = function () {
    var mask = document.querySelector('#j_mask');
    var clipboard = new Clipboard('.copy');

    // copied
    clipboard.on('success', function (e) {
      mask.classList.remove('hidden');
      mask.style.backgroundColor = e.text;
      var hiddenTimer = setTimeout(function () {
        mask.style.backgroundColor = '#ffffff';
        mask.classList.add('hidden');
      }, 800);

      // 清空选中
      e.clearSelection();
    });
  }
})(window, document, undefined, Clipboard);
