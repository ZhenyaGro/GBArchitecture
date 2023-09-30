import { IGameItem } from "../Interface/IGameItem";

export abstract class ItemReward implements IGameItem {
  open(): void {
    throw new Error("Method not implemented.");
  }
}