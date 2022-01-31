// Engineer class will extends Employee class
// and have name, ID, email, and GitHub username,

const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, engineerGithub) {
    super(name, id, email);
    this.engineerGithub = engineerGithub;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.engineerGithub;
  }
}

module.exports = Engineer;
