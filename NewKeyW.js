function myObj() {
    age:12;
    address: "Pune";
}

var a = new myObj();
var b=a;
//var b = new myObj();
console.log(Object.is(a,b));
console.log(a.__proto__);
console.log(b.__proto__);