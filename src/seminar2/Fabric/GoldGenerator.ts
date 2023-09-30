import { IGameItem } from "../Interface/IGameItem";
import { ItemGenerator } from "./ItemGenerator";
import { Gold } from "../Product/Gold";

export class GoldGenerator extends ItemGenerator {
  public createItem(): IGameItem {
    return new Gold();
  }
}