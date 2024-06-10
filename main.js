import inqirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inqirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what would you like to add in your Todos?",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "would you like to add more in your Todos?",
            default: "true",
        },
    ]);
    todos.push(addtask.todo);
    console.log(todos);
    condition = addtask.secondQuestion;
}
