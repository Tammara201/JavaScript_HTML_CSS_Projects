document.body.className += ' fade-out';

$(function(){
    $('body').removeClass('fade-out')
});

function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }