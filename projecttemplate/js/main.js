$(document).ready(function() {
  $('.disappear').click(function() {
    $('img').hide();
  });
  $('.appear').click(function() {
    $('img').show();
  });
  $('.wacky').dblclick(function() {
    $('h1').toggleClass('wacky');
  });
  $('.addItem').click(function() {
    $('ul').append('<li>And Another</li>');
  });
  $('.boxy').hover(function() {
    $(this).css('background-color','black');
  });
  $('h2').mouseleave(function() {
    $(this).slideUp("slow");
      // Animation complete.
  });
  $('.fadeout').hover(function() {
    $('.fadeout').fadeOut();
  });
  $('.show').click(function() {
    $('.fadeout').fadeIn();
  });
  $('.hovered').hover(function() {
    $('.hovered').css('font-family','"Times New Roman"');
  });
  $("#divSnow").websnowjq();
});
