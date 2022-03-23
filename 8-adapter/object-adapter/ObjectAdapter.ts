import { Adaptee } from './Adaptee';

export class ObjectAdapter {
    constructor(public adatee: Adaptee) {}

    output() {
        this.adatee.output();
        console.log('将 220 v 电 转化为 20电');
    }
}
