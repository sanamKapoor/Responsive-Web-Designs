let tb1 = $('.tab-1').show();
let tb2 = $('.tab-2').hide();
let tb3 = $('.tab-3').hide();

$('#tab-1-btn').addClass('tab-border');

$('#tab-1-btn').click(function(){
  $('#tab-2-btn').removeClass('tab-border');
  $('#tab-3-btn').removeClass('tab-border');
  $(this).addClass('tab-border');
  $('.tab-1').show();
  $('.tab-2').hide();
  $('.tab-3').hide();
});

$('#tab-2-btn').click(function(){
  $('#tab-1-btn').removeClass('tab-border');
  $('#tab-3-btn').removeClass('tab-border');
  $(this).addClass('tab-border');
  $('.tab-1').hide();
  $('.tab-2').show();
  $('.tab-3').hide();
});

$('#tab-3-btn').click(function(){
  $('#tab-1-btn').removeClass('tab-border');
  $('#tab-2-btn').removeClass('tab-border');
  $(this).addClass('tab-border');
  $('.tab-1').hide();
  $('.tab-2').hide();
  $('.tab-3').show();
})