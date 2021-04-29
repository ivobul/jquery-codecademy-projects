$(document).ready(() => {
  $('#text').on('keyup', (event) => {
    $('.preview').html($(event.currentTarget).val());
  });

  $('#font').on('change', (event) => {
    let fontFamily = $(event.currentTarget).val();
    $('.preview').css('fontFamily', fontFamily);
  });
  
  $('#weight').on('change', (event) => {
    let fontWeight = $(event.currentTarget).val();
    $('.preview').css('fontWeight', fontWeight);
  });

  $('#size').on('keyup', (event) => {
    let fontSize = $(event.currentTarget).val() + 'px';
    $('.preview').css('fontSize', fontSize);
  });
});
