$(document).ready(function() {
	
	$('#pointsOfInterests').hide();
	$('#resume').hide();
	$('a#aboutme').click(function() {
		$('#resume').hide();
		$('#pointsOfInterests').hide();
		$('#bio').fadeIn();
		$('#content').fadeIn();
		return false;
	    });
	$('a#cool').click(function() {
			//$('#bio').hide();
			$('#pointsOfInterests').fadeIn();
			return false;
		    });
    });

$(document).ready(function() {
	$('a#resumeLink').click(function() {
			$('#content').hide();
			$('#resume').fadeIn();
			return false;
			});	
});