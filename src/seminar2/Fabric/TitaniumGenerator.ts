import { IGameItem } from "../Interface/IGameItem";
import { ItemGenerator } from "./ItemGenerator";
import { Titanium } from "../Product/Titanium";

export class TitaniumGenerator extends ItemGenerator {
  public createItem(): IGameItem {
    return new Titanium();
  }
}