// 实现化角色，定义接口
export abstract class Shape {
    abstract draw(): void;
}

// 具体角色
export class Circle extends Shape {
    draw(): void {
        console.log('画圆');
    }
}

export class Rectangle extends Shape {
    draw(): void {
        console.log('画长方形');
    }
}

// 添加形状，直接添加子类也可以。
