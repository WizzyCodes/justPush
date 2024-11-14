class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  static distance(p1: Point, p2: Point) {
    let dx = p1.x - p2.x;
    let dy = p1.y - p2.y;

    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  }
}

let PointA = new Point(3, 7);
let PointB = new Point(4, 2);

console.log(Point.distance(PointA, PointB));
