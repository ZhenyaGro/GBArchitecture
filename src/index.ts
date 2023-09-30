import { ModelStore } from "./InMemoryModel/ModelStore";
import { IModelChangeObserver } from "./InMemoryModel/iModelChangeObserver";

class Test implements IModelChangeObserver {
  ApplyUpdateModel(): void {
    throw new Error("Method not implemented.");
  }
}
const changeObservers = new Array(new Test());
const modelStore = new ModelStore(changeObservers);