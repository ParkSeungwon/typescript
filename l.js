//var message:string = "hello world"
//var n:number = 12;
//console.log(message)
//console.log(n)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var G = /** @class */ (function () {
    function G(n) {
        this.num = n;
    }
    G.prototype.Greet = function () {
        console.log(message);
    };
    return G;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(arg) {
        var _this = _super.call(this, 3) || this;
        _this.anything = arg;
        return _this;
    }
    Son.prototype.Greet = function () {
        console.log(message + this.num + this.anything);
    };
    return Son;
}(G));
//var obj = new Son("kkk");
//var obj2 = new Son(454);
//obj.Greet();
//obj2.Greet();
