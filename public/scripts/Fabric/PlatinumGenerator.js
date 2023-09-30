import { ItemGenerator } from "./ItemGenerator";
import { Platinum } from "../Product/Platinum";
export class PlatinumGenerator extends ItemGenerator {
    createItem() {
        return new Platinum();
    }
}
