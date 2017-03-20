$( document ).ready(function() {

	console.log( "ready!" );

	$(".list-group-item").on('click', function() {
		clickAnswer = $(this).attr('value'); 
		console.log(clickAnswer);
		
	});

});