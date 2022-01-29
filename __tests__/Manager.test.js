const Manager = require("../src/lib/Manager");

const myManager = new Manager("Brad", 7025, "brad@gmail.com", 10);

describe("Manager", () => {
  it("is going to check if the Manager class has a name", () => {
    expect(myManager.managerName).toEqual(expect.any(String));
  });
});

describe("Manager", () => {
  it("is going to check if the Manager class has an ID", () => {
    expect(myManager.managerId).toEqual(expect.any(Number));
  });
});

describe("Manager", () => {
  it("is going to check if the Manager class has an Email", () => {
    expect(myManager.managerEmail).toEqual(expect.any(String));
  });
});

describe("Manager", () => {
  it("is going to check if the Manager class has an office Number", () => {
    expect(myManager.managerOfficeNumber).toEqual(expect.any(Number));
  });
});
