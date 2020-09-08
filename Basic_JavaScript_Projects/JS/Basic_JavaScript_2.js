function Change_Font_Color() { //change font color and test function definition
    var str= "Click me again"; //change text on click
    var result= str.fontcolor("red");//change color on click
    document.getElementById("Red_Text").innerHTML=result;
}

function myFunction() { //concatenate definition
    var sentence= "I am learning "; //first part of concatenate
    sentence += "a lot from this book!";//second part of concatenate
    document.getElementById("Concatenate").innerHTML=sentence;
}