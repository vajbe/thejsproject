// var num = 600851475143;
// var primeArray = [];
// var bigGuy = 1;
// for ( i=1; i <= num; i++){
//     if(isMultipleOf(i)){
//         if(num%i === 0){
//             bigGuy = i;
//             console.log("Big Guy is "  +bigGuy);
//         }
//     }
// }

// console.log(bigGuy);

// function isMultipleOf(i){
//     if(i===2)   return true;
//     if(i===3)   return true;
//     if(i===5)   return true;
//     if(i%2===0) return false;
//     if(i%3===0) return false;
//     if(i%5===0) return false;
//     return true;
// }



function largestPrimeFactor(n){
    var i=2;
    while (i<=n){
        if (n%i == 0){
            n/=i;    
        }else{
            i++;
        }
    }
    console.log(i);
    }
    var a = 600851475143;
    largestPrimeFactor(a)
