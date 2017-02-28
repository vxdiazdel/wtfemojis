$(function() {

	// Smooth scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // Set copyright data
  $('span.year').text(new Date().getFullYear());

  // Animate shadow on mouse move
  const nav = document.querySelector('.navbar');
  const header = document.querySelector('.hp-header');
  const headerText = header.querySelector('.header-text');
  const walk = 25;

  function shadow(e) {
    const width = header.offsetWidth;
    const height = header.offsetHeight;
    let x = e.offsetX;
    let y = e.offsetY - nav.offsetHeight;

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    headerText.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0, 0, 0, 0.75)`;
  }

  header.addEventListener('mousemove', shadow);

});
