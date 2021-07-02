$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  });
});
