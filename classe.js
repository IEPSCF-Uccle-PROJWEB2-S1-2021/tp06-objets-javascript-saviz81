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
let triangle=new Shape("trianglr",3,3);
console.log(triangle.calcPerimeter());
let square=new Shape("square",4,5);
console.log(calcPerimeter());
