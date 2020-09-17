//variable keeps track of who's turn it is
let activePlayer = 'X';
//array stores array of moves, used to determine win conditions
let selectedSquares = [];

//function for placing an x or o in a square
function placeXOrO(squareNumber) {
  //condition ensures square hasn't been selected already
  //.some() method used to check each element of selectedSquares array
  //to see if it contains the square number clicked on
  if (!selectedSquares.some(element => element.includes(squareNumber))) {
    //variable retrieves the html element id that was clicked
    let select = document.getElementById(squareNumber);
    //condition checks who's turn it is
    if (activePlayer === 'X') {
      //if activePlayer equals X the x.png is placed in HTML
      select.style.backgroundImage = 'url("images/x2.png")';
      //activePlayer can only be X or O, if not X is must be O      
    } else {
        //if activePlayer is equal to O, o.png placed in HTML
        select.style.backgroundImage = 'url("images/o2.png")';
    }
    //squareNumber and activePlayer concatenated, added to array
    selectedSquares.push(squareNumber + activePlayer);
    //calls function to check for win conditions
    checkWinConditions();
    //condition for changing activePlayer
    if (activePlayer === 'X') {
      //if activePlayer is X change to O
      activePlayer = 'O';
    //if activePlayer anything other than X    
    } else {
      //change activePlayer to X
      activePlayer = 'X';
    }

    //function plays placement sound
    audio('./media/placement.mp3'); //sound from zapsplat
    //condition checks if it is computers turn
    if(activePlayer === 'O') {
      //function disables clicking for computer choice
      disableClick();
      //function waits 1 sec to place image and enable click
      setTimeout(function () { computersTurn(); }, 1000)
    }
    //returning true needed for computerTurn() to work
    return true;
  }
  //function results in random square being selected
  function computersTurn() {
    //boolean needed for while loop
    let success = false;
    //variable stores random number 0-8
    let pickASquare;
    //condition allows while loop to keep trying
    //when square selected already
    while (!success) {
      //random number 0-8 selected
      pickASquare = String(Math.floor(Math.random() * 9));
      //if random number evaluates returns true, square hasn't been selected
      if (placeXOrO(pickASquare)) {
        //calls the function
        placeXOrO(pickASquare);
        //changes boolean and end loop
        success = true;
      };
    }
  }
}

  //function parses selectedSquares array to search for win condition
  //drawWinLine function is called to draw line when win condition met
  function checkWinConditions() {
    // X 0,1,2 condition
    if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100);}
    // X 3,4,5 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304);}
    // X 6,7,8 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508);}
    // X 0,3,6 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558);}
    // X 1,4,7 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558);}
    // X 2,5,8 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558);}
    // X 6,4,2 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90);}
    // X 0,4,8 condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520);}
    // O 0,1,2 condition
    if      (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100);}
    // O 3,4,5 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304);}
    // O 6,7,8 condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508);}
    // O 0,3,6 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558);}
    // O 1,4,7 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558);}
    // O 2,5,8 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558);}
    // O 6,4,2 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90);}
    // O 0,4,8 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520);}
    //condition check for tie if none of above conditions met 
    //and 9 squares selected, the code executes
    else if (selectedSquares.length >= 9) {
      //function plays tie game sound
      audio('./media/tada.mp3');//sound from soundbible
      //function sets a .3 sec timer before resetGame is called
      setTimeout(function () { resetGame(); }, 1000);
    }
    //function checks if an array includes 3 strings, used to check win condition
    function arrayIncludes(squareA, squareB, squareC) {
      //variables will be used to check for 3 in a row
      const a = selectedSquares.includes(squareA);
      const b = selectedSquares.includes(squareB);
      const c = selectedSquares.includes(squareC);
      //if 3 variables are all included in array true is
      //returned and else if condition executed the drawWinLine function
      if (a === true && b === true && c === true) { return true; }
    }    
  }

  //function makes body element temporarily unclickable
  function disableClick() {
    //makes body unclickable
    body.style.pointerEvents = 'none';
    //makes body clickable again after 1 sec
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000)
  }

//function takes a string parameter of the path you set earlier for placement sound
function audio(audioURL) {
  //create new audio object and pass the path as a parameter
  let audio = new Audio(audioURL);
  //method plays our audio sound
  audio.play();
}

//function utilizes HTML canvas to draw win line
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
  //accesses our HTML canvas element
  const canvas = document.getElementById('win-lines');
  //access to methods and properties to use on canvas
  const c = canvas.getContext('2d');
  //indicates where start of lines x axis is 
  let x1 = coordX1,
    //indicates where start of lines y axis is 
    y1 = coordY1,
    //indicates where end of lines x axis is
    x2 = coordX2,
    //indicates where end of lines y axis is
    y2 = coordY2,
    //variable stores temporary x axis data to update in animation loop
    x = x1,
    //variable stores temporary y axis data to update in animation loop
    y = y1;

  //function interacts with canvas
  function animateLineDrawing() {
    //variable creates the loop for when game ends to restart
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //method clears content from last loop iteration
    c.clearRect(0, 0, 608, 608);
    //method starts a new path
    c.beginPath();
    //method moves to a starting poing for line to draw
    c.moveTo(x1, y1);
    //method indicates the end point of line
    c.lineTo(x, y);
    //method sets width of line
    c.lineWidth = 10;
    //method sets color of line
    c.strokeStyle = 'rgba(252, 3, 169, 0.8)';
    //method draws everything laid out above
    c.stroke();
    //condition checks if end point reached
    if (x1 <= x2 && y1 <= y2) {
      //condition adds 10 to previous end x point
      if (x < x2) {x += 10;}
      //condition adds 10 to previous end y point
      if (y < y2) {y += 10;}
      //condition cancels animation loop if end point reached
      if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
    }
  }
  //function clears canvas after win line is drawn
  function clear() {
    //starts animation loop
    const animationLoop = requestAnimationFrame(clear);
    //clears canvas
    c.clearRect(0, 0, 608, 608);
    //stops animation loop
    cancelAnimationFrame(animationLoop);    
  }
  //disallows clicking while win sound plays
  disableClick();
  //plays win sound
  audio('./media/cheering.mp3');//sound from soundbible
  //calls main animation loop
  animateLineDrawing();
  //waits 1 sec, then clears canvas, resets game and allows clicking
  setTimeout(function() {clear(); resetGame(); }, 1000);
}

//function resets game in a tie or win
function resetGame() {
  //loop iterates through HTML square element
  for (let i = 0; i < 9; i++) {
    //variable gets HTML element of i.
    let square = document.getElementById(String(i));
    //removes elements backgroundImage
    square.style.backgroundImage = '';
  }
  //resets array to empty to start over
  selectedSquares = [];
}
