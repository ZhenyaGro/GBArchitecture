import { ItemGenerator } from "./ItemGenerator";
import { Coper } from "../Product/Coper";
export class CoperGenerator extends ItemGenerator {
    createItem() {
        return new Coper();
    }
}
