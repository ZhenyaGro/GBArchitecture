import { ItemReward } from "./ItemReward";

export class Gold extends ItemReward {
  open(): void {
    console.log('Вы получили золото');
  }
}