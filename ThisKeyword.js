// var john = {
//     name: "John",
//     city: "Pune",
//     calcAge : function(){
//         console.log("Age is 28 ");
//         console.log("The value of this is " + this);
//     }
// }

// john.calcAge();

function bike() {
    console.log(this.name);
  }
  
  var name = "Ninja";
  console.log(name);
  var obj = { name: "Pulsar" }
  
  bike();           // "Ninja"
  bike.call(obj);   // "Pulsar"