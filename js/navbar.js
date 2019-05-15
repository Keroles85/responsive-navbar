$(document).ready(function () {
  $('.menu').click(function() {
    $('.menu').toggleClass('close');
    $("li").slideToggle();
  });
});