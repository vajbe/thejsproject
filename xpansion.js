var arr = [
    {
        HotelCode: "0001",
        HotelName: "Kamat",
        HotelPhone: "123344",
        HotelAddress:{
            Address1: "Anand Nagar",
            Address2: "Aundh",
            city: "Pune",
            State: "Maharashtra"
        }
    },
    {
        HotelCode: "0002",
        HotelName: "Swagat",
        HotelPhone: "4555",
        HotelAddress:{
            Address1: "Mayur Colony",
            Address2: "Bawdhan",
            city: "Satara",
            State: "Maharashtra"
        }
    },
    {
        HotelCode: "0003",
        HotelName: "Dawat",
        HotelPhone: "aadd",
        HotelAddress:{
            Address1: "Sakai Nagar",
            Address2: "Wakad",
            city: "Pune",
            State: "Maharashtra"
        }
    }
];


var searchHotel = function(arr,city){
var arrCopy = arr.slice();
//console.log(arrCopy);
return arrCopy.filter((item)=>{
    if((item.HotelAddress.city === city)){
        if((isNaN(item.HotelPhone))){
            item.HotelPhone = "NA";
        }
    }
});

}
 
console.log(searchHotel(arr,"Pune"));

//console.log(arr);