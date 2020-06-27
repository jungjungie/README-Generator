var fs = require('fs');
var generateMarkdown = require('../utils/generateMarkdown.js')

const mockAnswers = {
    title: "Test Project",
    description: "This file is part of a test run.",
    licenses: "GPL 3.0",
    badgecolor: "yellow",
    dependencies: "npm i",
    usage: "Fork this repo and run files locally.",
    contributing: "Must make pull requests and make edits in a new branch.",
    test: "Use this test.js file for a test run.",
    username: "jungjungie",
    email: "example@email.com"
}

fs.writeFile("README.md", generateMarkdown(mockAnswers), function(err) {
    if (err) throw err;
    console.log("Success! File was written to README.md")
})