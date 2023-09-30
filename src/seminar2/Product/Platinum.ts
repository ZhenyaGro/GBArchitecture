import { ItemReward } from "./ItemReward";

export class Platinum extends ItemReward {
  open(): void {
    console.log('Вы получили платину');
  }
}