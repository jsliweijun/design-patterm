import { Adaptee } from './Adaptee';

// 使用 类结构模式， 用 继承的方式
export class Adapter extends Adaptee {
    output(): void {
        super.output();
        console.log('将 220 v 电转化为 20 v 电');
    }
}
