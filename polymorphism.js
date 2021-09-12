class Man{
    constructor(name){
        this.name=name;
    }
    eats(){
        console.log(this.name + " "+'eats fish');
    }
}
class Restaruant extends Man{
    eats(){
        super.eats();
        console.log(this.name+" "+'eats chicken');
    }
}
let Prudhvi=new Restaruant('Prudhvi');
Prudhvi.eats();
