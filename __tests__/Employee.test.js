const Employee = require("../src/lib/Employee");

const myEmployee = new Employee("Paul", 2715, "paul@gmail.com", "employee");

describe("Employee", () => {
  it("is going to check if the employee class has a name", () => {
    expect(myEmployee.employeeName).toEqual(expect.any(String));
  });
});

describe("Employee", () => {
  it("is going to check if the employee class has an ID", () => {
    expect(myEmployee.employeeId).toEqual(expect.any(Number));
  });
});

describe("Employee", () => {
  it("is going to check if the employee class has an Email", () => {
    expect(myEmployee.employeeEmail).toEqual(expect.any(String));
  });
});

describe("Employee", () => {
  it("is going to check if the employee class has a Role", () => {
    expect(myEmployee.employeeRole).toEqual(expect.any(String));
  });
});
