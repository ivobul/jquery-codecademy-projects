$(document).ready(() => {
  $('.more-btn').on('click', () => {
    $(event.currentTarget).siblings('.more-menu').toggle();
  });

  $('.share').on('click', () => {
    $(event.currentTarget).next().toggle();
  });

  $('.bell').on('click', () => {
    $(event.currentTarget).find('span').toggleClass('active');
  });
});
