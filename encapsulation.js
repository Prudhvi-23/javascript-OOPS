class Employee{
    constructor(name,id,phoneno){
        this.name =name;
        this.id=id ;
        this.phoneno=phoneno ;
    }
    getEmpName(){
        return this.name;
    }
    getEmpId(){
        return this.id;
    }
    getEmpPhoneno(){
        return this.phoneno;
    }
}
var emp1 = new Employee('XYZ', 123, 12345);
//emp1.setDetails();
console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getEmpPhoneno());