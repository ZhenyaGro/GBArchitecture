import { ItemGenerator } from "./ItemGenerator";
import { Titanium } from "../Product/Titanium";
export class TitaniumGenerator extends ItemGenerator {
    createItem() {
        return new Titanium();
    }
}
