// Requires all necessary packages needed. 
// inquirer is used to make user input more versatile in node.
// fs allows the file structure of the app to be altered.
// generateMarkdown links information occuring in a separate js file
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your application.",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description for your application",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions. If none, enter N/A",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions on how to use you application."
    },
    {
        type: "input",
        name: "license",
        message: "Please enter the license type of you application.",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter guidelines on how people can contibute to this application. If none, enter N/A",


    },
    {
        type: "input",
        name: "tests",
        message: "Please provide intructions on how to test this application. If none, enter N/A"

    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email (One you are comfortable sharing)."
    }
];

// Creates a new file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log(`Successfully generated README.md`);
      });
    }

// This function takes the user data answered in the console, and generates a readme.md file custom made to that information.
function init() {
    inquirer.prompt(questions).then(answers => {
        const readme = `
    # ${answers.title}
    
    ## Description
    ${answers.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    ${answers.installation}
    
    ## Usage
    ${answers.usage}
    
    ## License
    This application is licensed under the ${answers.license} license.
    
    ## Contributing
    ${answers.contributing}
    
    ## Tests
    ${answers.tests}
    
    ## Questions
    For questions, please contact me [Here](mailto:${answers.email}).
    Additionally view my GitHub account [Here](github.com/${answers.github})
    `;
        writeToFile('README.md', readme);
      });
    }

init();
