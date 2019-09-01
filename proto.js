var fn = function(){
    this.str = "Hello World..";
}

var f = new fn();

fn.prototype.s = "This is prototypes string";

console.dir("This is coming from "+ f.s);