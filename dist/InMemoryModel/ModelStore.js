import { PoligonalModel } from "../ModelElements/PoligonalModel";
import { Scene } from "../ModelElements/Scene";
import { Flash } from "../ModelElements/Flash";
import { Camera } from "../ModelElements/Camera";
export class ModelStore {
    constructor(changeObservers) {
        this.changeObservers = changeObservers;
        const textures = new Array();
        this.models = new Array(new PoligonalModel(textures));
        this.flashes = new Array(new Flash());
        this.cameras = new Array(new Camera());
        this.scenes = new Array(new Scene(0, this.models, this.flashes, this.cameras));
    }
    getScena(id) {
        for (const scene of this.scenes)
            if (scene.id === id)
                return scene;
        return null;
    }
    NotifyChange(sender) {
        throw new Error("Method not implemented.");
    }
}
