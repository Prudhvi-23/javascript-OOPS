function Car(color,cost,milage){
    this.color=color;
    this.cost=cost;
    this.milage=milage;
    let priceIcreaseNextYear=50000

   this.getCarDetails=function(){
    console.log("color of the car is :"+this.color);
    console.log("cost of the car is:"+this.cost);
    console.log("milage of the car is:"+this.milage);
 }
 this.getNextYearCarPrice=function(){
  console.log(this.cost+priceIcreaseNextYear);
}

   
}
let SwiftVDi=new Car('Red',800000,22.17);
SwiftVDi.getCarDetails();
SwiftVDi.priceIcreaseNextYear;
SwiftVDi.getNextYearCarPrice();


