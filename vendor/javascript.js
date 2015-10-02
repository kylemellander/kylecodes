$(document).ready(function() {

  $('.portfolio-flip').hide();
  $('.portfolio-flip').transition({
    animation: 'fly left',
    interval: 800
  });
  $('.portfolio-flip').show();
})
