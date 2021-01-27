class Ninja{
    constructor(name,health,speed=3,strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }
    sayName(){
        console.log(`${this.name}`);
    }
    showStats(){
        console.log(`${this.name} \nStrenghth: ${this.strength} \nSpeed: ${this.speed} \nHealth: ${this.health} ` );
    }

    drinkSake(){
        this.health+=10;
    }

}
const ninja1 = new Ninja("newNinja",100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();