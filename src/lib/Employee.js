// employee class will have a name ,id , email, role
class Employee {
  constructor(name, id, email, role) {
    this.employeeName = name;
    this.employeeId = id;
    this.employeeEmail = email;
    this.employeeRole = role;
  }

  getName() {
    return this.employeeName;
  }

  getId() {
    return this.employeeId;
  }

  getEmail() {
    return this.employeeEmail;
  }

  getRole() {
    return this.employeeRole;
  }
}

module.exports = Employee;
