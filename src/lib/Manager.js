// Intern class will have name, employee ID, email address, and office number
class Manager {
  constructor(name, id, email, officeNumber) {
    this.managerName = name;
    this.managerId = id;
    this.managerEmail = email;
    this.managerOfficeNumber = officeNumber;
  }

  getName() {
    return this.managerName;
  }

  getId() {
    return this.managerId;
  }

  getEmail() {
    return this.managerEmail;
  }

  getOfficeNumber() {
    return this.managerOfficeNumber;
  }
}

module.exports = Manager;
