$(document).ready(function(){


	screenHeight = $(window).outerHeight(true) - $('#desktop-nav-div').outerHeight(true);
	$('.main_slide').height(screenHeight);
	$(window).resize(function(){
		screenHeight = $(window).outerHeight(true) - $('#desktop-nav-div').outerHeight(true);
		$('.main_slide').height(screenHeight);
	});




if($('.splash-screen-slider').length > 0) {
		ul = $('.splash-screen-slider ul');
		ul.children().each(function(i,li){
			ul.prepend(li);
		});
		setTimeout(function() { scroller(); }, 5000);
	}

sl2 = $(window).outerHeight(true);

$('.sld').height(sl2);



	/*----------------------------------------------------*/
	/*	Navbar fixed to top when page scrolled down
	/*----------------------------------------------------*/
   $(window).bind('scroll', function() {
       //INITIALLY NAV WILL BE FIXED TO BOTTOM
       
       // START SCROLLING WHEN when scroll value = 900px - window height
       var movableHeight = ($(window).height())
       if ($(window).scrollTop() > movableHeight) {
       
       			$('#desktop-nav-div').addClass('fixed');
     
       }
       else {
       	
       			$('#desktop-nav-div').removeClass('fixed');
    
       }


       // FIX NAV TO TOP WHEN SCROLLED >=900PX []

   });




});


function scroller() {
	$('.splash-screen-slider li:last').fadeOut(3000, function() {
		$('.splash-screen-slider ul').prepend($('.splash-screen-slider li:last'));
		$('.splash-screen-slider li:first').show();
		setTimeout(function() { scroller(); }, 5000);
	});
}


