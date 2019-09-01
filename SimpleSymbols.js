/*
Challenge
Have the function SimpleSymbols(str) take the str parameter being passed and determine if it 
is an acceptable sequence by either returning the string true or false. The str parameter will be composed of 
+ and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter
 must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will 
 have at least one letter. 
*/

function SimpleSymbols(){
    var str="+d+=3=+s+";
    var st;
    var first=false;
    st = str;
    
    for(var i=0;i<str.length;i++){
        var s = str.slice(i,i+3);
        
        //if(s.charAt(0)=="+" && s.charAt(2)=="+" && s.charAt(1).match(/[^a-zA-Z ]/g))
            console.log(s);
    }
}

SimpleSymbols();