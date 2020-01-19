'use strict';

window.util = (function () {

  var terms = document.querySelector('.season-ticket__terms');

  if (terms) {
    terms.addEventListener('click', function (evt) {
      evt.preventDefault();
      var button = evt.target;
      var links = terms.querySelectorAll('a');
      for (var i = 0; i < links.length; i++) {

        if (button === links[i]) {
          for (var J = 0; J < links.length; J++) {
            links[J].classList.remove('active');
          }
          button.classList.add('active');
        }
      }
    });
  }

  if (document.querySelector('.coachs__slider')) {
    window.multiItemSlider('.coachs__slider', {
      isCycling: true
    });
  }

  if (document.querySelector('.comments__slider')) {
    window.multiItemSlider('.comments__slider', {
      isCycling: true
    });
  }
})();
