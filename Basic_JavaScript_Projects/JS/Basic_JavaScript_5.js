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

document.write(15 > 7);  //display 'true'

document.write(15 < 7);  //display 'false'

console.log(7<5);

document.write("25" + 0);  //display '250'

document.write(10+5 > 7);  //display 'true'

document.write(10+5 < 7);  //display 'false'

document.write(10+5 == 12);  //display 'true'

document.write(10+5 == 7);  //display 'false'

X = 13;
Y = 13;
document.write(X === Y);  //display 'true'

X = 13;
Y = '13';
document.write(X === Y);  //display 'false'

X = 13;
Y = 'Fourteen';
document.write(X === Y);  //display 'false'

X = 13;
Y = 29;
document.write(X === Y);  //display 'false'

document.write(10>2 && 12>10);  //display 'true'

document.write(10>2 && 10>12);  //display 'false'

document.write(10>12 || 12>10);  //display 'true'

document.write(10<2 || 10>12);  //display 'false'

function not_Function() { //display false on button click
    document.getElementById("Not").innerHTML = !(25>17); //display 'false'
}

function notTrue_Function() { //display true on button tip
    document.getElementById("NotTrue").innerHTML = !(2>10); //display 'true'
}