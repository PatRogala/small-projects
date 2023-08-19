import fs from 'fs';
let rawdata = fs.readFileSync('db.json');
let todos = JSON.parse(rawdata);

export const addTodo = (title, description) => {
    console.log(`Adding a new todo item with title: ${title} and description: ${description}`);
    const todo = {
        id: todos.length + 1,
        title,
        description,
        status: 'pending'
    };
    todos = [...todos, todo];
    fs.writeFileSync('db.json', JSON.stringify(todos));
    console.log('Todo item added successfully');
}

export const listTodo = (status) => {
    console.log(`Listing all the todo items with status: ${status}`);
    if (status === 'all') {
        console.log(todos);
        return;
    }

    const filteredTodos = todos.filter(todo => todo.status === status);
    console.log(filteredTodos);
}

export const setAsDone = (id) => {
    console.log(`Setting todo item with id: ${id} as done`);
    id = parseInt(id);
    const todo = todos.find(todo => todo.id === id);
    todo.status = 'done';
    fs.writeFileSync('db.json', JSON.stringify(todos));
    console.log('Todo item updated successfully');
}

export const deleteTodo = (id) => {
    console.log(`Deleting todo item with id: ${id}`);
    id = parseInt(id);
    const filteredTodos = todos.filter(todo => todo.id !== id);
    fs.writeFileSync('db.json', JSON.stringify(filteredTodos));
    console.log('Todo item deleted successfully');
}