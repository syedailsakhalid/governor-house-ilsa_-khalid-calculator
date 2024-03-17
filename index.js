import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter firstnumber", type: "number", name: "firstnumber" },
    { message: "Enter secondnumber", type: "number", name: "secondnumber" },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addision", "Subtraction", "Multplication", "Division"],
    },
]);
//console.log(answer);
//conditional statement
if (answer.operator === "Addision") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
