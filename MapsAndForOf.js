var john = {
    name: 'John',
    Age: 24,
    isActive: true,
}
var jane = {
    name: 'Jane',
    Age: 23,
    isActive: true
}
var sam = {
    name: 'Sammy',
    Age: 29,
    isActive: false
}

let users = new Map();

users.set('John',john);
users.set('Jane',jane);
users.set('Sam',sam);
console.log("**** Print the Users object details ****");
console.log(users);
console.log("\n**** Print the Users using for Of loop ****");
for(const key of users.keys()){
    console.log(users.get(key));
}
console.log("\n**** Print the Users using map entries ****");
for(const [key,value] of users.entries()){
    console.log(key + " = " + value.name);
}