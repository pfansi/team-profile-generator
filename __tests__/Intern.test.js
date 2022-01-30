const Intern = require("../src/lib/Intern");

const myIntern = new Intern(
  "Marie",
  6037,
  "marie@gmail.com",
  "intern",
  "Manchester College"
);

describe("Intern", () => {
  it("is going to check if the Intern class has a name", () => {
    expect(myIntern.internName).toEqual(expect.any(String));
  });
});

describe("Intern", () => {
  it("is going to check if the Intern class has an ID", () => {
    expect(myIntern.internId).toEqual(expect.any(Number));
  });
});

describe("Intern", () => {
  it("is going to check if the Intern class has an Email", () => {
    expect(myIntern.internEmail).toContainEqual(
      expect.stringContaining("@", ".")
    );
  });
});

describe("Intern", () => {
  it("is going to check if the intern class has a Role", () => {
    expect(myIntern.internRole).toMatch("intern");
  });
});
describe("Intern", () => {
  it("is going to check if the Intern class has a School", () => {
    expect(myIntern.internSchool).toEqual(expect.any(String));
  });
});
