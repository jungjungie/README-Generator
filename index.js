const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// Questions for user input
inquirer.prompt([
    {
        message: "Enter project title:",
        name: "title",
        type: "input"
    },
    {
        message: "Provide a short project description:",
        name: "description",
        type: "input"
    },
    {
        message: "What kind of license should your project have?",
        name: "licenses",
        type: "list", 
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        message: "Choose a color for your license badge:",
        name: "badgecolor",
        type: "list", 
        choices: ['brightgreen', 'yellow', 'orange', 'red', 'blue']
    },
    {
        message: "What command line should be run to install dependencies?",
        name: "dependencies",
        type: "input",
        default: "npm i"
    },
    {
        message: "What does the user need to know about using the repo?",
        name: "usage",
        type: "input"
    },
    {
        message: "What guidelines should the user know about contributing to the repo?",
        name: "contributing",
        type: "input"
    },
    {
        message: "What command should be run to run tests?",
        name: "test",
        type: "input"
    },
    {
        message: "Enter your GitHub username:",
        name: "username",
        type: "input"
    },
    {
        message: "Enter your email address:",
        name: "email",
        type: "input"
    }
]).then(function(userAnswers) {
    console.log(userAnswers);

    fs.writeFile("README2.md", generateMarkdown(userAnswers), function(err) {
        if (err) throw err;
        console.log("Success! File was written to README2.md")
    })
})