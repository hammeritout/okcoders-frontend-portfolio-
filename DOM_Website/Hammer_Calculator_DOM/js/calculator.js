// global variables
let num1Array = [];
let num2Array = [];
let num1 = '';
let num2 = '';
let oper = '';


$(document).ready(() => {
  //  OLDWAY WHICH HAS BEEN ENHANCED!!
  // $('.btn-operator').on ('click', (e) => {
  //   var oper = e.target.innerHTML;
  //   //gives the value of the buttons
  //    num1 = $('.input.1').val();
  //    num2 = $('.input.2').val();

  // validates the numbers
  //     var result = validateNumber(num1, num2);
  //     if(result === true){
  //       handleTotal(oper, num1, num2);
  //   }

  // });
  $('.button.back').on('click', (e) => {
      $('.input.1').val(" ");
     location.href = "../home.html";
  });
  // $('.button.back').click(() =>
  //   {
  //    $('.input.1').val(" ");
  //    location.href = "../home.html";
  // });

  $('button').on('click', (e) => {
    var btn = e.target.innerHTML;
     console.log(btn);
    //  separate button from operator.
    if (btn === '+' | btn === '-' | btn === '*' | btn === '/' | btn === '%') {
      oper = btn;

    } else if (oper === '' && btn >= '0' | btn === '.') { // need to pick up decimal here.

      //pushing value of btn and placing it in the array.
      num1Array.push(btn);
      // removes comma from array and inputs the value on calculator display.
      var dsp1_input = num1Array.join('');
      $('.input.1').val(dsp1_input);

    } else if (btn !== '=' && btn >= '0' | btn === '.') { // need to pick up decimal here.

      num2Array.push(btn);
      // clears value for new input.
      $('.input.1').val(" ");
      var dsp2_input = num2Array.join('');
      $('.input.1').val(dsp2_input);

    } else {
      if (btn === '=') {
        //console.log(`this is num1Array value ${num1Array} `);
        num1 = num1Array.join('');
        num2 = num2Array.join('');
        var result = validateNumber(num1, num2);
        if (result === true) {
          handleTotal(oper, num1, num2);
        }
      }
    }

  });

  // clears the button
  $('.button.clear').click(() => {
    $('.input.1').val(" ");
    $('.input.2').val(" ");
    total = '';
    num1Array = [];
    num2Array = [];
    num1 = '';
    num2 = '';
    oper = '';

    $('.cal-val').val(" ");
    displayButton(total);

  });

  // calculates the total by the operator
  function handleTotal(oper, num1, num2) {
    switch (oper) {
      case '+':
        total = 0;
        // using the +num1 and +num2 turns string into a number
        total = +num1 + +num2;
        Math.round(total);
         // total = total.toFixed(2);
        //console.log(`this is the total ${total}`);
        displayButton(total);
        break;
    }
    switch (oper) {
      case '-':
        total = 0;
        total = +num1 - +num2;
        Math.round(total);
         // total = total.toFixed(2);
        displayButton(total);
        break;
    }
    switch (oper) {
      case '*':
        total = 0;
        total = +num1 * +num2;
        Math.round(total);
         // total = total.toFixed(2);
        displayButton(total);
        break;
    }
    switch (oper) {
      case '/':
        total = 0;
        total = +num1 / +num2;
        Math.round(total);
         // total = total.toFixed(2);
        displayButton(total);
        break;
    }
    switch (oper) {
      case '%':
        total = 0;
        total = +num1 % +num2;
        Math.round(total);
         // total = total.toFixed(2);
        displayButton(total);
        break;
    }
  }

  function displayButton(btn) {
  //  $('.cal-val').text(btn);
    $('.input.1').val(" ");
    $('.input.1').val(btn);
  }
  function validateNumber(n1, n2) {
    if (isNaN(n1)) {
      alert(`Invalid number ${n1}`);
      return false;
    } else if (isNaN(n2)) {
      alert(`Invalid number ${n2}`);
      return false;
    } else {
      return true;
    }
  }

  $('.openNav').click(() => {
      mySidenav.style.width = "250px";
  });

  $('.closeNav').click(() => {
      mySidenav.style.width = "0";
  });

});
