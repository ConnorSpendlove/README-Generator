// Requires all necessary packages needed. 
// inquirer is used to make user input more versatile in node.
// fs allows the file structure of the app to be altered.
// generateMarkdown links information occuring in a separate js file
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// Array of questions
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your application.",
        // validates if an answer is put
        validate: function(answer) {
            if (answer.length < 1){
               return console.log("You must enter a title name.");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description for your application",
        validate: function(answer) {
            if (answer.length < 1){
               return console.log("You must enter a description.");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions. If none, enter N/A",
        validate: function(answer) {
            if (answer.length < 1){
               return console.log("Please enter instructions or enter N/A");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions on how to use you application."
        
    },
    {
        type: "list",
        name: "license",
        message: "Please enter the license type of your application.",
        // choices instead of input
        choices: ['AGPL_v3', 'GPLv3', 'LGPL_v3', 'MPL_2.0', 'Apache_2.0', 'MIT', 'Boost_1.0', 'Unlicense'],
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter guidelines on how people can contibute to this application. If none, enter N/A",
        validate: function(answer) {
            if (answer.length < 1){
               return console.log("You must enter guidelines or enter N/A.");
            }
            return true;
        }

    },
    {
        type: "input",
        name: "tests",
        message: "Please provide instructions on how to test this application. If none, enter N/A",
        validate: function(answer) {
            if (answer.length < 1){
               return console.log("You must enter instructions or enter N/A.");
            }
            return true;
        }

    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username (no @ sign)"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email (One you are comfortable sharing)."
    }
];

// Creates a new file by accessing the fs
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log(`Successfully generated README.md`);
      });
    }
// This function takes the data generated in the generateMarkdown.js file and passes in the user data to the writeToFile function above.
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
      writeToFile("README.md", generateMarkdown(data));
      });
    }

init();
