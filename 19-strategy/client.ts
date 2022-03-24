// import { Customer } from './discount';

// let c1 = new Customer('normal');
// console.log(c1.pay(100));
// let c2 = new Customer('member');
// console.log(c2.pay(100));
// let c3 = new Customer('vip');
// console.log(c3.pay(100));

// 使用策略模式优化 1
// import { Customer, Normal, Member, Vip } from './discount-strategy';

// let c1 = new Customer(new Normal());
// console.log(c1.pay(100));
// let c2 = new Customer(new Member());
// console.log(c2.pay(100));
// let c3 = new Customer(new Vip());
// console.log(c3.pay(100));

// 使用策略模式优化 2
import { Customer } from './discount-strategy-map';

let c1 = new Customer();
console.log(c1.pay(100, 'normal'));
let c2 = new Customer();
console.log(c2.pay(100, 'member'));
let c3 = new Customer();
console.log(c2.pay(100, 'vip'));
