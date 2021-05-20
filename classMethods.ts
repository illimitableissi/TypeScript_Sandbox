class Department {
    //private id: string;
    //private name: string;
    //employees is now only accessible inside the class using the private methof
    //protected method allows employees to be changed by other classes that extend this class
    protected employees: string[] = [];

    //readonly keyword - can only be initialized once and cannot be changed
    constructor(private readonly id: string, public name: string){
        // this.name = name;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`)
    }

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
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }
        throw new Error('No report found.')
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
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
const accounting = new AccountingDepartment("d1", []);
console.log(accounting.mostRecentReport)

accounting.addEmployee("issi");
accounting.addEmployee("Max");
accounting.printEmployeeInformation();

