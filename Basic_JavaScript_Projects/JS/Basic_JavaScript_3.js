

function random_Number() {    //display a random number in popup window
    window.alert(Math.random () * 100);
}

function addition_Function() { //display 4+4=8
    var addition = 4+4;
    document.getElementById("Add").innerHTML = "4+4=" + addition;
}

function subtraction_Function() { //display 6-5=1
    var subtraction = 6-5;
    document.getElementById("Subtract").innerHTML = "6-5=" + subtraction;
}

function multiplication_Function() { //display 3X4=12
    var multiplication = 3*4;
    document.getElementById("Multiplication").innerHTML = "3X4=" + multiplication;
}

function division_Function() { //display 20/5=4
    var division = 20/5;
    document.getElementById("Division").innerHTML = "20/5=" + division;
}

function modulus_Function() { // display 25 divided by 8 gives you a remainder of: 1
    var modulus = 25 % 8;
    document.getElementById("Modulus").innerHTML = "25 divided by 8 gives you a remainder of:" + modulus;
}

var X = 7.25; //subtract 1 from 7.25
X--;
document.write(X);

var X = 7.25; //add1 to 7.25
X++;
document.write(X);