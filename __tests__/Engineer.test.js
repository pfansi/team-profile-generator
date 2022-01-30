const Engineer = require("../src/lib/Engineer");

const myEngineer = new Engineer(
  "John",
  3060,
  "john@gmail.com",
  "engineer",
  "John76"
);

describe("Engineer", () => {
  it("is going to check if the Engineer class has a name", () => {
    expect(myEngineer.engineerName).toEqual(expect.any(String));
  });
});

describe("Engineer", () => {
  it("is going to check if the Engineer class has an ID", () => {
    expect(myEngineer.engineerId).toEqual(expect.any(Number));
  });
});

describe("Engineer", () => {
  it("is going to check if the Engineer class has an Email", () => {
    expect(myEngineer.engineerEmail).toContainEqual(
      expect.stringContaining("@", ".")
    );
  });
});

describe("Engineer", () => {
  it("is going to check if the engineer class has a Role", () => {
    expect(myEngineer.engineerRole).toMatch("engineer");
  });
});

describe("Engineer", () => {
  it("is going to check if the Engineer class has a GitHub", () => {
    expect(myEngineer.engineerGithub).toEqual(expect.not.stringContaining(" "));
  });
});
