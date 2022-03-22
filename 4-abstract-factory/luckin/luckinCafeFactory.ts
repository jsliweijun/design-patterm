import { CafeFactory } from '../cafeFactory';
import { AmericanoCoffee, LatteCoffee, CappuccinoCoffee } from '../coffee';
// import { LuckinAmericanoCoffee, LuckinCappuccinoCoffee, LuckinLatteCoffee } from './LuckinCoffee';

// 在实现抽象工厂时，先定义自己要的具体产品实现类

class LuckinAmericanoCoffee extends AmericanoCoffee {}
class LuckinLatteCoffee extends LatteCoffee {}
class LuckinCappuccinoCoffee extends CappuccinoCoffee {}

export class LuckinCafeFactory extends CafeFactory {
    createAmericanoCoffee(): AmericanoCoffee {
        return new LuckinAmericanoCoffee();
    }
    createLatteCoffee(): LatteCoffee {
        return new LuckinCappuccinoCoffee();
    }
    createCappuccinoCoffee(): CappuccinoCoffee {
        return new LuckinLatteCoffee();
    }
}
