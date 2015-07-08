$('.accordion').on('click', '.accordion-controls', function(e){
	e.preventDefault();
	$(this)
		.next('.accordion-content')
		.not(':animated')
		.slideToggle();
});