import { IModelChanger } from "./iModelChanger";
import { IModelChangeObserver } from "./iModelChangeObserver";
import { PoligonalModel } from "../ModelElements/PoligonalModel";
import { Scene } from "../ModelElements/Scene";
import { Flash } from "../ModelElements/Flash";
import { Camera } from "../ModelElements/Camera";

export class ModelStore implements IModelChanger {
  public models: Array<PoligonalModel>;
  public scenes: Array<Scene>;
  public flashes: Array<Flash>;
  public cameras: Array<Camera>;
  private changeObservers: IModelChangeObserver[];

  public constructor(changeObservers: IModelChangeObserver[]) {
    this.changeObservers = changeObservers;

    this.models = new Array<PoligonalModel>();
    this.scenes = new Array<Scene>();
    this.flashes = new Array<Flash>();
    this.cameras = new Array<Camera>();
  }

  public getScena(id: number) {
    for (const scene of this.scenes)
      if (scene.id === id)
        return scene;

    return null;
  }

  NotifyChange(sender: IModelChanger): void {
    throw new Error("Method not implemented.");
  }
}