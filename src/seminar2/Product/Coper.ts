import { ItemReward } from "./ItemReward";

export class Coper extends ItemReward {
  open(): void {
    console.log('Вы получили медь');
  }
}