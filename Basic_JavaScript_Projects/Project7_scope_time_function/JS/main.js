//Global variable
var X = 10; 
function add_Numbers_1() { //defines number function 1
    document.write(20 + X + "<br>");//adds variable X to 20
}

function add_Numbers_2() { //defines number function 2
    document.write(X + 100 + "<br>");//adds variable X to 100
}
add_Numbers_1();//prints total
add_Numbers_2();//prints total


//Local variable
function add_Numbers_3() { //defines number function 3
    var Y = 5;
    document.write(30 + Y + "<br>");//add variable Y to 30
}

function add_Numbers_4() { //defines number function 4
    document.write(Y + 120 + "<br>");//will not add variable Y
}
add_Numbers_3();//prints total
add_Numbers_4();//will not print

//Console.log
var Z = 10; 
function add_Numbers_5() { //defines number function 5
    console.log(20 + Z + "<br>");//adds variable Z to 20
}

function add_Numbers_6() { //defines number function 6
    console.log(A + 100 + "<br>");//adds variable Z to 100
}
add_Numbers_5();//prints total
add_Numbers_6();//prints total


//print message when if stmt conditions met
function work_Function() { 
    if (new Date().getHours() > 8) { //defines if conditons
        document.getElementById("Go_Home").innerHTML = "Time for you to go home!";//Pulls Click here from HTML and print message
    }
}


//print message for if/else condition met
function speed_Function () { 
    Speed = document.getElementById("Speed").value;//defines variable for ID Speed and value entered 
    if (Speed >= 80) { //defines condition to determine whether the if or else stmt should print
        Ticket = "I'm going to have to give you a ticket";
    }
    else {
        Ticket = "I'll let you off with a warning today";
    }
    document.getElementById("Speed_You_Were_Driving").innerHTML = Ticket;//presents Click here button and starts if/else function  
}

//print message for if/else if/else condition met
function meal_Function () { 
    var Time = new Date().getHours();//defines variable for Time 
    var Meal;
    if (Time < 11 == Time > 0) { //defines condition to determine whether the if stmt should print
        Meal = "Time for breakfast!";
    }
    else if (Time > 11 == Time < 19) { //defines condition to determine whether the if else stmt should print
        Meal = "Time for lunch!";
    }
    else {
        Meal = "Time for dinner!"; //will print if the time is > 7p
    }
    document.getElementById("Meal_To_Eat").innerHTML = Meal;//presents Click here button and starts if/elseif/else function  
}


//print message for if/else if/else condition met
function time_Function () { 
    var Time = new Date().getHours();//defines variable for Time 
    var Reply;
    if (Time < 12 == Time > 0) { //defines condition to determine whether the if stmt should print
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) { //defines condition to determine whether the if else stmt should print
        Reply = "It is the afternoon!";
    }
    else {
        Reply = "It is the evening!"; //will print if the time is > 7p
    }
    document.getElementById("Time_Of_Day").innerHTML = Reply;//presents Click here button and starts if/elseif/else function  
}


