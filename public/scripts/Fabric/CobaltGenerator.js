import { ItemGenerator } from "./ItemGenerator";
import { Cobalt } from "../Product/Cobalt";
export class CobaltGenerator extends ItemGenerator {
    createItem() {
        return new Cobalt();
    }
}
