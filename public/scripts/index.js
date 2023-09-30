import { GoldGenerator } from "./Fabric/GoldGenerator";
import { SilverGenerator } from "./Fabric/SilverGenerator";
import { GemGenerator } from "./Fabric/GemGenerator";
import { CobaltGenerator } from "./Fabric/CobaltGenerator";
import { CoperGenerator } from "./Fabric/CoperGenerator";
import { IronGenerator } from "./Fabric/IronGenerator";
import { PlatinumGenerator } from "./Fabric/PlatinumGenerator";
import { TitaniumGenerator } from "./Fabric/TitaniumGenerator";
const generatorGold = new GoldGenerator();
generatorGold.openReward();
const arrayGenerator = new Array(new GoldGenerator(), new SilverGenerator(), new GemGenerator(), new CobaltGenerator(), new CoperGenerator(), new IronGenerator(), new PlatinumGenerator(), new TitaniumGenerator());
for (let i = 0; i < 10; i++) {
    const index = Math.random() * 7;
    arrayGenerator[index].openReward();
}
