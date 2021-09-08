class Animal{
    constructor(name){
        this.name=name;
    }
    eats(){
        console.log(this.name + " "+'eats fish');
    }
}
class Aligator extends Animal{
    eats(){
        super.eats();
        console.log(this.name+" "+'eats food');
    }
}
let man=new Aligator('man');
man.eats();
