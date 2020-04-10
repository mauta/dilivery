const cartButton = document.querySelectorAll('.btn-cart');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.btn-close')




for (const button of cartButton) {
    button.addEventListener('click', function (evt) {
        modal.classList.add('is-open');
    });
  };

modalClose.addEventListener('click', function (evt) {
    modal.classList.remove('is-open');
});


new WOW().init();