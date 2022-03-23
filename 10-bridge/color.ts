import { Shape } from './shape';

// 桥接模式
// 抽象化角色
abstract class Color {
    constructor(public shape: Shape) {
        this.shape = shape;
    }
    abstract drawByColor(): void;
}

// 扩展抽象化角色
export class Yellow extends Color {
    constructor(public shape: Shape) {
        super(shape);
        this.shape = shape;
    }

    drawByColor() {
        this.shape.draw();
        console.log('黄色边');
    }
}

export class Red extends Color {
    constructor(public shape: Shape) {
        super(shape);
        this.shape = shape;
    }
    drawByColor() {
        this.shape.draw();
        console.log('红色边');
    }
}

// 加颜色，直接创建一个子类
