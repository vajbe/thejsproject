// var passed = 3;
//  var add = function(){
//      console.log("Value of passed is " + passed);
//  }

//  console.dir(add);

var fun = function(){
    const arr = [10, 12, 15, 21];
    
    for (var i = 0; i < arr.length; i++) {
    console.log("i is " + i);
     setTimeout(function() {
       console.log('Index: ' + i + ', element: ' + arr[i]);
     }, 3000);
     //console.log("Value is " + arr[i]);
    }
    var s = "hello";
}

var f = new fun();
console.log(f.prototype);


