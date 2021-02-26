const header = document.querySelector('.header');
const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function () {
  //   alert('button clicked');
  if (header.classList.contains('open')) {
    //   close hamburger
    header.classList.remove('open');
    body.classList.remove('noscroll');
    fadeElements.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    // open hamburger
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElements.forEach(function (element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});
