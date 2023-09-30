import { ItemGenerator } from "./ItemGenerator";
import { Gold } from "../Product/Gold";
export class GoldGenerator extends ItemGenerator {
    createItem() {
        return new Gold();
    }
}
