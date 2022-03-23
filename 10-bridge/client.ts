import { Rectangle, Circle } from './shape';
import { Yellow, Red } from './color';

// 客户端使用
let rectangle = new Rectangle();
// rectangle.draw();
let red = new Red(rectangle);
red.drawByColor();
