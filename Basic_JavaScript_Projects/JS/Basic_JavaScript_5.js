document.write(typeof "Word"); //will display 'string'

function true_Function() {
document.getElementById("True").innerHTML = isNaN('This should tell me it is not a number'); //display true
}

function false_Function() {
    document.getElementById("False").innerHTML = isNaN('25'); //display false
}

function nan_Function() {
    document.getElementById("NaN").innerHTML = 0/0; //display NaN
}

document.write(5E310); //display 'infinity'

document.write(-5E310);  //display '-infinity'