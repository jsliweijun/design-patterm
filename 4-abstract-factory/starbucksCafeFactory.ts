import { CafeFactory } from './cafeFactory';
import { AmericanoCoffee, LatteCoffee, CappuccinoCoffee } from './coffee';
// import { StarBucksAmericanoCoffee, StarBucksCappuccinoCoffee, StarBucksLatteCoffee } from './starBucksCoffee';

// 在实现抽象工厂时，先定义自己要的具体产品实现类

class StarBucksAmericanoCoffee extends AmericanoCoffee {}
class StarBucksLatteCoffee extends LatteCoffee {}
class StarBucksCappuccinoCoffee extends CappuccinoCoffee {}

export class StarBucksCafeFactory extends CafeFactory {
    createAmericanoCoffee(): AmericanoCoffee {
        return new StarBucksAmericanoCoffee();
    }
    createLatteCoffee(): LatteCoffee {
        return new StarBucksCappuccinoCoffee();
    }
    createCappuccinoCoffee(): CappuccinoCoffee {
        return new StarBucksLatteCoffee();
    }
}
