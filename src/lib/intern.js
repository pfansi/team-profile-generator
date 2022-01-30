// Intern class will have name, ID, email, and school,
class Intern {
  constructor(name, id, email, role, school) {
    this.internName = name;
    this.internId = id;
    this.internEmail = email;
    this.internRole = role;
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

  getRole() {
    return this.internRole;
  }

  getSchool() {
    return this.internSchool;
  }
}

module.exports = Intern;
