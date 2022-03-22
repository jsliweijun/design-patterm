// 构造函数
export function Singleton() {}

// 定义获取 静态方法, 要形成闭包，保存实例
Singleton.getInstance = (function () {
    let instance: any;
    return function () {
        if (!instance) {
            instance = new (Singleton as any)();
        }
        return instance;
    };
})();

// 这种方式实现，需要用户知道 调用 getInstance 方法才可以。
