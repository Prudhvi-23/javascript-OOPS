function Employee(name,age,basesalary){
    this.name=name;
    this.age=age;
    this.basesalary=basesalary;
    let monthlybouns=1000

    let CalculateFinalSalary=function(){
      let finalSalary=basesalary+monthlybouns;
    console.log('finalSalary is:'+ finalSalary);
 }

   this.getEmpDetails=function(){
    console.log("Name:"+this.name);
    console.log("Age:"+this.age);
    console.log("Basesalary:"+this.basesalary);
    CalculateFinalSalary();
   
 }
   
}
let emp1=new Employee('Prudhvi',23,20000)
emp1.getEmpDetails();


