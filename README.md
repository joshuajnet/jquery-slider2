# jquery-slider2
A simple jquery slideshow, with jquery touchSwipe and prev/next controls. Allows multiple instances on same page w/ each()

Include slider.js and jQuery.touchSwipe.min.js in file with jQuery.

Initialize with 

    <script type='text/javascript'>
    	$(document).ready(function() {	
    			$('.slider').slideshow();
    	});
    </script>
    
OR for multiple instances:

<script type='text/javascript'>
	$(document).ready(function() {	
			$('.slider, .slider2').each(function() {
				$(this).slideshow();
			});
	});
</script>	

HTML

    <div class="slider">
       <ul>
            <li class="inactive-slide" style="background-image: url('images/image1.jpg');"></li>
            <li class="inactive-slide" style="background-image: url('images/image2.jpg');"></li>
            <li class="inactive-slide" style="background-image: url('images/image3.jpg');"></li>
       </ul>
    </div>

CSS

    .slider{
        margin:0px auto;
        overflow: hidden;
        position: relative;
        width: 600px;
        height: 400px;
    }
    
    .slider ul{
        list-style: none;
        margin:0;
        padding:0;
    	position: relative;
    }
    
    .slider li{
    	position: absolute;
    	top: 0;
    	left: 0;
    	width: 100%;
    	height: 400px;
    	background-size: cover;
    	background-position: center;
    	background-repeat: no-repeat;
    	-webkit-transition: opacity 1s ease-in-out;
    	-moz-transition: opacity 1s ease-in-out;
    	-o-transition: opacity 1s ease-in-out;
    	transition: opacity 1s ease-in-out;
    }
    
    .inactive-slide {
    	opacity: 0;
    }
    
    .prev, .next{
        position: absolute;
        top:50%;
        text-decoration: none;
        color:#fff;
        padding: 5px;
        z-index:100;
        cursor: pointer;
    }
            
    .prev{
    	font-size: 20px;
    	line-height: 20px;
    	margin-top:-10px;
        left:20px;
    }
    
    .next{
    	font-size: 20px;
    	line-height: 20px;
    	margin-top:-10px;
        right:20px;
    }
