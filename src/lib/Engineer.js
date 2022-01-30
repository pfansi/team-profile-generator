// Engineer class will have name, ID, email, and GitHub username,
class Engineer {
  constructor(name, id, email, role, github) {
    this.engineerName = name;
    this.engineerId = id;
    this.engineerEmail = email;
    this.engineerRole = role;
    this.engineerGithub = github;
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

  getRole() {
    return this.engineerRole;
  }

  getGithub() {
    return this.engineerGithub;
  }
}

module.exports = Engineer;
