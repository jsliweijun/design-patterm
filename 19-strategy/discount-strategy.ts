export class Customer {
    constructor(public type: CustomerType) {
        this.type = type;
    }
    pay(amount: number) {
        return this.type.pay(amount); // 优化后没有 if else
    }
}

interface CustomerType {
    pay(amount: number): number;
}

export class Normal implements CustomerType {
    pay(amount: number): number {
        return amount;
    }
}

export class Member implements CustomerType {
    pay(amount: number): number {
        return amount * 0.9;
    }
}

export class Vip implements CustomerType {
    pay(amount: number): number {
        return amount * 0.8;
    }
}
