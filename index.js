#! /usr/bin/env node  
import inquirer from "inquirer";
//1. computer generate random number    done 
//2. user input for guessing number     done 
//3. compare user input and computer generated number and show result 
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    { name: "userGuessedNumber",
        type: "number",
        message: "please guess any number between 1-6"
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations you guessed right number");
}
else {
    console.log("oops! you guess wrong number");
}
