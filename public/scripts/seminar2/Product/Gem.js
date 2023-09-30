import { ItemReward } from "./ItemReward";
export class Gem extends ItemReward {
    open() {
        console.log('Вы получили алмаз');
    }
}
