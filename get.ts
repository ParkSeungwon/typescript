/// <reference path="a.d.ts" />
//compile with -t ES2016 -m commonjs to use Promise, require module

class A<T, K> {
	a:T;
	b:K;
};
let a = new A<number, string>();
a.a = 3;
a.b = 'hello';
console.log(`${a.a} ${a.b}`);
//setTimeout(()=>{console.log("waited 1000ms" + a.b);}, 1000);

let pr = new Promise<string>(
	(resolv, reject)=> {
		console.log('in promise');
		setTimeout(()=>{resolv('finished in resolv');}, 1000);
	}
);

function wait(n:number) {
	console.log('in');
	return new Promise<void>(
		(ok, error)=> {
			console.log('in2');
			setTimeout(ok, n);
		}
	);
}
(async function awaitmsg() {
	console.log('waiting');
	try {
		var s = await pr;
	} catch(err) {
		console.log(err);
	}
	console.log(s);
	console.log('finished');
})();

(async ()=>{
	await wait(3000);
	console.log('last');
	await wait(1000);
	console.log('again');
})();

//mA.ff();

import {moduleA} from './module'

let aa = new moduleA();
aa.num = 3;
aa.print();
