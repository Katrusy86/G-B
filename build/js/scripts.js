"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(function () {
  var currentIndex = 0;
  var prevIndex = 0;

  function updateSlide(nextIndex) {
    // console.log(nextIndex);
    var slides = _toConsumableArray(document.querySelectorAll('.slider__wrapper'));

    slides[prevIndex].classList.remove('active-slides'); // скрыть

    slides[nextIndex].classList.add('active-slides'); // показать
  } // function updatePagination(nextIndex) {
  //     var bullets = [...document.querySelectorAll('.slider__btn-wrapper .slider__btn .slider__btn-prev')];
  //     bullets[prevIndex].classList.remove('acive-slides'); // скрыть
  //     bullets[nextIndex].classList.add('acive-slides'); // показать
  // }


  var sliderBullets = _toConsumableArray(document.querySelectorAll('.slider__feedback-image'));

  sliderBullets.forEach(function (item, index) {
    item.onclick = function () {
      prevIndex = currentIndex;
      currentIndex = index; // update index

      updateSlide(currentIndex); // updatePagination(currentIndex);
    };
  });
})();