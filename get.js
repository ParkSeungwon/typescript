"use strict";
/// <reference path="a.d.ts" />
//compile with -t ES2016 -m commonjs to use Promise, require module
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class A {
}
;
let a = new A();
a.a = 3;
a.b = 'hello';
console.log(`${a.a} ${a.b}`);
//setTimeout(()=>{console.log("waited 1000ms" + a.b);}, 1000);
let pr = new Promise((resolv, reject) => {
    console.log('in promise');
    setTimeout(() => { resolv('finished in resolv'); }, 1000);
});
function wait(n) {
    console.log('in');
    return new Promise((ok, error) => {
        console.log('in2');
        setTimeout(ok, n);
    });
}
(function awaitmsg() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('waiting');
        try {
            var s = yield pr;
        }
        catch (err) {
            console.log(err);
        }
        console.log(s);
        console.log('finished');
    });
})();
(() => __awaiter(this, void 0, void 0, function* () {
    yield wait(3000);
    console.log('last');
    yield wait(1000);
    console.log('again');
}))();
//mA.ff();
const module_1 = require("./module");
let aa = new module_1.moduleA();
aa.num = 3;
aa.print();
