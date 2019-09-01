var employeeID = '1234abe';
(function(){
    //var employeeID = '1234';
    console.log(employeeID);
    var employeeID = '1234';
    (function(){
        var employeeID = 'abc1234';
        console.log(employeeID);
    })();
})();