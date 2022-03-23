# 原型模式

用于快速创建对象，通过已有的对象克隆出一份对象。

```javascript
function sum(a, b) {
    return a + b;
}

// 上面写函数是语法糖， 真正底层创建函数是使用了下面 new Function 创建一个对象。
let sum = new Function('a', 'b', 'return a+b');
// 所以函数也是一个对象， 对象有一个 隐式原型属性 __proto__  它指向 Function.prototype ={call:()=>{}, bind:()=>{}}

console.log(sum(1, 2));
```

原型
扩展方便。
重写继承方法。

prototype

实现深拷贝，浅拷贝。
