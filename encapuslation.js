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
var emp1 = new Employee('Prudhvi', 123, 9642501591);
//emp1.setDetails();
console.log("Name of the Emp is"+ " "+emp1.getEmpName());
console.log("Id of the Emp is"+ " "+emp1.getEmpId());
console.log("Phoneno of the Emp is"+ " "+emp1.getEmpPhoneno());