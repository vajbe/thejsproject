// var x = 20;
// var fun = function(){
//     console.log(x);
//     var x = 31;
//     console.log(x);
// };
// fun();
// console.log(x);

var x = 20;
// fun();
function fun(){
    console.log(x);         //Not defined yet
    var x = 31;             //Variable x is redeclared and will have new copy
    console.log(x);
};
fun();