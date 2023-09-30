import { IGameItem } from "../Interface/IGameItem";
import { ItemGenerator } from "./ItemGenerator";
import { Coper } from "../Product/Coper";

export class CoperGenerator extends ItemGenerator {
  public createItem(): IGameItem {
    return new Coper();
  }
}