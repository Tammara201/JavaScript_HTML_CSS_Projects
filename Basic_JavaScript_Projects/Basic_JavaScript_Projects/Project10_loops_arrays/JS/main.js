/*Counts up from variable to defined end*/
function loop_Function() {
    var Number = "";
    var A = 10;
    while (A < 40) {
        Number += "<br>" + A;
        A++;
    }
    document.getElementById("Loop").innerHTML=Number;
}

/*Return the number of characters in a sentence*/
function length_Function() {
    var A = "How many characters are there in this sentence?";
    var B = A.length;
    
    document.getElementById("Characters").innerHTML= B;
}

/*Print all 'Insturments'*/
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]
var Content = "";
var Y;
function for_loop_Function() {
    for (Y= 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }    
    document.getElementById("List_of_Instruments").innerHTML= Content;
}

/*Print defined variable and sentence*/
function array_Function() {
    var Fish_Picture = [];
    Fish_Picture[0] = "swimming";
    Fish_Picture[1] = "eating";
    Fish_Picture[2] = "jumping";
    Fish_Picture[3] = "resting";    
    document.getElementById("Array").innerHTML= "In this picture, the fish is " +
    Fish_Picture[1] + ".";
}

/*Print designated infomation from constant and variables*/
function constant_Function() {
    const Car = {make:"Dodge", model:"Challenger", color:"yellow"};
    Car.color = "blue";
    Car.price = "$65,000";    
    document.getElementById("Constant").innerHTML= "The cost of the " +
        Car.model + " was " + Car.price;
}

/*Print var, let, var - Will not work with defer in script line*/
var N = 55;
document.write(N);
{
    let A = 88;
    document.write("<br>" + N);
}
document.write("<br>" + N);

/*Return value of defined variable and operator*/
var M = return_Function(12, 5);
function return_Function(a, b) {
    return a * b;
}
document.getElementById("Return").innerHTML= M;

/* Creates an object using let keyword. Includes properties and method.*/
let piano = {
    make: "Steinway ",
    model: "grand piano ",
    year: "2020 ",
    color: "white ",
    description: function() {
        return "The piano is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Object").innerHTML = piano.description();

/*Creates a break at 5 in count to 10*/
var text = "";
var S;
for (S = 0; S < 10; S++) {
    if (S === 5) {break;}
    text += "The number is " + S + "<br>";
}
document.getElementById("Break").innerHTML = text;

/*Skips step where V=4 in count to 10*/
var text = "";
var V;
for (V = 0; V < 10; V++) {
    if (V === 4) {continue;}
    text += "The number is " + V + "<br>";
}
document.getElementById("Continue").innerHTML = text;

