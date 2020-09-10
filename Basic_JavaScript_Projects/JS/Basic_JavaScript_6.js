// Printing bike information for variables
function Bike(Make, Model, Year, Color) {  //constructor function for Bike object 
    this.Bike_Make= Make; //Make of the Bike object
    this.Bike_Model= Model; //Model of the Bike object
    this.Bike_Year= Year; //Year of the Bike object
    this.Bike_Color= Color; //Color of the Bike object   
}
var Steve= new Bike("Fezzari", "Road Bike", 2015, "Blue");//defining variables
var Melissa= new Bike("Kona", "Mountain Bike", 2020, "Purple");//defining variables
var Sheryl= new Bike("Huffy", "Beach Cruiser", 2002, "Yellow");//defining variables
function bikeFunction() { //Pulls button element from HTML that tells the JS to be called when selected
document.getElementById("New_and_This").innerHTML=
    "Melissa rides a " + Melissa.Bike_Color + "-colored " + 
    Melissa.Bike_Model + " manufactured in " + Melissa.Bike_Year;//diplays Melissa bike information on button click
}

//Printing vehicle information for variables
function Vehicle(Make, Model, Year, Color) {  //constructor function for Vehicle object   
    this.Vehicle_Make= Make; //Make of the Vehicle object
    this.Vehicle_Model= Model; //Model of the Vehicle object
    this.Vehicle_Year= Year; //Year of the Vehicle object
    this.Vehicle_Color= Color; //Color of the Vehicle object   
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");//defining variables
var Emily= new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");//defining variables
var Erik= new Vehicle("Ford", "Pinto", 1971, "Mustard");//defining variables
function carFunction() { //Pulls button element from HTML that tells the JS to be called when selected
document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + 
    Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;//diplays Erik vehicle information on button click
}

//Checking height to ride
function Ride_Function() { //check to see if rider is tall enough
    var Height, Can_ride; //compares height to Can_ride options
    Height= document.getElementById("Height").value//gets height value from id in HTML
    Can_ride= (Height<52) ? "You are too short":"You are tall enough"//? operator asking for positive response when condition is false 
    document.getElementById("Ride").innerHTML= Can_ride + " to ride.";//diplays 'You are tall enough to ride.' on button click
}

//Checking age to vote
function Age_Function() { //check to see if person is old enough to vote
    var Age, Can_vote; //compares age to Can_vote options
    Age= document.getElementById("Age").value//gets age value from id in HTML
    Can_vote= (Age<18) ? "You are not old enough":"You are old enough"//? operator asking for positive response when condition is false 
    document.getElementById("Vote").innerHTML= Can_vote + " to vote.";//diplays 'You are old enough to vote.' on button click
}

//defining ladder type
function Ladder(Brand, Type, Hoist) { // Constructor function for Ladder objects
    this.brand = Brand; //Brand of the Ladder object  
    this.type = Type; //Type of the Ladder object 
    this.hoist = Hoist; //Hoist of the Ladder object 
  } 
  var myLadder = new Ladder("Werner", "Safety", "Ratchet Lever"); // Create a Ladder object
  
  function Ladder_Function() {
   document.getElementById("Ladder_Type").innerHTML =  // Display ladder type
  "My ladder is a " + myLadder.type + " ladder.";
  }



