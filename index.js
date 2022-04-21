const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const generate = require("./src/generate");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project."
    },
    {
        type: "input",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "ISC", "none"]
    }, {
        type: "input",
        name: "instillation",
        message: "What command should we run to install dependancies?",
        default: "npm install"
    }, 
    {
        type: "input",
        name: "usage",
        message: "How will your project be used?"
    }, 
    {
        type: "input",
        name: "contributers",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should we run to test the project?",
        default: "npm test"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email you would like to be contacted at?"
    }
];

function writeFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

    function init(){
        inquirer.prompt(questions).then((inquirerResponse) => {
            console.log("generating readme file");
            writeFile("README.md", generate({...inquirerResponse}));
        });
    }

    init();