var promise = new Promise(function(resolve,reject){
    var wait = true;
    if(wait){                                    /* Case to handle the resolution of the promise */
        setTimeout(function(){
            resolve(new Date());
            },2000);        
    }
    else{                                       /* Case to handle the rejection of the promise */
        reject("Promise has been rejected");
    }
});
promise.then((res)=>{
    console.log("Promise has been resolved to \n" + res);
}).catch((msg)=>{
    console.log("Error message is " + msg);
});