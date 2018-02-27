var ToggleBox = function (targetElement) {
	
    var tH = $('.toggleHeader');
	
	tH.unbind().on({
			click: function () {
					$( this ).toggleClass('active');
					$( this ).next().slideToggle(1000);
				}				
		});
}
