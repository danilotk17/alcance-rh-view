$(document).ready(function(){
	$(".nav a").on("click", function(){
	   $(".nav").find(".active").removeClass("active");
	   $(this).parent().addClass("active");
	});
	
	$(".logo").on("click", function() {
	   $(".nav").find(".active").removeClass("active");
	   $("#home-tab").addClass("active");
	});
});
