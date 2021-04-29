$(document).ready(() =>{
  $('.hint-box').on('click', () => {
    $('.hint').slideToggle(500);
  });
  $('.wrong-answer-one').on('click', () => {
    $('.wrong-text-one').fadeOut('slow');
    $('.frown').show();
  });
  $('.wrong-answer-two').on('click', () => {
    $('.wrong-text-two').fadeOut('slow');
    $('.frown').show();
  });
  $('.wrong-answer-three').on('click', () => {
    $('.wrong-text-three').fadeOut('slow');
    $('.frown').show();
  });
  $('.correct-answer').on('click', () => {
    $('.frown').hide();
    $('.smiley').show();
    $('.wrong-text-one').fadeOut('slow');
    $('.wrong-text-two').fadeOut('slow');
    $('.wrong-text-three').fadeOut('slow');
  });
});
