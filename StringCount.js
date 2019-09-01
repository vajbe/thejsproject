function printValues(){
    let str = "AAAABBCDDA";
    let prev=undefined;
    let counter = 0;
    var res="";
    for(let i=0;i<=str.length;i++){
        if(prev===undefined && counter ===0){
            prev=str[i];
            counter=1;
        }
        else if(prev === str[i]){
            counter++;
        }
        else{
            res = res + prev + counter + " ";
            prev = str[i];
            counter=1;
            //console.log("Precessing " + prev);
        }
    }
    console.log(res);
}
printValues();