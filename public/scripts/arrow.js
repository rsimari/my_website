$(document).ready(function () {
	// scroll on arrow click
	$(".arrow").click(function () {
		$('html, body').animate({
			scrollTop: $(".body-container").offset().top
		}, 2000);
	})


	// animate arrow moving
	var times = 5;
	var seconds = "3000";
	for (var i = 0; i < times; i++) {
		if (i != 0) seconds = "1000"
		$(".arrow").delay(seconds).effect("bounce", {direction: "up"}, 3000)
	}

});

