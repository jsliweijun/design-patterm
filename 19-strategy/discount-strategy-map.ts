export class Customer {
    // 使用策略字典, 如果 kinds 需要不断扩展，也可以移出到外部定义，添加时也很方便 kinds[xxx]=function name(params:type) {}
    public kinds: Kinds = {
        normal: function (amount: number) {
            return amount;
        },
        member: function (amount: number) {
            return amount * 0.9;
        },
        vip: function (amount: number) {
            return amount * 0.8;
        }
    };

    pay(amount: number, type: string) {
        return this.kinds[type] && this.kinds[type](amount);
    }
}

// 索引签名
interface Kinds {
    [key: string]: (amount: number) => {};
}
