// 客户端使用

import CafeFactory from './cafeFactory';

// 不需要进行 实例化，直接调用 静态工厂方法就可以了。
// 返回的是具体实例。
let americanoCoffee = CafeFactory.getCoffeeInstance('Americano');
console.log(americanoCoffee);

let latteCoffee = CafeFactory.getCoffeeInstance('Latte');
console.log(latteCoffee);

let CappuccinoCoffee = CafeFactory.getCoffeeInstance('Cappuccino');
console.log(CappuccinoCoffee);
