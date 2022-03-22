// 咖啡
abstract class Coffee {
    constructor(public name: string) {}
}

class AmericanoCoffee extends Coffee {}
class LatteCoffee extends Coffee {}
class CappuccinoCoffee extends Coffee {}

// 简单工厂模式 (静态工厂方法模式)
class CafeFactory {
    static getCoffeeInstance(name: String) {
        switch (name) {
            case 'Americano':
                return new AmericanoCoffee('美式咖啡');
            case 'Latte':
                return new LatteCoffee('拿铁咖啡');
            case 'Cappuccino':
                return new CappuccinoCoffee('卡布奇咖啡');
            default:
                throw new Error('没有');
        }
    }
}

export default CafeFactory;

// 优点
// 1. 工厂实现简单，只用一个静态方法就可以实现了。

// 缺点
// 1. 当添加实例时，需要修改工厂类的静态方法。
