// Engineer class will have name, ID, email, and GitHub username,
class Engineer {
  constructor(name, id, email, username) {
    this.engineerName = name;
    this.engineerId = id;
    this.engineerEmail = email;
    this.engineerUsername = username;
  }

  getName() {
    return this.engineerName;
  }

  getId() {
    return this.engineerId;
  }

  getEmail() {
    return this.engineerEmail;
  }

  getUsername() {
    return this.engineerUsername;
  }
}

module.exports = Engineer;
