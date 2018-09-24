const add=(a,b)=>{
   //console.log(arguments);
   return a+b;
}
console.log(add(55,3));

//this key word
const user={
    name:'sasi',
    cities:['SanDiego','Dallas','Boise'],
    printPlaceLived(){
        return this.cities.map((city)=>this.name+' has lived in '+city);    
    }
};
console.log(user.printPlaceLived());

const multiplier={
    numbers:[2,10,19,23,4],
    mutiplyby:10,
    mutiply(){
        return this.numbers.map((number)=>number*(this.mutiplyby));
    }
};

console.log(multiplier.mutiply());
