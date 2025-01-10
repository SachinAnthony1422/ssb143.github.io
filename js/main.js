$(window).load(function(){
	$('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

   "use strict";

   //OUTLINE DIMENSION AND CENTER
   (function() {
	   function centerInit(){

		   var sphereContent = $('.sphere'),
			   sphereHeight = sphereContent.height(),
			   parentHeight = $(window).height(),
			   topMargin = (parentHeight - sphereHeight) / 2;

		   sphereContent.css({
			   "margin-top" : topMargin+"px"
		   });

		   var heroContent = $('.hero'),
			   heroHeight = heroContent.height(),
			   heroTopMargin = (parentHeight - heroHeight) / 2;

		   heroContent.css({
			   "margin-top" : heroTopMargin+"px"
		   });

	   }

	   $(document).ready(centerInit);
	   $(window).resize(centerInit);
   })();

   // Init effect 
   $('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){

   initializeSite();
   (function() {
	   setTimeout(function(){window.scrollTo(0,0);},0);
   })();

});
/* END ------------------------------------------------------- */


$('#countdown').countdown({
   date: "Jan 01 2025 00:00:00", // Set the target date
   render: function(data) {
	   var el = $(this.el);
	   el.empty()
		 .append("<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div>")
		 .append("<div>" + this.leadingZeros(data.hours, 2) + " <span>hours</span></div>")
		 .append("<div>" + this.leadingZeros(data.min, 2) + " <span>minutes</span></div>")
		 .append("<div>" + this.leadingZeros(data.sec, 2) + " <span>seconds</span></div>");
   },
   onEnd: function() {
	   // Update message when countdown ends
	   $('#countdown').html("<h2>The site is now open!</h2>");
   }
});

document.getElementById('gift-icon').addEventListener('click', function() {
	const modal = document.getElementById('surprise-modal');
	modal.classList.remove('hidden');
	modal.style.display = 'block';
});

document.getElementById('open-surprise').addEventListener('click', function() {
	window.location.href = "lovequotes.html"; // Replace with the actual URL of the next page
});