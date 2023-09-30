import { ItemReward } from "./ItemReward";

export class Cobalt extends ItemReward {
  open(): void {
    console.log('Вы получили кобальт');
  }
}