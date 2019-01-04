// global variables
var total = 0;

$(document).ready(() => {
  $('.yellow_back').hide();
  $('.add-item-button').click(() => {
    var item = $('.item').val();
    var price = $('.price').val();

    total = +total + +price;
    Math.round(total);
    total = total.toFixed(2);

    if (!item.length) return;
    // $('.list-group').append
    (`<li class="list-group-item">${item}</li>`);

    $('.list-group').append(`<li class="list-group-item back_color"> ${item}<button class="btn btn-danger delete-item float-right">Delete</button><button class="btn btn-danger mark-item float-right">Mark Off Item</button><p>${price}</p></li>`);
    $('.item').val('');
    $('.price').val('');
    $('.list-group').show(600);
    $('.yellow_back').show(600);
    $('.total-val').text(total).show(600);


  });
  // Displays the buttons with the mouse
  $(document).on('mouseover', 'li', function() {
    $('.delete-item').hide(); // hiding the item clicked on list.
    $(this).children().show(600);
  });

  $(document).on('click', 'button.delete-item', function() {
    // makes the item selected for delete to be active.
    $(this).parent().addClass('active');
    var price = $(".active.list-group-item p").html();
    total = total - price;
    total = total.toFixed(2);
    $('.total-val').text(total).show(600);

    $(this).parent().remove();
    if (total === '0.00') {
      $('.yellow_back').hide();

    }

  });

  // Strikes through the item
  $(document).on('click', 'button.mark-item', function() {

    $(this).parent().css("text-decoration", "line-through");
  });


  // Navigation Bar
  $('.openNav').click(() => {
    mySidenav.style.width = "250px";
  });

  $('.closeNav').click(() => {
    mySidenav.style.width = "0";
  });

});
