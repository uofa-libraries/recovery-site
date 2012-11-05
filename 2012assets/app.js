$(document).ready(function() {
	if(location.hash){
		var aud=window.location.hash.substring(1)
			if (aud == "faculty"){
				$(".sr a").removeClass("selected").fadeTo("fast", 0.7)
 				$('a.fac').addClass("selected").fadeTo("slow", 1);
			}else if (aud == "students"){
				$(".sr a").removeClass("selected").fadeTo("fast", 0.7)
				$('a.gra, a.und').addClass("selected").fadeTo("slow", 1);
			}else{
			}
	}else{
		
	}
	     $(".gra, .dis, .fac, .alu, .ext, .per, .inf, .cir, .col, .stu, .und").click(function () {
             $(".sr a").removeClass("selected").fadeTo("fast", 0.7)
			 $("#side a").removeClass("selected")
			var thisClass=$(this).attr('class')
             $('.everyone, a.'+thisClass).addClass("selected").fadeTo("slow", 1);
       });
	   $(".al").click(function () {
             $(".sr a").removeClass("selected").fadeTo("fast", 1)
			 $("#side a").removeClass("selected")
       });
	

	$('#featured').orbit({
     animation: 'fade',                  // fade, horizontal-slide, vertical-slide, horizontal-push
     animationSpeed: 1200,                // how fast animtions are
     timer: true, 			 // true or false to have the timer
     advanceSpeed: 6000, 		 // if timer is enabled, time between transitions 
     pauseOnHover: false, 		 // if you hover pauses the slider
     startClockOnMouseOut: false, 	 // if clock should start on MouseOut
     startClockOnMouseOutAfter: 1000, 	 // how long after MouseOut should the timer start again
     directionalNav: true, 		 // manual advancing directional navs
     captions: true, 			 // do you want captions?
     captionAnimation: 'fade', 		 // fade, slideOpen, none
     captionAnimationSpeed: 800, 	 // if so how quickly should they animate in
     bullets: true,			 // true or false to activate the bullet navigation
     bulletThumbs: false,		 // thumbnails for the bullets
     bulletThumbLocation: '',		 // location from this file where thumbs will be
     afterSlideChange: function(){}, 	 // empty function 
     fluid: true                         // or set a aspect ratio for content slides (ex: '4x3') 
});
	/* Use this js doc for all application specific JS */

	/* TABS --------------------------------- */
	/* Remove if you don't need :) */

	function activateTab($tab) {
		var $activeTab = $tab.closest('dl').find('a.active'),
				contentLocation = $tab.attr("href") + 'Tab';

		// Strip off the current url that IE adds
		contentLocation = contentLocation.replace(/^.+#/, '#');

		//Make Tab Active
		$activeTab.removeClass('active');
		$tab.addClass('active');

    //Show Tab Content
		$(contentLocation).closest('.tabs-content').children('li').hide();
		$(contentLocation).css('display', 'block');
	}

  $('dl.tabs dd a').live('click', function (event) {
    activateTab($(this));
  });

	if (window.location.hash) {
		activateTab($('a[href="' + window.location.hash + '"]'));
		$.foundation.customForms.appendCustomMarkup();
	}

});