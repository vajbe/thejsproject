// function greet(person){
//     console.log(person);
//     if(person == {name : 'Amy'}){
//         return 'Hey Amy..!';
//     }
//     else
//         return 'Hey Arnold..!';
// }

// console.log(greet({name : 'Amy'}));


var x = {
    name: 'Amy'
}

z = x;

var y ={
    name: 'Amy'
}

console.log("Equality is " + (JSON.stringify(x) == JSON.stringify(y)));
