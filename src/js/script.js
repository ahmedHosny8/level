$(document).ready(function () {
  // Datepicker jquery
  $('#inputCheckIn').datepicker();
  $('#inputCheckOut').datepicker();

  // Slick Slider or Slick Carousel
  $('.level-slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  });
});

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
