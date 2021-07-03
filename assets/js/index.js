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

  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#nav",
  });

  var dataSpyList = [].slice.call(
    document.querySelectorAll('[data-bs-spy="scroll"]')
  );
});
