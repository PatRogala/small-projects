export const help = () => {
    console.log(`
    Usage: npm run todo [options]
    A simple todo list application for the CLI with the following options:
    --new to add a new todo item
    --list [all|pending|done] to list the todo items
    --done [id] to update a todo item
    --delete [id] to delete a todo item
    --help to list all the available options
    --version to print the version of the application
    `);
}

export const version = () => {
    console.log('1.0.0');
}