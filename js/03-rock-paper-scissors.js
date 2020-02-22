/* 1.	User makes a choice. How will we collect the user’s choice?
2.	Computer makes a choice. How will we collect the computer’s choice?
3.	A conditional that determines who wins.
In this lab you will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path: 
1.	Begin by prompting the user for their choice.
2.	Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
3.	Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
4.	Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
5.	What if the result ends in a tie? Figure out how to handle that as well.
6.	What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well. */

let computer;
let choice; 

 


function userChoice() {
     choice = (window.prompt("Choose:\nPaper, Rock or Scissors"));
    while (choice != "Paper" && choice != "Rock" && choice != "Scissors") {
         window.alert("Please pick Paper, Rock, or Scissors");// Is there a way to make this so that the it doesn't matter if it's capital or not?
         choice = (window.prompt("Choose:\nPaper, Rock or Scissors")); // Maybe look into the String(hghghg) method
     }
     window.console.log("You picked " + choice);
    
}
userChoice(); 

function computerChoice() {
    computer = Math.floor(Math.random() * 10) +1; 
    window.console.log("Random Computer number is " + computer + "<br>"); 
    if (computer <= 3) {
        computer = "Rock"
       
        //window.document.write("CPU picked Rock!");
    } else if (computer > 3 && computer <= 6) {
        computer = "Paper"
        //window.document.write("CPU picked Paper!");
    } else if (computer > 6 && computer <= 10) {
        computer ="Scissors"
        //window.document.write("CPU picked Scissors!");
    } 
    window.console.log(computer);

}
computerChoice();



function compare() {
    if (choice == "Paper" && computer == "Rock") {
        window.document.write("Your Win!"); 
    } 
    
    if (choice == "Rock" && computer == "Scissors") {
        window.document.write("You Win!");
    }

    if (choice == "Scissors" && computer == "Paper") {
        window.document.write("You Win!");
    }

    if (choice == "Scissors" && computer == "Rock") {
        window.document.write("You Lose, Try Again!"); 
    } 
    
    if (choice == "Paper" && computer == "Scissors") {
        window.document.write("You Lose, Try Again!");
    }

    if (choice == "Rock" && computer == "Paper") {
        window.document.write("You Lose, Try Again!");
    }
    
    
    
    if (choice == computer) {
        window.document.write("You have a tie!")
    }
    
}

compare();


