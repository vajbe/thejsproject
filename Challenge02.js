function Parent(){
    var hoisted;
    function hoisted(){
        return "Im function";
    }
    return hoisted;
}
console.log(Parent());