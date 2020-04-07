/*Gallery on Fiber Code Page*/
let slides = document.getElementsByClassName("gallerySlide");
console.log(slides.length)
let index = 0;

left.addEventListener("click", moveLeft)
right.addEventListener("click", moveRight)

function startSlides() {
	slides[index].style.display = "block";
}

function moveLeft() {
	index = index - 1;
	if(index < 0) {
		 index  = slides.length-1;
        slides[0].style.display = "none";
	}
    	if(slides[index +1] ) {
		slides[index +1].style.display = "none";
	}
    
    slides[index].style.display = "block";
}

function moveRight () {
	index = index + 1
	if(index > slides.length-1 ) {
		index = 0;
        slides[slides.length-1].style.display = "none";
	}
    	if(slides[index -1] ) {
		slides[index -1].style.display = "none";
	}
    slides[index].style.display = "block";
}

window.onload = startSlides()