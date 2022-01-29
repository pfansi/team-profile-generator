// Intern class will have name, ID, email, and school,
class Intern {
  constructor(name, id, email, school) {
    this.internName = name;
    this.internId = id;
    this.internEmail = email;
    this.internSchool = school;
  }

  getName() {
    return this.internName;
  }

  getId() {
    return this.internId;
  }

  getEmail() {
    return this.internEmail;
  }

  getSchool() {
    return this.internSchool;
  }
}

module.exports = Intern;
