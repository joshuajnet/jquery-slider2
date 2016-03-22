$(document).ready(function() {

		//slideshow
		
		//main slider functions
		$.fn.slideshow = function() {
			
			var currentImage = 0;
			var allImages = 0;
			
			//next previous buttons
			$(this).append('<div class="prev">&#9668;</div><div class="next">&#9658;</div>');

			//set image count 
            allImages = $(this).find('li').length;
            
            //hide elements when slides are not present
            if( allImages==1 ) {
	            $(this).find('.slideshow-next, .slideshow-prev').hide();
            } else {
	            //mobile swipe active if more than one slide present
	            $(this).find('ul').on("swipeleft", nextHandler );
				$(this).find('ul').on("swiperight", previousHandler );
            }
            
            //adjust page if no slides available
            if( $(this).is(':visible') && allImages<1) {
	            $(this).hide();
	            $('#content').addClass('no-slide');
            }
		
		//show first slide
		$(this).find('li:eq(0)').removeClass('inactive-slide');
		
		//click next
		$(this).find('.next').click( nextHandler );
		
		//click prev
		$(this).find('.prev').click( previousHandler );
				
		//next slide functions
		function nextHandler(e) {
			
				e.preventDefault();
			
				currentImage++;
				
	            //if we are at the end let set it to 0
	            if(currentImage>=allImages) { 
		            currentImage = 0;
					$(this).parent().find('li').first().removeClass('inactive-slide')
					$(this).parent().find('li').last().addClass('inactive-slide');
				} else {
					$(this).parent().find("li:eq("+ currentImage +")").removeClass('inactive-slide').prev().addClass('inactive-slide');
				}
			
		}
		
		//previous slide functions		
		function previousHandler(e) {
			
				e.preventDefault();
				
				currentImage--;
	            //if we are at the end let set it to 0
	            if(currentImage<0) { 
		            currentImage = allImages-1;
	            	$(this).parent().find('li').last().removeClass('inactive-slide')
	            	$(this).parent().find('li').first().addClass('inactive-slide');
				} else {
					$(this).parent().find("li:eq("+ currentImage +")").removeClass('inactive-slide').next().addClass('inactive-slide');
				}
				
		}
				
		}
});	
