$(document).ready(function(){
	$(".btn").on("mouseenter", function() {
	  	$('.test').css('display','inline');
  	});
  	$(".btn").on("mouseleave", function() {
	  	$('.test').css('display','none');
  	});
});