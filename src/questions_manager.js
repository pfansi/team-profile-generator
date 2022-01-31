// creating an array of questions for manager input information and export it as a module via inquirer

const questionsManager = [
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
    message: "what is your office number?",
    name: "officeNumber",
  },
  {
    type: "list",
    message: "Would you like to create another role?",
    name: "role",
    choices: ["Engineer", "Manager", "Intern", "No"],
  },
];

module.exports = questionsManager;
