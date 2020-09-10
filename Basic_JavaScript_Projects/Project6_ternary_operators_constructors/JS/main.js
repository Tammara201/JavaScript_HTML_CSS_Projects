function count_Function() { //Function called on click of button
    document.getElementById("Nested_Function").innerHTML= Count();//Sends you to Count function
    function Count() {
        var Starting_point = 10; //defines Starting_point variable
        function plus_Five() {Starting_point += 5;} //plus_Five function adds 5 to Starting_point
        plus_Five();
        return Starting_point;
    }
}