import { iModelChanger } from "./iModelChanger";
import { iModelChangeObserver } from "./iModelChangeObserver";
import { PoligonalModel } from "../ModelElements/PoligonalModel";
import { Scene } from "../ModelElements/Scene";
import { Flash } from "../ModelElements/Flash";
import { Camera } from "../ModelElements/Camera";

export class ModelStore implements iModelChanger {
  public models: Array<PoligonalModel>;
  public scenes: Array<Scene>;
  public flashes: Array<Flash>;
  public cameras: Array<Camera>;
  private changeObservers: iModelChangeObserver[];

  public constructor(changeObservers: iModelChangeObserver[]) {
    this.changeObservers = changeObservers;

    this.models = new Array();
    this.scenes = new Array();
    this.flashes = new Array();
    this.cameras = new Array();
  }

  public getScena(id: number) {
    for (const scene of this.scenes)
      if (scene.id === id)
        return scene;

    return null;
  }

  NotifyChange(sender: iModelChanger): void {
    throw new Error("Method not implemented.");
  }
}