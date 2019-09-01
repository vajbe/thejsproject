let heroes = ["IronMan","Spider Man","Captain Marvel"]

console.log(heroes[0]);
console.log(heroes);

console.log(`We have ${heroes.length} heroes in an array`);

console.log("Shift returns :  " + heroes.shift() + " : Post shift operation : "  +heroes); 
/* Removes the first element from the array */

console.log("Unshift returns :  " + heroes.unshift("Cpt. America") + " : Post unshift operation : "  +heroes); 
/* Adds an element to the start of the array */

console.log("Pop : " + heroes.pop() + " Post pop : " + heroes);
/* Removes and returns the last element of the array */

console.log("Push : " + heroes.push("Doctor Strange") + " Post push : " + heroes);
/* Inserts an element  and returns the count of the array */

console.log("Splice : " + heroes.splice(1,1,"Men In Black") + " Post Splice: "+ heroes);
/* Insrets an element at the specified location and removes the element present if any */