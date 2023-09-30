export class Scene {
    constructor(id, models, flashes, cameras) {
        if (models.length == 0)
            throw new Error('Должна быть хотябы одна модель');
        if (cameras.length == 0)
            throw new Error('Должна быть хотябы одна камера');
        this.id = id;
        this.models = models;
        this.flashes = flashes;
        this.cameras = cameras;
    }
    method1(flash) {
        return flash;
    }
    method2(model, flash) {
        return model;
    }
}
