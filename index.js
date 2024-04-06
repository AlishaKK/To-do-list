#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let toDoList = [];
let condition = true;
console.log(chalk.yellow("\n \tWelcome to CodeWithAlisha -ToDo-list Application\n"));
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option you want to do:",
                choices: [
                    "Add Task",
                    "Delete Task",
                    "Update Task",
                    "View Todo-List",
                    "Exit",
                ],
            },
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:",
        },
    ]);
    toDoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-list`);
};
//function to view all todolist Tasks
let viewTask = () => {
    console.log("\n your Todo-list: \n ");
    toDoList.forEach((task, index) => {
        console.log(`${index}: ${task}`);
    });
};
//function to delete a task
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index no of the task you want to delete :",
        },
    ]);
    let deleteTask = toDoList.splice(taskIndex.index, 1);
    console.log(`\n ${deleteTask} this task has been deleted successfully from your Todo-list \n`);
};
main();
// while(condition){
//     let addTask = await inquirer.prompt([
//         {
//             name: "task",
//             type: "input",
//             message:"Enter your Task :"
//     },
// ]);
// toDoList.push(addTask.task);
// console.log(`${addTask.task} Task added in Todo List successfully `);
// let addMoreTask = await inquirer.prompt([
//     {
// name: "addMore",
// type: "confirm",
// message: "Do you want to add mor task ?",
// default: "False",
//     }
// ]);
// condition = addMoreTask.addMore
// }
// console.log("Your updated Todo-list ", toDoList)
