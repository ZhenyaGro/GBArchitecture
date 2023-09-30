import { Texture } from "./Texture";
import { Poligon } from "./Poligon";
import { Point3D } from "../Stuff/Point3D";

export class PoligonalModel {
  public poligons: Array<Poligon>;
  public textures: Array<Texture>;

  constructor(textures: Array<Texture>) {
    this.textures = textures;
    this.poligons = new Array<Poligon>();

    // В соответствии со схемой добавляется один полигон
    this.poligons.push(new Poligon(new Point3D()));
  }
}