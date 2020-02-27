(function() {
    var currentIndex = 0;
    var prevIndex = 0;

    function updateSlide(nextIndex) {
      // console.log(nextIndex);
        var slides = [...document.querySelectorAll('.slider__wrapper')];

        slides[prevIndex].classList.remove('active-slides'); // скрыть
        slides[nextIndex].classList.add('active-slides'); // показать
    }

    // function updatePagination(nextIndex) {
    //     var bullets = [...document.querySelectorAll('.slider__btn-wrapper .slider__btn .slider__btn-prev')];

    //     bullets[prevIndex].classList.remove('acive-slides'); // скрыть
    //     bullets[nextIndex].classList.add('acive-slides'); // показать
    // }


    var sliderBullets = [...document.querySelectorAll('.slider__feedback-image')];

    sliderBullets.forEach((item, index) => {

        item.onclick = function() {
            prevIndex = currentIndex;

            currentIndex = index; // update index

            updateSlide(currentIndex);
            // updatePagination(currentIndex);
        }
    });


})();
