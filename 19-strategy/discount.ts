// 不同顾客打折场景

export class Customer {
    constructor(public type: string) {
        this.type = type;
    }

    // 下面的逻辑使用 if / else 进行判断，可以使用策略模式优化
    pay(amount: number) {
        if (this.type == 'member') {
            return amount * 0.9;
        } else if (this.type == 'vip') {
            return amount * 0.8;
        } else {
            return amount;
        }
    }
}
