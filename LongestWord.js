function longestword(sen){
    var str = sen;

    var arr = str.split(" ");
    var  n = 0;
    
    arr.forEach(element => {
        element = element.replace(/[^a-zA-Z ]/g, "");
        if(element.length > n) { 
            n = element.length;
            sen = element;
        }
});

console.log(sen);
}

longestword("This ! is a string anujaa");