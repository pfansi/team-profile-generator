// Intern class will have name, employee ID, email address, and office number
class Manager {
  constructor(name, id, email, role, officeNumber) {
    this.managerName = name;
    this.managerId = id;
    this.managerEmail = email;
    this.managerRole = role;
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

  getRole() {
    return this.managerRole;
  }

  getOfficeNumber() {
    return this.managerOfficeNumber;
  }
}

module.exports = Manager;
