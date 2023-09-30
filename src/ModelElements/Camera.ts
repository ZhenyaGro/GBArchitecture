import { Point3D } from "../Stuff/Point3D";
import { Angle3D } from "../Stuff/Angle3D";

export class Camera {
  public location: Point3D;
  public angle: Angle3D;

  constructor(location: Point3D, angle: Angle3D) {
    this.location = location;
    this.angle = angle;
  }

  public rotate(angle: Angle3D): void { };
  public move(point: Point3D): void { };
}