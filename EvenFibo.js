function fibo(){
    var i = 1;
    var prev=0,val=0;
    var sum = 0;
    for(i=1;i<4000000;){
        val = prev + i;
        prev=i;
        i = val;
        if(val%2 === 0)
            sum = sum + val;
    
    }
    console.log("Sum is " + sum);
}

fibo();