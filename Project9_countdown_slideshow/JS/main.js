function countdown_Function() { //Function called on click of button
    var seconds = document.getElementById("Seconds").value;//Pulls value entered and defines seconds variable
    
    function tick() {
        seconds = seconds - 1; //defines time to countdown by
        Timer.innerHTML = seconds;//Display countdown
        setTimeout(tick, 1000); //1 second between ticks       
    if(seconds == -1) { //Stop countdown
        alert("Time is up!"); //popup window will appear
    }
        }
        tick(); 
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

///Display slideshow
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}