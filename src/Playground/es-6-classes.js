class Person{
    constructor(name='Anonynous',age=0){
        this.name=name;
        this.age=age;
    }

    getGreeting(){
        return `Hi I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) of age`;
    }

}

class Student extends Person{
    constructor(name,age,major){
        super(name, age);
        this.major=major;
    }
    hasMajor(){
      return !!this.major;
    }
    getDescription(){
        let Description=super.getDescription();
        if(this.hasMajor()){
         Description+=` their major is ${this.major}.`;
        }
        return Description;
    }
}

class Traveler extends Person{
 constructor(name,age,homeLocation){
     super(name);
     this.homeLocation=homeLocation;
 }

 hasPlace(){
     return !!this.homeLocation;
     }

 greeting(){
     let greeting=super.getGreeting();
     if(this.hasPlace()){
       greeting+=`. I'm visiting from ${this.homeLocation}`;
     }
     return greeting;
 }
}

const me = new Traveler('Sasidhar',27,'Texas');
console.log(me.greeting());


const other=new Traveler(undefined,undefined,'Nowhere');
console.log(other.greeting());


