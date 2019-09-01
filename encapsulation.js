var firstClass = function(param){
    this.param = param;
    var msg = "This is the default MSG"; /* <---- Private members */
    this.printFn = function(){
        console.log("This is the PARAM value: "+this.param);
        console.log("Let me print the MSG value: " + msg);
    }    
}
var f = new firstClass("Passing a parameter");
f.printFn();
f.msg = "This has been changed from outside";
f.printFn();
f.param = "MSG value from outside";
f.printFn();