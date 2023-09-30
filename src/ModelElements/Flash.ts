import { Point3D } from "../Stuff/Point3D";
import { Angle3D } from "../Stuff/Angle3D";
import { Color } from "../Stuff/Color";

/**
 * Класс источников света
 */
export class Flash {
  public location: Point3D;
  public angle: Angle3D;
  public color: Color;
  public power: number;

  constructor(location: Point3D, angle: Angle3D, color: Color, power: number) {
    this.location = location;
    this.angle = angle;
    this.color = color;
    this.power = power;
  }

  /**
   * Поворот камеры на угол
   * 
   * @param angle 
   */
  public rotate(angle: Angle3D): void { };

  /**
   * Перемещение камеры к точке
   * 
   * @param point 
   */
  public move(point: Point3D): void { };
}