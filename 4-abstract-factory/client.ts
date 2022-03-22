import { LuckinCafeFactory } from './luckin/luckinCafeFactory';
import { StarBucksCafeFactory } from './starbucksCafeFactory';

// 使用, 当想创建一组产品时
let luckinCafeFactory = new LuckinCafeFactory();
console.log(luckinCafeFactory.createAmericanoCoffee());
console.log(luckinCafeFactory.createCappuccinoCoffee());
console.log(luckinCafeFactory.createLatteCoffee());

let starBucksCafeFactory = new StarBucksCafeFactory();
