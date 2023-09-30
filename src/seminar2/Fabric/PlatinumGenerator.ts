import { IGameItem } from "../Interface/IGameItem";
import { ItemGenerator } from "./ItemGenerator";
import { Platinum } from "../Product/Platinum";

export class PlatinumGenerator extends ItemGenerator {
  public createItem(): IGameItem {
    return new Platinum();
  }
}