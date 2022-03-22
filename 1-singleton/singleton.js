let Singleton = (function () {
    let instance;
    let Singleton = function () {
        if (instance) {
            return instance;
        } else {
            instance = this;
        }
    };
    return Singleton;
})();

// 使用单例构造函数

let s1 = new Singleton();
let s2 = new Singleton();
console.log('s1 === s2', s1 === s2);
