var Person = function(name, city){
    this.name = name;
    this.city = city;
}

var p = new Person("Priyanka Chopra", "Pune");
console.log("Details - Name : " + p.name + " City : " + p.city);

//Person.prototype.dob = new Date(1983,04,23);           /* Adding a new property on the fly */

Person.prototype.dob;// = new Date(1983,04,23);           /* Adding a new property on the fly */

p.dob = new Date(1970,04,23);  

Person.prototype.getDetails = function(){               /* Adding a new method on the fly */
    let now = new Date();
    console.log("Age of " + this.name + " is " + (now.getFullYear() - this.dob.getFullYear()));
}

p.getDetails();
