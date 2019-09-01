var arr = [1,1,1,2,2,0];
var inputQuery = 1;
var counter = 0;
var inputQuery = prompt("Enter the details ");
for(var i = 0; i< arr.length;i++){
    if(arr[i] === inputQuery){
        counter++;
    }
}
console.log("Number of occurrences of " + inputQuery + ", is " + counter);