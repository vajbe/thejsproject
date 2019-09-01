var john = {
	age: 18,
  name: 'John',
  presentation: function(city){
  	console.log("Age of " + this.name + " is " + this.age + " years & lives in "  + city);
  }
}

//john.presentation();

var mike = {
	age: 21,
  name: 'Mike'
}

var emily = {
	age:16,
  name:'Emily',
  city: 'London'
}

//john.presentation.call(mike,'Amravati');

//john.presentation.apply(emily,['London']);
var emCall = john.presenation.bind(emily,'Nagpur');