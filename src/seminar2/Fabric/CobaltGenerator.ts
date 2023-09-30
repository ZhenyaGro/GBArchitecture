import { IGameItem } from "../Interface/IGameItem";
import { ItemGenerator } from "./ItemGenerator";
import { Cobalt } from "../Product/Cobalt";

export class CobaltGenerator extends ItemGenerator {
  public createItem(): IGameItem {
    return new Cobalt();
  }
}