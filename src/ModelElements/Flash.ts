import { Point3D } from "../Stuff/Point3D";
import { Angle3D } from "../Stuff/Angle3D";
import { Color } from "../Stuff/Color";
import { Scene } from "./Scene";

export class Flash {
  public location: Point3D;
  public angle: Angle3D;
  public color: Color;
  public power: number;
  public scenes: Array<Scene>;

  constructor(location: Point3D, angle: Angle3D, color: Color, power: number, scenes: Array<Scene>) {
    this.location = location;
    this.angle = angle;
    this.color = color;
    this.power = power;
    this.scenes = scenes;
  }

  public rotate(angle: Angle3D): void { };
  public move(point: Point3D): void { };
}