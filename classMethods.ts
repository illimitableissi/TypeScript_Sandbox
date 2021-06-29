abstract class Department {
    static fiscalYear = 2020
    //private id: string;
    //private name: string;
    //employees is now only accessible inside the class using the private method
    //protected method allows employees to be changed by other classes that extend this class
    protected employees: string[] = [];

    //readonly keyword - can only be initialized once and cannot be changed
    constructor(private readonly id: string, public name: string){
        // this.name = name;
    }

    static createEmployee(name: string){
        return {name: name}
    }
    //if class is marked abstract each function must be in the classes that inherit
    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    // admins: string[];
    constructor(id: string, public admins: string[]) {
        //whenever you are making a new class that is inheriting another class you must add a super.
        super(id, 'IT');
        this.admins = admins;
    }

    describe(){
        return;
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }
        throw new Error('No report found.')
    }

    set mostRecentReport(value: string){
        if(!value){
            throw new Error('Please add value')
        }
        this.addReport(value)  
      }
      
//private makes it so that only one objet can be created from the class 
   private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance(){
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe(){
        return ''
    }

    addEmployee(name: string){
        if(name === 'Max') {
            return;
        }
        this.employees.push(name)
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text
    }

    printReports(){
        console.log(this.reports)
    }
}

const it = new ITDepartment("d1", ['Issi, Max']);
// const accounting = new AccountingDepartment("d1", []);
const accounting = AccountingDepartment.getInstance();
console.log(accounting.mostRecentReport)

accounting.mostRecentReport = '';
accounting.addEmployee("issi");
accounting.addEmployee("Max");
accounting.printEmployeeInformation();

const employee1 = Department.createEmployee('Max')
