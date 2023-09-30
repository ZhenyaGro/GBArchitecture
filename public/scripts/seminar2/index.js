import { GoldGenerator } from "./Fabric/GoldGenerator";
import { SilverGenerator } from "./Fabric/SilverGenerator";
import { GemGenerator } from "./Fabric/GemGenerator";
const generatorGold = new GoldGenerator();
generatorGold.openReward();
const arrayGenerator = new Array(new GoldGenerator(), new SilverGenerator(), new GemGenerator());
for (let i = 0; i < 10; i++) {
    const index = Math.random() * 2;
    arrayGenerator[index].openReward();
}
