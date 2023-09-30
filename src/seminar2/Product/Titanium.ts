import { ItemReward } from "./ItemReward";

export class Titanium extends ItemReward {
  open(): void {
    console.log('Вы получили титан');
  }
}