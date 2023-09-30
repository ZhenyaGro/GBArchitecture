import { IGameItem } from "../Interface/IGameItem";
import { ItemGenerator } from "./ItemGenerator";
import { Silver } from "../Product/Silver";

export class SilverGenerator extends ItemGenerator {
  public createItem(): IGameItem {
    return new Silver();
  }
}