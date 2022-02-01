// create employee questions
// create a function that will confirm if the user want to add another employee or not
// if the answer is yes, rerun the first set of questions, if the answer is no exit the application

const inquirer = require("inquirer");
const Manager = require("./src/lib/Manager");
const Engineer = require("./src/lib/Engineer");
const Intern = require("./src/lib/Intern");
const generateHtml = require("./src/generateHtml.js");
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const teamMates = [];

const createManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter a valid name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter your employee ID",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Please enter a valid employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter a valid email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter your office number",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please enter a valid office number!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMates.push(manager);
      promptOptions();
    });
};

const promptOptions = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "what would you like to do next?",
        choices: [
          "add an Engineer",
          "add an Intern",
          "add another Manager",
          "Stop building the Team",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.options) {
        case "add an Engineer":
          createEngineer();
          break;
        case "add an Intern":
          createIntern();
          break;
        case "add another Manager":
          createManager();
          break;
        default:
          buildMyTeam();
      }
    });
};

const createEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter a valid name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter your employee ID",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Please enter a valid employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter a valid email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter your Github username",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Please enter a valid Github username!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMates.push(engineer);
      promptOptions();
    });
};

const createIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a valid name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter your employee ID",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Please enter a valid employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter a valid email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter which school you have attended?",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Please enter a valid school name!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMates.push(intern);
      promptOptions();
    });
};

const buildMyTeam = () => {
  // this function will create the output directory if the output path doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, generateHtml(teamMates), "utf-8");
};

createManager();
