// creating an array of questions for engineer input information and export it as a module via inquirer

const questionsEngineer = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your ID",
    name: "id",
  },
  {
    type: "input",
    message: "what is your email",
    name: "email",
  },

  {
    type: "input",
    message: "what is your GitHub username?",
    name: "github",
  },

  {
    type: "list",
    message: "Would you like to create another role?",
    name: "role",
    choices: ["Engineer", "Manager", "Intern", "No"],
  },
];

module.exports = questionsEngineer;
