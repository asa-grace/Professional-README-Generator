// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('../Professional-README-Generator/Develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions =  () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What do you want to write as your title',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Description',
            message: 'What would you like to write as your description',
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: ''
        },
        {
            type: 'input',
            name: 'Questions',
            message: ''
        }
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
