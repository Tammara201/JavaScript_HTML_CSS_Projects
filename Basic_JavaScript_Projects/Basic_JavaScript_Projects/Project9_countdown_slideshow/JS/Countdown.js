function countdown_Function() { //Function called on click of button
    var seconds = document.getElementById("Seconds").value;//Pulls value entered and defines seconds variable
    
    function tick() {
        seconds = seconds - 1; //defines time to countdown by
        Timer.innerHTML = seconds;//Display countdown
        setTimeout(tick, 1000); //1 second between ticks       
    if(seconds == -1) { //Stop countdown
        alert("Time is up!"); //popup window will appear
    }
        }
        tick(); 
}