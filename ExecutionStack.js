var a = "Hello ";
first();
function first(){
    var b = "Hi ! ";
    second();
    function second(){
        var c = "Hey ! ";
        third();
    }
}

function third(){
    var d ="John ";
    //console(b+c); Thorws an error due to different scope
    console.log(a+d);
    console.log(this);
}