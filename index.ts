#! /usr/bin/env node  
import inquirer from "inquirer"
import chalk  from "chalk";

//1. computer generate random number    done 
//2. user input for guessing number     done 
//3. compare user input and computer generated number and show result 
const randomNumber :number = Math.floor(Math.random()*6+1);
console.log(chalk.bgCyan.bold("\n WELCOME TO NUMBER GUESSING GAME"))
const answer = await inquirer.prompt([

{name: "userGuessedNumber",
type: "number",
message: chalk.green("Please guess any number between 1-6 ?")
}
]);

if(answer.userGuessedNumber===randomNumber){
    console.log(chalk.blue("Congratulations you guessed right number"))
}else {
    console.log(chalk.magenta("oops! you guess wrong number"))
}

