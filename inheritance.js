class Bus{
    setName(name){
        this.name=name;
    }
    startEnginee(){
        console.log('start enginee to go hyderabad'+" "+ this.name);
    }
    stopEnginee(){
        console.log('stopped enginee in hyd after reaches'+ " "+this.name);
    }
}
class Pass extends Bus{
   tospeed(speed){
    console.log('top speed maintain the'+ " "+this.name+" "+speed);
   }
}
let P=new Pass();
P.setName('RTC BUS');
P.startEnginee();
P.stopEnginee();
P.tospeed(200);