import { ItemReward } from "./ItemReward";
export class Platinum extends ItemReward {
    open() {
        console.log('Вы получили платину');
    }
}
