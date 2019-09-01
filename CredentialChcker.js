let user = "Aexample@gmail.com"
let password = "1234"

let checkEmail = function(myString){
    if(myString.includes('@') && myString.includes('.com')){
        return true;
    }
    return false;
}

console.log("Email validation result " + checkEmail(user));
console.log('example'.match('a-z'));