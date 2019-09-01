var Car = function(color){
    this.color = color;
}

Car.prototype.getColor = function(){
    return this.color;
}

var ToyotaCar = function(color,size){
    this.color = color;
    this.size = size;
}

ToyotaCar.getSize = function(){
    return this.getColor() + this.size;
}

ToyotaCar.prototype = Object.create(Car.prototype);

var toyoCar = new ToyotaCar("Violet",12);

console.log(toyoCar.getSize());
console.log(toyoCar instanceof Car);