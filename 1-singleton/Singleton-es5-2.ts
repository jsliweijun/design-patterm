export let Singleton = (function () {
    let instance: any;
    let Singleton = function (this: any) {
        if (instance) {
            return instance;
        } else {
            return (instance = this);
        }
    };
    return Singleton;
})();
