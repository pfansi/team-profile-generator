const Manager = require("../src/lib/Manager");

const myManager = new Manager("Brad", 7025, "brad@gmail.com", 1012);

describe("Manager", () => {
  it("is going to check if the Manager class has a name", () => {
    expect(myManager.name).toEqual(expect.any(String));
  });
});

describe("Manager", () => {
  it("is going to check if the Manager class has an ID", () => {
    expect(myManager.id).toEqual(expect.any(Number));
  });
});

describe("Manager", () => {
  it("is going to check if the manager class has an Email", () => {
    expect(myManager.email).toContainEqual(expect.stringContaining("@", "."));
  });
});

describe("Manager", () => {
  it("is going to check if the manager class has a Role", () => {
    expect(myManager.getRole()).toMatch("Manager");
  });
});

describe("Manager", () => {
  it("is going to check if the Manager class has an office Number", () => {
    expect(myManager.getOfficeNumber()).toEqual(expect.any(Number));
  });
});
