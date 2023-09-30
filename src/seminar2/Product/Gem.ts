import { ItemReward } from "./ItemReward";

export class Gem extends ItemReward {
  open(): void {
    console.log('Вы получили алмаз');
  }
}