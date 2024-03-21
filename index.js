const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown").default;

// array of questions for user
const questions = [
    { 
        type: 'input',
        name: 'title',
        message: 'Project title?:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage instructions?:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Project license?:',
        choices: [
            'MIT',
            'GPL',
            'Apache License 2.0',
            'BSD',
            'Mozilla',
            'none',

        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute to this project?:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How to run tests?:'
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
