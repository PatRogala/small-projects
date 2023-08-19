// A simple todo list application for the CLI with the following options:
// --new to add a new todo item
// --list [all|pending|done] to list the todo items
// --done [id] to update a todo item
// --delete [id] to delete a todo item
// --help to list all the available options
// --version to print the version of the application

// Importing the required modules
import { addTodo, listTodo, setAsDone, deleteTodo } from './todo.js';
import { help, version } from './utils.js';

const command = process.argv[2];

let id;
switch (command) {
    case '--new':
        const title = process.argv[3];
        const description = process.argv[4];
        addTodo(title, description);
        break;
    case '--list':
        const status = process.argv[3];
        listTodo(status);
        break;
    case '--done':
        id = process.argv[3];
        setAsDone(id);
        break;
    case '--delete':
        id = process.argv[3];
        deleteTodo(id);
        break;
    case '--help':
        help();
        break;
    case '--version':
        version();
        break;
    default:
        console.log('Invalid command');
        break;
}