import { Poligon } from "./Poligon";
import { Point3D } from "../Stuff/Point3D";
export class PoligonalModel {
    constructor(textures) {
        this.textures = textures;
        this.poligons = new Array();
        // В соответствии со схемой добавляется один полигон
        this.poligons.push(new Poligon(new Point3D()));
    }
}
