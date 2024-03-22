const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    { 
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your Project:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description and usage of your Project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can users install this application? :'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can your application be used?:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Project license?:',
        choices: [
            'MIT',
            'GPL v3.0',
            'Apache 2.0',
            'BSL 1.0',
            'Mozilla',
            'none',

        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Can you provide guidelines on how to contribute to this project?:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Is there any test instructions for your application?:'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Where can people reach out to you if they have any questions about your project?:'
    },
    
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`${path.resolve()}/output/${fileName}`, data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', generateMarkdown(answers))
    })
}

// function call to initialize program
init();
