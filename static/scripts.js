$(function() {
	('button').on('click', yayMoney); 

	function yayMoney() {
	$.ajax({
		url: '/balance'
	}).done(function(money) {
		$('button').fadeOut(1000, function() {
      $(this).html(money + '<br><br> Click again for another chance at success!');
    }).fadeIn(1000);
  });
	}
});
	}
	}
})