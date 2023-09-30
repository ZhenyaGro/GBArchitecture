import { ItemReward } from "./ItemReward";
export class Gold extends ItemReward {
    open() {
        console.log('Вы получили золото');
    }
}
