class Car{
    setName(name){
        this.name=name;
    }
    startEnginee(){
        console.log('start enginee to this'+" "+ this.name);
    }
    stopEnginee(){
        console.log('stop enginee to this'+ " "+this.name);
    }
}
class Swift extends Car{
   tospeed(speed){
    console.log('top speed to this'+ " "+this.name+" "+speed);
   }
}
let s=new Swift();
s.setName('baleno');
s.startEnginee();
s.stopEnginee();
s.tospeed(200);