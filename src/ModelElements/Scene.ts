import { PoligonalModel } from "./PoligonalModel";
import { Flash } from "./Flash";
import { Camera } from "./Camera";

export class Scene {
  public id: number;
  public models: Array<PoligonalModel>;
  public flashes: Array<Flash>;
  public cameras: Array<Camera>;

  constructor(id: number, models: Array<PoligonalModel>, flashes: Array<Flash>, cameras: Array<Camera>) {
    if (models.length == 0)
      throw new Error('Должна быть хотябы одна модель');
    if (cameras.length == 0)
      throw new Error('Должна быть хотябы одна камера');

    this.id = id;
    this.models = models;
    this.flashes = flashes;
    this.cameras = cameras;
  }

  public method1<T>(flash: T): T {
    return flash;
  }

  public method2<T, K>(model: T, flash: K): T {
    return model;
  }
}
