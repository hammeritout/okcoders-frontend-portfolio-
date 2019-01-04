$(document).ready(() => {

  var user1 = {
    email: 'sharyl1266@gmail.com',
    password: 'asdf',
    name: 'Sharyl Hammer'
  };

  //console.log('Document is ready');
  $('.button.login').click(() => {
    var emailAddress = $('input.email').val();
    var password = $('input.password').val();
    compUser(emailAddress, password)
  });


  $('input').keydown(() => {
    console.log('input key down');
    if ($('.input.email').val().length > 0 && $('.input.password').val().length > 0); {
      console.log('validation is true');
      $('.button.login').removeAttr('disabled');
    }

  });

  function compUser(email, password) {
    if (email === user1.email && password === user1.password) {
      // $('.input.email').hide(500);
      // $('.input.password').hide(500);
      // $('.button.login').hide(500);
      // need to display home page here.

      location.href = "home.html";
    } else {
      $('.input.email').hide(500);
      $('.input.password').hide(500);
      $('.button.login').hide(500);
      // $('.access-denied').show(500);
      $('body').append('<p>Access Denied</p>').css('color', 'red');
    }
  }
  $('.button.logout').click(() => {
    // console.log('button logout is clicked');
    location.href = "login.html";

  });

  // opens up the sidebar.

  $('.openNav').click(() => {
    mySidenav.style.width = "250px";
  });

  // closes the sidebar.

  $('.closeNav').click(() => {
    mySidenav.style.width = "0";
  });

});
