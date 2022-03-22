# 使用场景

```javascript
function createElement(type: any, config: any) {
    return { type, props: config };
}

// 创建工厂, 返回的时具体工厂
function createFactory(type: string) {
    const factory = createElement.bind(null, type);
    return factory;
}

// client 使用
let factory = createFactory('h1');
let element = factory({ id: 'h1', className: 'title' });
console.log(element);
```
