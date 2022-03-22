/**
 * 工厂方法
 *  工厂创建出具体工厂，具体工厂创建具体产品。
 *  工厂类只进行定义抽象方法，具体的创建实例，通过具体的工厂子类来做。
 *
 */

import Coffee from './entity/coffee';
import AmericanoCoffee from './entity/americanoCoffee';
import CappuccinoCoffee from './entity/cappuccinoCoffee';
import LatteCoffee from './entity/latteCoffee';

abstract class CafeFactory {
    abstract createCoffee(): Coffee;
}

export class AmericanoCoffeeFactory extends CafeFactory {
    createCoffee(): Coffee {
        return new AmericanoCoffee('美式咖啡');
    }
}

export class CappuccinoCoffeeFactory extends CafeFactory {
    createCoffee(): Coffee {
        return new CappuccinoCoffee('卡奇诺咖啡');
    }
}

export class LatteCoffeeFactory extends CafeFactory {
    createCoffee(): Coffee {
        return new LatteCoffee('拉铁咖啡');
    }
}
