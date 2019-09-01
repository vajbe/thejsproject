let dog = { 
    name : 'dogo',
    sayName(){
        console.log(this.name);
    }
}

let sayName = dog.sayName;
sayName();