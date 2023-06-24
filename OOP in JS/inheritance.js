class animal{
    constructor(legs){
        this.legs=legs;

    }
    showAge(){
        console.log(`This animal have ${this.legs}`);
    }
}
class dog extends animal{
    constructor(color,height,dogAge,legs){
        super(legs)
        this.color=color;
        this.height=height;
        this.dogAge=dogAge;
    }
    showDogDetail(){
        console.log(`This dog have ${this.height}height and ${this.color}color ${this.dogAge} years old`);
    }
    
}
class dogChild extends dog{
    constructor(childAge,childEyes,color,height,dogAge,legs){
        super(color,height,dogAge,legs);
        this.childAge=childAge;
        this.childEyes=childEyes;
    }
    showDogChildAge(){
        console.log(`This dog have ${this.height} height and ${this.color} color ${this.childEyes} eyes and ${this.childAge} years old.`);
    }
}

let animalObject=new animal;
