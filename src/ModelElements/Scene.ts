import { PoligonalModel } from "./PoligonalModel";
import { Flash } from "./Flash";
import { Camera } from "./Camera";

export class Scene {
  public id: number;
  public models: Array<PoligonalModel>;
  public flashes: Array<Flash>;
  public cameras: Array<Camera>;

  constructor(id: number, models: Array<PoligonalModel>, flashes: Array<Flash>, cameras: Array<Camera>) {
    this.id = id;
    this.models = models;
    this.flashes = flashes;
    this.cameras = cameras;
  }

  public method1<T>(parameter: T): T {
    return parameter;
  }

  public method2<T, K>(parameter1: T, parameter2: K): K {
    return parameter2;
  }
}
