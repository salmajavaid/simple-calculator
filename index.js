#! /usr/bin/env node
import inquirer from "inquirer";
// Printing a Wellcome Message
console.log("\n\tWellcome To \'thisissalma\' - CLI Simple Calculater\n");
// Asking Question from users through inquirer
let answers = await inquirer.prompt([
    { message: "Enter First NUmber", type: "number", name: "firstNumber" },
    { message: "Enter Second NUmber", type: "number", name: "secondNumber" },
    {
        message: "Select one Operater to perform Oprations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional statments If-Else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else {
    console.log("Invalid Input");
}
