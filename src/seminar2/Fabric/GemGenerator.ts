import { IGameItem } from "../Interface/IGameItem";
import { ItemGenerator } from "./ItemGenerator";
import { Gem } from "../Product/Gem";

export class GemGenerator extends ItemGenerator {
  public createItem(): IGameItem {
    return new Gem();
  }
}