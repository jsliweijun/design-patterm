/**
 * 使用工厂方法，要导入具体工厂进行创建具体的产品实例
 */

import { AmericanoCoffeeFactory, LatteCoffeeFactory, CappuccinoCoffeeFactory } from './factory';

let mCoffee = new AmericanoCoffeeFactory().createCoffee();
let lCoffee = new LatteCoffeeFactory().createCoffee();
let cCoffee = new CappuccinoCoffeeFactory().createCoffee();
