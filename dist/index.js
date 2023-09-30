import { ModelStore } from "./InMemoryModel/ModelStore";
class Test {
    ApplyUpdateModel() {
        throw new Error("Method not implemented.");
    }
}
const changeObservers = new Array(new Test());
const modelStore = new ModelStore(changeObservers);
