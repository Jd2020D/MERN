class Card {
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}
class Unit extends Card{
    constructor(name,cost,power,resilience){
        super(name,cost);
        this.power=power;
        this.resilience=resilience;
    }
    attack(target){
        target.resilience-=this.power;
    }
    info(){
        console.log(`Name: ${this.name} , Power: ${this.power} , Resilience: ${this.resilience}`);
    }
}
class Effect extends Card{
    constructor(name,cost,stat,magnitude){
        super(name,cost);
        this.stat=stat;
        this.magnitude=magnitude;
    }
    text(){
        if(this.magnitude<0) 
            return `reduce target's ${this.stat} by ${this.magnitude/-1}`;
        else 
            return `increase target's ${this.stat} by ${this.magnitude}`;

    }
    play(target){
        switch(this.stat){
            case "power":
                target.power+=this.magnitude;
                break;
            case "resilience":
                target.resilience+=this.magnitude;
        }
        console.log(this.text().replace("target's",target.name));
    }
}
const RedBelt = new Unit("Red Belt Ninja",3,3,4);
const e1=new Effect("Hard Algorithm",2,"resilience",3);
RedBelt.info();
e1.play(RedBelt);
RedBelt.info();
const BlackBelt = new Unit("Black Belt Ninja",4,5,4);
const e2=new Effect("Unhandled Promise Rejection",1,"resilience",-2);
e2.play(RedBelt);
RedBelt.info();
const e3=new Effect("Pair Programming",3,"power",2);
e3.play(RedBelt);
RedBelt.info();
BlackBelt.info();
RedBelt.attack(BlackBelt);
console.log("red attack black")
RedBelt.info();
BlackBelt.info();