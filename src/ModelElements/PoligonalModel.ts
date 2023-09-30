import { Texture } from "./Texture";
import { Poligon } from "./Poligon";

export class PoligonalModel {
  public poligons: Array<Poligon>;
  public textures: Array<Texture>;

  constructor(textures: Array<Texture>) {
    this.textures = textures;
    this.poligons = new Array<Poligon>();
  }
}