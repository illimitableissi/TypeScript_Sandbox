var Department = /** @class */ (function () {
    //readonly keyword - can only be initialized once and cannot be changed
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //private id: string;
        //private name: string;
        //employees is now only accessible inside the class
        this.employees = [];
        // this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("d1", "Accounting");
accounting.addEmployee("issi");
accounting.addEmployee("Max");
accounting.printEmployeeInformation();
