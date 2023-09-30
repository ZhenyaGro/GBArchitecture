import { ItemReward } from "./ItemReward";

export class Silver extends ItemReward {
  open(): void {
    console.log('Вы получили серебро');
  }
}