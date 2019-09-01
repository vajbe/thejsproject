var addTwo = function(a){

    return a
    .split(' ')
    .map((item)=>{
        return item[0].toUpperCase() + item.substr(1);
    })
    .join(' ');
}

console.log(addTwo("this is the sample message"));

console.log(addTwo("This is a title"));

console.log(addTwo("capitalize every word"));

console.log(addTwo("I Like Pizza"));

console.log(addTwo("PIZZA PIZZA PIZZA"));