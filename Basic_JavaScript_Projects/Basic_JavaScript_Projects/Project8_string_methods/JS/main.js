//Function called on click of button to concatenate
function combine_Function() { 
    var first = "Welcome ";//defines variable to use in complete_sentence
    var second = "to the ";
    var third = "rest of ";
    var fourth = "your life.";
    var complete_sentence = first.concat(second, third, fourth)
    document.getElementById("Combine").innerHTML= complete_sentence;//Sends you to combine_Function and prints complete_sentence variable    
}

//Function called on click of button to slice
function cut_Function() { 
    var word = "Wait until you see what comes next";    
    var part = word.slice(5,10);
    document.getElementById("Cut_display").innerHTML= part;//Pulls Click here from HTML and sends you to cut_Function
}

//Function called on click of button to make uppercase
function uppercase_Function() { 
    var sentence = "Wait until you see what comes next";    
    var upper = sentence.toUpperCase();
    document.getElementById("Make_upper").innerHTML= upper;//Pulls Click here from HTML and sends you to uppercase_Function
}

//Function called on click of button to search for word
function look_Function() { 
    var string = "Wait until you see what comes next";    
    var look = string.search("next");
    document.getElementById("Search_Word").innerHTML= look;//Pulls Click here from HTML and sends you to look_Function prints position of word
}

//Function called on click of button to change number to string
function string_Function() { 
    var A = 250;    
    document.getElementById("Number").innerHTML= A.toString();//Pulls Click here from HTML and sends you to string_Function to convert num to string
}

//Function called on click of button to diplay defined digits
function precision_Function() { 
    var B = 2504.8963087;    
    document.getElementById("Determine").innerHTML= B.toPrecision(8);//Pulls Click here from HTML and sends you to precision_Function to display defined digits
}

//Function called on click of button to diplay fixed number
function fixed_Function() { 
    var D = 2.50487;
    var C = D.toFixed(2);    
    document.getElementById("Specific").innerHTML= C;//Pulls Click here from HTML and sends you to fixed_Function to display fixed number
}

//Function called on click of button to diplay primative value of string
function primative_Function() { 
    var E = "Well what do we have here";
    var F = E.valueOf();    
    document.getElementById("Primative").innerHTML= F;//Pulls Click here from HTML and sends you to primative_Function to display primative value of string
}