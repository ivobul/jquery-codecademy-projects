$(document).ready(() => {

  $('.menu').on('mouseenter', () => {
    $('.nav-menu').show(800);
  });
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide(500);
  });

  $('.btn').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('btn-hover');
  }).on('mouseleave', (event) => {
    $(event.currentTarget).removeClass('btn-hover');
  });
  
  
  $('.postText').focus();
  $('.postText').on('keyup', (event) => {
    let post = $(event.currentTarget).val();
    let remaining = 140 - post.length;
    if (remaining <= 0) {
      $('.wordcount').addClass('red');
    }
    else {
      $('.wordcount').removeClass('red');
    }
    
    $('.characters').html(remaining);
  });
  
  $('.postText').val('');
  
  $(".button-holder").click((event) => {
  //Prevent the default action of the event: in this case, prevent form from submitting data 
    event.preventDefault();
  });
}); 
