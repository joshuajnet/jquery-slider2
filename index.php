<html lang="en-US">
<head>
<meta charset="UTF-8" />
<link rel="stylesheet" type="text/css" media="all" href="css/style.css" />
<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js?ver=4.3.3'></script>
<script type='text/javascript' src='js/jquery.touchSwipe.min.js'></script>
<script type='text/javascript' src='js/slider.js'></script>

</head>

	<body>
		
	<div class="slider">
       <ul>
            <li class="inactive-slide" style="background-image: url('images/image1.jpg');"></li>
            <li class="inactive-slide" style="background-image: url('images/image2.jpg');"></li>
            <li class="inactive-slide" style="background-image: url('images/image3.jpg');"></li>
       </ul>
    </div>


<script type='text/javascript'>
	$(document).ready(function() {	
			$('.slider').slideshow();
	});
</script>		
	
	</body>
</html>