export class ModelStore {
    constructor( /*changeObservers: iModelChangeObserver[]*/) {
        // this.changeObservers = changeObservers;
        this.models = new Array();
        this.scenes = new Array();
        this.flashes = new Array();
        this.cameras = new Array();
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
