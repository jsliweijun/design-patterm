// import { Singleton } from './Singleton';

// let s = Singleton.getInstance();
// let s1 = Singleton.getInstance();
// console.log('s === s1', s === s1);

// es5方式实现，给构造函数添加 方法。
// import { Singleton } from './Singleton-es5';

// let s1 = Singleton.getInstance();
// let s2 = Singleton.getInstance();
// console.log('s1 === s2', s1 === s2);

// es5实现，使用执行函数返回闭包函数，闭包的this 指向外部函数的变量
import { Singleton } from './Singleton-es5-2';

let s3 = new (Singleton as any)();
let s4 = new (Singleton as any)();
console.log('s3 === s4', s3 === s4);
