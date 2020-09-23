//adds fade out on opening of page
document.body.className += ' fade-out';

$(function(){
    $('body').removeClass('fade-out')
});

//validates first name is added to movie deals form
function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  //login form opens when Login here clicked
  function openForm() {
    document.getElementById("contactForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("contactForm").style.display = "none";
  }

  //movie slideshow auto play
  $("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()    
    .appendTo('#slideshow');
},  3000);