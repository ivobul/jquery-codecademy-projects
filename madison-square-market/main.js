$(document).ready(() => {
  // cart navigation item
  $('#cart').on('click', (e) => {
    $('#cartMenu').show();
    $(e.currentTarget).find('.arrow-down').addClass('rotate');
  });
  $('#cart .dropdown-menu').on('mouseleave', (e) => {
   $('#cartMenu').hide();
   $(e.currentTarget).prev().find('.arrow-down').removeClass('rotate');
  });
  
  // account navigation item
  $('#account').on('click', (e) => {
    $('#accountMenu').show();
    $(e.currentTarget).find('.arrow-down').addClass('rotate');
  });
  $('#account .dropdown-menu').on('mouseleave', (e) => {
    $('#account .dropdown-menu').hide();
    $(e.currentTarget).prev().find('.arrow-down').removeClass('rotate');
  });

  // help navigation item
  $('#help').on('click', (e) => {
    $('#helpMenu').show();
    $(e.currentTarget).find('.arrow-down').addClass('rotate');
  });
  $('#help .dropdown-menu').on('mouseleave', (e) => {
    $('#help .dropdown-menu').hide();
    $(e.currentTarget).prev().find('.arrow-down').removeClass('rotate');
  });
});
