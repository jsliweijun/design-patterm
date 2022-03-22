// import { AmericanoCoffee, LatteCoffee, CappuccinoCoffee } from './coffee';

// 一组产品： 美式咖啡，拿铁咖啡，卡奇诺咖啡。  定义产品的抽象类，用于约束抽象工厂中方法的返回值。
export abstract class AmericanoCoffee {}
export abstract class LatteCoffee {}
export abstract class CappuccinoCoffee {}

// 抽象工厂， 抽象工厂可以定义框架多个产品的方法。
export abstract class CafeFactory {
    abstract createAmericanoCoffee(): AmericanoCoffee;
    abstract createLatteCoffee(): LatteCoffee;
    abstract createCappuccinoCoffee(): CappuccinoCoffee;
}

// 抽象工厂，能提供一组产品的创建。
