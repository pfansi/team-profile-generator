const Engineer = require("../src/lib/Engineer");

const myEngineer = new Engineer("John", 3060, "john@gmail.com", "@John");

describe("Engineer", () => {
  it("is going to check if the Engineer class has a name", () => {
    expect(myEngineer.engineerName).toEqual(expect.any(String));
  });
});

describe("Engineer", () => {
  it("is going to check if the employee class has an ID", () => {
    expect(myEngineer.engineerId).toEqual(expect.any(Number));
  });
});

describe("Engineer", () => {
  it("is going to check if the employee class has an Email", () => {
    expect(myEngineer.engineerEmail).toEqual(expect.any(String));
  });
});

describe("Engineer", () => {
  it("is going to check if the employee class has a username", () => {
    expect(myEngineer.engineerUsername).toEqual(expect.any(String));
  });
});
