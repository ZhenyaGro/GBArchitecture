import { ItemGenerator } from "./ItemGenerator";
import { Iron } from "../Product/Iron";
export class IronGenerator extends ItemGenerator {
    createItem() {
        return new Iron();
    }
}
