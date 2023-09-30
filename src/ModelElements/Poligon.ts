import { Point3D } from "../Stuff/Point3D";

export class Poligon {
  public points = new Array<Point3D>();

  constructor(point: Point3D) {
    this.points.push(point);
  }
}