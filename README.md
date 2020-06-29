# README-Generator
This command-line application dynamically generates a README.md from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Upon running the app, the user will be prompted for the following information:  Project title, description, license, badge color, installation and usage instructions, guidance on contributing and running tests, GitHub username and email address.

The application will then take this information and create a quality, professional README.md file. 

## Table of Contents
* [Installation](#Installation)
* [Running the Application](#Running%20the%20Application)
* [Demo](#Demo)
* [Tests](#Tests)
* [Contact](#Contact)

***
## Installation
To install necessary dependencies, run the following command:
``` 
npm i 
``` 

***
## Running the Application
- After the installation, run the following command:
```
node index.js
```
- Provide information for the ReadMe file as prompted.
- Note that when prompted with the question `"What command line should be run to install dependencies?"`, the default will be `npm i` if no other input is provided.
- After all prompts are answered, if the application ran successfully, the terminal will show the message `"Success! File was written to README2.md"` and a new README2.md will have been generated.
- If for any reason the application did not run successfully, an error will be displayed on the terminal. 



***
## Demo
![gif demo of app](images/readmegenerator.gif)

***
## Tests
To run a test of the application without having to go through the prompts each time, open up the <i>test folder</i> within command line and run the following command: 
```
node test.js
```
A new ReadMe.md file should be generated within the <i>test folder</i>. 


***
## Contact
- **GitHub:**  [jungjungie](https://github.com/jungjungie)
- **Portfolio:**  [https://jungjungie.github.io/](https://jungjungie.github.io/)