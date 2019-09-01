/*Have the function CheckNums(num1,num2) take both parameters being passed and return the string 
true if num2 is greater than num1, otherwise return the string false. 
If the parameter values are equal to each other then return the string -1.  */

function CheckNums(var1,var2){
    if(var2 > var1) return true;
    else if(var2 < var1) return false;
    else if(var2 === var1) return -1;
}

console.log(CheckNums(13,13));