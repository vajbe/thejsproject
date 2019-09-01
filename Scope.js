let val = "ABC";

if(true){
    let val = "EFG";

    if(true){
        let val = "XYZ";
        console.log("Val : "+val);
        value = "This is value string ";    // As it's directly define we can also use it outside. 
                                            //This might lead to the memory leakage
    }
    console.log("Val : "+val);
}
console.log("Val : "+val);
console.log("Value : " + value);