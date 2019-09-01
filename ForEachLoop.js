const days = ["Mon","Tue","Wed","Thur","Fri","Sat"];


/* Callback function with anonymity*/
 days.forEach(function(day){
     console.log("Day is " + day);
});

/* Calling function by its name */
let printDay = function(day){
    console.log("Day is " + day);
}
days.forEach(printDay);