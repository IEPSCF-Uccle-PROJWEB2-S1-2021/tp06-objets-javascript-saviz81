class Shape{
  constructor(name,sides,sideLength){
    this.name=name;
    this.sides=sides;
   this.sideLength = sideLength;
  }
  calcPerimeter(){
    return this.sides*this.sideLength;
  }
}
class Square extends Shape{
  constructor(sideLength){
    super(sideLength);
    this.name = "square";
    this.sides = 4;
    this.sideLength = sideLength;
  }
   calcArea(){
    return this.sideLength*this.sideLength;
  }
}
let square = new Square(5);
console.log(square.calcPerimeter());
console.log(square.calcArea());
