function myArr(){
    var arr = [10,5,8,4,2];
    var arr1 = arr.map(x => x <=8);//.filter(x=>x<80);
    console.log(arr1);
}

myArr();