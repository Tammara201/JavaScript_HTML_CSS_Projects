//creates object to keep track of values
const Calculator = {
    //displays 0 on screen
    Display_Value: '0',
    //holds first operand for any expression, originally set to null
    First_Operand: null,
    //checks to see if operand has been input
    Wait_Second_Operand: false,
    //holds the operator, originally set to null
    operator: null,
};

//modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //checking to see if Wait_Second_Operand is true and set
    //Display_Value to he key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //overwrites Display_Value if current value is 0, otherwise adds to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;        
    }
}

//handles decimal points
function Input_Decimal(dot) {
    //ensures accidental clickint of decimal doesn't cause bugs in operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //if Display_Value doesn't contain decimal, add a decimal
        Calculator.Display_Value += dot;
    }
}

//handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    //when operator key is pressed, convert the current number
    //displayed on the screen to a number and then store the result in
    //Calculator.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    //checks if operator already exists and if Wait_Second_Oerand is true,
    //then updates the operator and exits from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//check if operator already exists
        const Value_Now = First_Operand || 0    
        //if operator exists, property lookup is performed for the operator
        //in the Perform_Calculation object and the function that matches the
        //operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9)
    //remove any trailing 0's
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
}
Calculator.Wait_Second_Operand = true;
Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand

};
function Calculator_Reset () {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;    
}
//function updates screen with contents of Display_Value
function Update_Display () {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //target variable is an object that represents the element that was clicked
    const { target } = event;
    //if element that was clicked is not a button, exit function
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //ensures AC clears nums from Calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})