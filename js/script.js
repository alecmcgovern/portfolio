$('document').ready(function(){

	$('#navbar').localScroll({duration:800});

	const arrayLength = 8;

	var picture = document.getElementById("picture-focused");

	var swipeLeft = function() {
		var picNumber = parseInt(picture.src.slice(-5).charAt(0));
		var newPicNumber = (picNumber - 1) > -1 ? picNumber -1 : arrayLength - 1;


		var newImageSrc = "images/array/" + newPicNumber + ".png";
		picture.src = newImageSrc;
	}

	var swipeRight = function() {
		var picNumber = parseInt(picture.src.slice(-5).charAt(0));
		var newPicNumber = (picNumber + 1) >= arrayLength ? 0 : picNumber + 1;

		console.log(newPicNumber);


		var newImageSrc = "images/array/" + newPicNumber + ".png";
		picture.src = newImageSrc;
	}


	document.getElementById("left-swipe").addEventListener("click", swipeLeft);

	document.getElementById("right-swipe").addEventListener("click", swipeRight);
});