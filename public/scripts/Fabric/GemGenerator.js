import { ItemGenerator } from "./ItemGenerator";
import { Gem } from "../Product/Gem";
export class GemGenerator extends ItemGenerator {
    createItem() {
        return new Gem();
    }
}
