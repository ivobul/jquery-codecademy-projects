$(document).ready(() => {
  // cart navigation item
  $('#cart').on('click', () => {
    $('#cartMenu').show();
  });
  $('.dropdown-menu').on('mouseleave', () => {
    $('.dropdown-menu').hide();
  });
  
  // account navigation item
  $('#account').on('click', () => {
    $('#accountMenu').show();
  });
  $('.dropdown-menu').on('mouseleave', () => {
    $('.dropdown-menu').hide();
  });

  // help navigation item
  $('#help').on('click', () => {
    $('#helpMenu').show();
  });
  $('.dropdown-menu').on('mouseleave', () => {
    $('.dropdown-menu').hide();
  });
});
  
