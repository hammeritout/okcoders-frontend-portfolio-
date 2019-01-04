
$(document).ready(() => {
  $('.yellow_back').hide();
  $('.body_color').hide();

  // opens up sidebar
  $('.openNav').click(() => {
    mySidenav.style.width = "250px";
  });
  // closes sidebar
  $('.closeNav').click(() => {

    mySidenav.style.width = "0";
  });

  $('.calc-tip-button').click(() => {
    var bill = $('.bill').val();
    var total = 0;
    // selection is id uses #
    var selection = $('#sel1').val();

    switch (selection) {
      case 'Excellent':
        tip = 0;
        // using the +num1 and +num2 turns string into a number
        tip = +bill * .40;
        Math.round(total);
        // displays two decimal positions.
        tip = tip.toFixed(2);
        break;
    }
    switch (selection) {
      case 'Good':
        tip = 0;
        // using the +num1 and +num2 turns string into a number
        tip = +bill * .30;
        Math.round(total);
        tip = tip.toFixed(2);
        break;
    }
    switch (selection) {
      case 'Fair':
        tip = 0;
        // using the +num1 and +num2 turns string into a number
        tip = +bill * .20;
        Math.round(total);
        tip = tip.toFixed(2);
        break;
    }
    switch (selection) {
      case 'Poor':
        tip = 0;
        // using the +bill turns string into a number
        tip = +bill * .10;
        Math.round(total);
        tip = tip.toFixed(2);
        break;
    }
    var party_num = $('.party-number').val();
    // + turns string into a number for comparison.
    if (+party_num === 0) {
      $('.body_color').show(600);
      $('.yellow_back').show(600);
      $('.tip-val').text(tip);
    } else {


      tip /= party_num;
      Math.round(tip);
      tip = tip.toFixed(2);
      $('.body_color').show(600);
      $('.yellow_back').show(600);
      $('.tip-val').text(tip);
    }

  });
  // clears the bill value and the party_number.
  $('.clear-tip-button').click(() => {
    $('.body_color').hide();
    $('.yellow_back').hide();
    $('.tip.val').text('');
    $('.bill').val('');
    $('.party-number').val('');

  });

});
