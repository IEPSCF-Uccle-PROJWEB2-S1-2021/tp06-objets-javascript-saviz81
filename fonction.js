function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}
Shape.prototype.calcPerimeter= function()
{
return this.sides*this.sideLength;
}
let square=new Shape("square",4,5);
console.log(square.calcPerimeter());
let triangle=new Shape("triangle",3,3);
console.log(triangle.calcPerimeter());
