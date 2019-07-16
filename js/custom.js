//----------- Offset for Site Navigation ----------------\\
$('#siteNav').affix({
	offset: {
		top: 100
	}
})
$('#topLogo').affix({
	offset: {
		top: 100
	}
})

//----------- Scroll to Contact Us element when the Contact button is clicked. ----------------\\
$('#contactButton').on('click', function(event) {
	event.preventDefault();
	$('html, body').stop().animate({
		scrollTop: $("#contactContainer").offset().top
	}, 1000);
});
$('#bookNow').on('click', function(event) {
	event.preventDefault();
	$('html, body').stop().animate({
		scrollTop: $("#contactContainer").offset().top
	}, 1000);
});

//----------- Remove animating down arrow once scrolled. ----------------\\
$(window).one('scroll', function() {
	document.getElementById("arrowDownToPage").style.display = "none";
});

//----------- Slideshow Scripts: ----------------\\
// var slideIndex = [1];//,1];
// var slideId = ["mySlides1"];//, "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//   var i;
//   var x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}    
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[slideIndex[no]-1].style.display = "block";  
// }

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeCus", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activeCus";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}