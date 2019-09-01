function add(a,b,callback){
    console.log("Sum of the a and b is " + (a+b));
    err = "This is an error";
    res = "This is response";
    req = "This is request";
    console.log(callback);
    callback(err,req,res);
}

add(5,6,(err) => {
    console.log(err + "\n" + req + "\n" + res);
});

add(5,6);