console.log(foo());
function foo(){
    function bar(){
        return 3;
    };
    return bar(1,2,3,34,1,2,3,45,5,6);

    function bar(a,b,c,d){
        console.log("Number of arguments are " + arguments.length);
        return 8;
    }
}
