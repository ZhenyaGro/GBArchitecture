import { GoldGenerator } from "./Fabric/GoldGenerator";
import { SilverGenerator } from "./Fabric/SilverGenerator";
import { GemGenerator } from "./Fabric/GemGenerator";
import { ItemGenerator } from "./Fabric/ItemGenerator";

const generatorGold: ItemGenerator = new GoldGenerator();
generatorGold.openReward();

const arrayGenerator: Array<ItemGenerator> = new Array<ItemGenerator>(
  new GoldGenerator(),
  new SilverGenerator(),
  new GemGenerator()
);

for (let i = 0; i < 10; i++) {
  const index = Math.random() * 2;
  arrayGenerator[index].openReward();
}