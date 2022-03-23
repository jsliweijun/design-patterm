import { Adapter } from './class-adapter/Adapter';

import { Adaptee } from './object-adapter/Adaptee';
import { ObjectAdapter } from './object-adapter/ObjectAdapter';

// 需要获取 20v 的电
// let adapter = new Adapter();
// adapter.output();

// 使用对象适配的模式
let adaptee = new Adaptee();
let adapter = new ObjectAdapter(adaptee);
adapter.output();
