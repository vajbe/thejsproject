function multiple(){
var n = 10;
var sum = 0;

    for(var i=2;i<n;i++){
            if(i%3===0 ||i%5===0 ) { 
                sum = sum + i;
            }
    }
    console.log(sum);
}

multiple();