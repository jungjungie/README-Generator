var inquirer = require('inquirer');

// array of questions for user
// const questions = [

// ];

inquirer.prompt([
    {
        message: "Enter your GitHub username:",
        name: "username",
        type: "input"
    },
    {
        message: "Enter your email address:",
        name: "email",
        type: "input"
    },
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
        message: "What command line should be run to install dependencies?",
        name: "dependencies",
        type: "input"
        // Make the default npm i if user hits enter
    },
    {
        message: "What command should be run to run tests?",
        name: "testrun",
        type: "input"
    },
    {
        message: "What does the user need to know about using the repo?",
        name: "title",
        type: "input"
        // They need to run 'node index.js' to get it to run
    },
    {
        message: "What does the user need to know about contributing to the repo?",
        name: "title",
        type: "input"
        // always make pull requests
    }
])

//  Usage, License, Contributing, Tests, and Questions
// usage information, contribution guidelines, and test instructions

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
