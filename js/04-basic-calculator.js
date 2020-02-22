
let firstNumber;
let secondNumber; 
let typeOfCalc; 

function calculate(x,y,z) {
    
    // var x = firstNumber;
    // var y = secondNumber;
    // var z = typeOfCalc; 
    
    // window.console.log("First number is " + x);
    // window.console.log("Second number is " + y);
    // window.console.log("The operation you picked is" + z);

  
    while (typeOfCalc != "add" && typeOfCalc != "subtract" && typeOfCalc != "multiply" && typeOfCalc != "divide") {
        firstNumber = Number(window.prompt("Pick your first number"));
        secondNumber = Number(window.prompt("Pick your second number"));
        typeOfCalc = String(window.prompt("What operation would you like to perform (add/subtract/multiply/divide")).toLowerCase(); // String to conver value to a string - .toLoweCase to convert the value to lower case 

    switch (typeOfCalc) {
        case "add" :
            window.alert("Your addition result is " + eval(firstNumber + secondNumber));
            break; 
        case "subtract" : 
            window.alert("Your subtraction result is " + eval(firstNumber - secondNumber)); 
            break;
        case "multiply" : 
            window.alert("Your multiplication result is " + eval(firstNumber * secondNumber));
            break; 
        case "divide" : 
            window.alert("Your division result is " + eval(firstNumber / secondNumber));
            break; 
        default:
            repeat = true;
            window.alert("You must chose an actual operation. Start again");
        
    } 

  } 

 
 // while (z !== "add" && z !== "subtract" && z !== "multiply" && z !== "divide");



}

calculate();

