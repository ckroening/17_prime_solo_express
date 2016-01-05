$(function() {
  $('button').click(yayMoney); 

  function yayMoney() {
    $.ajax({
      url: '/balance'
    }).done(function(money) {
      $('button').slideDown(450, function() {
        $(this).html(money + '<br>Yay, money! Click to see another amount.</br>');
      });
    });
  }
});

