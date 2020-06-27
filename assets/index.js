var inquirer = require('inquirer');
var fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown.js')

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
        type: "input",
        default: "npm i"
    },
    {
        message: "What command should be run to run tests?",
        name: "test",
        type: "input"
    },
    {
        message: "What does the user need to know about using the repo?",
        name: "usage",
        type: "input"
    },
    {
        message: "What does the user need to know about contributing to the repo?",
        name: "contributions",
        type: "input"
    }
]).then(function(userAnswers) {
    console.log(userAnswers);

    fs.writeFile("README.md", generateMarkdown(userAnswers), function(err) {
        if (err) throw err;
        console.log("Success! File was written to README.md")
    })

})


// function to write README file
// function writeToFile(fileName, data) {
// }
// function writeToFile(generateMarkdown.generateMarkdown, userAnswers) {
//     fs.writeFile("README.md", userAnswers, function(err) {
//         if (err) throw err;
//         console.log("Success! File was written to README.md")
//     })
// }

// function to initialize program
function init() {

}

// function call to initialize program
init();
