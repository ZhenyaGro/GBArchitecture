import { ItemGenerator } from "./ItemGenerator";
import { Silver } from "../Product/Silver";
export class SilverGenerator extends ItemGenerator {
    createItem() {
        return new Silver();
    }
}
