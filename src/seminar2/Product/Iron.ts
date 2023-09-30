import { ItemReward } from "./ItemReward";

export class Iron extends ItemReward {
  open(): void {
    console.log('Вы получили железо');
  }
}