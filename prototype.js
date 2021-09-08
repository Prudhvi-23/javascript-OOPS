let EmpDetails=function(name,age){
 this.name=name;
 this.age=age;

 this.getName=function(){
     return this.name;
 };
 this.getAge=function(){
     return this.age
 };
};
var emp1=new EmpDetails('Prudhvi',23);
var emp2=new EmpDetails('dilip',23);
console.log(emp1.getName()+emp1.getAge());
console.log(emp2.getName()+emp2.getAge());