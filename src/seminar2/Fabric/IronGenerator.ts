import { IGameItem } from "../Interface/IGameItem";
import { ItemGenerator } from "./ItemGenerator";
import { Iron } from "../Product/Iron";

export class IronGenerator extends ItemGenerator {
  public createItem(): IGameItem {
    return new Iron();
  }
}