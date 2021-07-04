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

  // https://safi.me.uk/typewriterjs/
  // library for type writer effect

  var app = document.getElementById("details");

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  });

  typewriter
    .pauseFor(2500)
    .typeString("<span>I'm an <b>App Developer</b></span>")
    .deleteAll()
    .pauseFor(300)
    .typeString("<span> a <b>Full Stack Developer</b></span>")
    .pauseFor(300)
    .deleteAll()
    .typeString("<span> also a <b>UI/UX Designer</b></span>")
    .start();
});
