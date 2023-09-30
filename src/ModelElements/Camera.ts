import { Point3D } from "../Stuff/Point3D";
import { Angle3D } from "../Stuff/Angle3D";

export class Camera {
  public location: Point3D;
  public angle: Angle3D;

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