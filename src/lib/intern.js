// Intern class will extends Employee class
// and have name, ID, email, and internSchool,

const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, internSchool) {
    super(name, id, email);
    this.internSchool = internSchool;
  }

  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.internSchool;
  }
}

module.exports = Intern;
