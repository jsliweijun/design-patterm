// client 需要的方法可以在这个目标中声明出来,在实现适配器时就可以通过实现这个接口，最终完成适配功能。

interface Target {
    output();
}
