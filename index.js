// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the projects title?',
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
            name: 'description',
            message: 'Provide a description for your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples of how to use your application.'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please list any contributors with their github username, or other sources used to make your application'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What is your GitHub Username?'
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter a link to your GitHub or GitHub Repository.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your Email'
        },
        // {
        //     type: 'checkbox',
        //     name: 'license',
        //     message: 'Select the license your application is covered under'
        // }
    ]);
};



// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/READ-ME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
        
            resolve({
                ok: true,
                message: 'File created!'
            }); 
        });
    }); 
}

// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

questions()
    .then(readMeData => {
        return generateMarkdown(readMeData);
    })
    .then(pageREADME => {
        return writeFile(pageREADME)
    })
    .catch(err => {
        console.log(err);
    });
