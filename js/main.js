$(document).ready(function() {

  //LOADING
  let myVar;
  function myFunction() {
      myVar = setTimeout(showPage, 0000);
  }
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }
  myFunction();

  // LIKE
  $('#heart').click(function(e) {
    e.preventDefault();

    let heart = $('#iHeart');
    heart.css('color','red');

    let counter = 2356;
    let vote = $('#counter');
    counter++;
    $('#counter').text(counter);
  });

  //SCROLL INDICATOR
  window.onscroll = function() { scrollFunc() }

  function scrollFunc() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  //VOTE
  $('#amlo').click(function(e) {
    e.preventDefault();

    let counter = 52;
    counter++;
    $('#amloCounter').text(counter);

    $('#amlo').css({'pointer-events':'none','cursor':'default'});
    $('#anaya').css({'pointer-events':'none','cursor':'default'});
    $('#meade').css({'pointer-events':'none','cursor':'default'});
    $('#bronco').css({'pointer-events':'none','cursor':'default'});

    swal({
      title: '¡Muchas gracias!',
      text: 'Has hecho la diferencia',
      type: 'success',
      confirmButtonText: 'Entendido'
    });

  });

  $('#anaya').click(function(e) {
    e.preventDefault();

    let counter = 24;
    counter++;
    $('#anayaCounter').text(counter);

    $('#amlo').css({'pointer-events':'none','cursor':'default'});
    $('#anaya').css({'pointer-events':'none','cursor':'default'});
    $('#meade').css({'pointer-events':'none','cursor':'default'});
    $('#bronco').css({'pointer-events':'none','cursor':'default'});

    swal({
      title: '¡Muchas gracias!',
      text: 'Has hecho la diferencia',
      type: 'success',
      confirmButtonText: 'Entendido'
    });

  });

  $('#meade').click(function(e) {
    e.preventDefault();

    let counter = 17;
    counter++;
    $('#meadeCounter').text(counter);

    $('#amlo').css({'pointer-events':'none','cursor':'default'});
    $('#anaya').css({'pointer-events':'none','cursor':'default'});
    $('#meade').css({'pointer-events':'none','cursor':'default'});
    $('#bronco').css({'pointer-events':'none','cursor':'default'});

    swal({
      title: '¡Muchas gracias!',
      text: 'Has hecho la diferencia',
      type: 'success',
      confirmButtonText: 'Entendido'
    });

  });

  $('#bronco').click(function(e) {
    e.preventDefault();

    let counter = 3;
    counter++;
    $('#broncoCounter').text(counter);

    $('#amlo').css({'pointer-events':'none','cursor':'default'});
    $('#anaya').css({'pointer-events':'none','cursor':'default'});
    $('#meade').css({'pointer-events':'none','cursor':'default'});
    $('#bronco').css({'pointer-events':'none','cursor':'default'});

    swal({
      title: '¡Muchas gracias!',
      text: 'Has hecho la diferencia',
      type: 'success',
      confirmButtonText: 'Entendido'
    });

  });


  //GRAPHICS
  // let ctx = document.getElementById("myChart");
  // let myChart = new Chart(ctx, {
  //     type: 'pie',
  //     data: {
  //         labels: ["AMLO", "Anaya", "Meade", "Bronco"],
  //         datasets: [{
  //             label: '# of Votes',
  //             data: [52, 24, 17, 3],
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 0.2)',
  //                 'rgba(54, 162, 235, 0.2)',
  //                 'rgba(255, 206, 86, 0.2)',
  //                 'rgba(75, 192, 192, 0.2)'
  //             ],
  //             borderColor: [
  //                 'rgba(255,99,132,1)',
  //                 'rgba(54, 162, 235, 1)',
  //                 'rgba(255, 206, 86, 1)',
  //                 'rgba(75, 192, 192, 1)'
  //             ],
  //             borderWidth: 1
  //         }]
  //     },
  //     options: {
  //       animation: {
  //           easing: 'linear'
  //       }
  //   }
  // });
  //
  // $('#statisticsBtn').click(function() {
  //   $('#myChart').removeClass('none');
  //   $('#myChart').addClass('block');
  // });

  //DRAG AND DROP
  $(function() {
    $('#drag1').draggable();
    $('#drag2').draggable();
    $('#drag3').draggable();
    $('#drag4').draggable();
    $('#drag5').draggable();
    $('#drag6').draggable();
    $('#drag7').draggable();
    $('#drag8').draggable();
    $('#drag9').draggable();
    $('#drag10').draggable();
    $('#drag11').draggable();
  });

  function enviar() {
    swal({
      title: '¡Muchas gracias!',
      text: 'Has enviado tu propuesta',
      type: 'success',
      confirmButtonText: 'Entendido'
    });
  }


});
