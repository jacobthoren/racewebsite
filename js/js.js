window.onload = function() {


  showSlides(); //Börja slideshow när sidan laddar in

}



var slide_index = 0;

function showSlides() {
	console.log(slide_index);
  var slides = document.getElementsByClassName("slide"); //Få alla slide element

  for (var i = 0; i < slides.length; i++) {

    slides[i].style.display = "none"; //Dölj alla bilder

  }


  if (slide_index > slides.length - 1) {

    slide_index = 0;

  }

  slides[slide_index].style.display = "flex"; //Visa endast den aktiva bilden

	setTimeout(nextSlide, 3000);

}

function nextSlide() {
	slide_index += 1;
	showSlides()
}

function plusSlides(i) {
	slide_index += i
	showSlides()
}
