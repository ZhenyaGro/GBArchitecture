import { IGameItem } from "../Interface/IGameItem";

export abstract class ItemGenerator {
  public abstract createItem(): IGameItem;
  public openReward(): void {
    this.createItem().open();
  };
}