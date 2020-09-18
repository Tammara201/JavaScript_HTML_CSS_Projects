/*Print text within canvas*/
var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello", 200, 130);

var color = document.getElementById("Color_Canvas");
var shading = color.getContext("2d");

var grd = shading.createLinearGradient(0, 0, 500, 0);
grd.addColorStop(0, "green");
grd.addColorStop(1, "white");

shading.fillStyle = grd;
shading.fillRect(10, 10, 480, 230);

/*Enter meal preference with response*/
function meal_Function() {
    var Meal_Output;
    var Meals = document.getElementById("Meal_Input").value;
    var Meal_Comment = " great choice!";
    switch(Meals) {
        case "Steak":
            Meal_Output = "Steak," + Meal_Comment;
        break;

        case "Tikka Masala":
            Meal_Output = "Tikka Masala," + Meal_Comment;
        break;

        case "Chicken":
            Meal_Output = "Chicken," + Meal_Comment;
        break;

        case "Pasta":
            Meal_Output = "Pasta," + Meal_Comment;
        break;

        case "Tacos":
            Meal_Output = "Tacos," + Meal_Comment;
        break;

        case "Salad":
            Meal_Output = "Salad," + Meal_Comment;
        break;
        default:
            Meal_Output = "Please enter a choice as written in list.";
    }
    document.getElementById("Output").innerHTML = Meal_Output;
}

/*Select class to print based on index value*/
function class_Function() {
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "This text has changed";
}