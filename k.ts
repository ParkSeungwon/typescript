/// <reference path="jquery.d.ts" />

interface IContactData {
	DisplayText: string;
	Email: string;
};
declare var CONTACT_DATA: IContactData[];
class A {
	static on_click(a:string = 'ab') : void {
		alert("hello"+a);
	}
};

class B {
	on_click() {
		alert('second');
	}
};

let b:B = new B();

let Q:number[][];
Q[1][1] = 3;

$(function() {
	let s:string = "";
	for (let contact of CONTACT_DATA)
		s += `DisplayText: ${contact.DisplayText}, Email : ${contact.Email}<br>`;
	$.get("http://www.msn.com", function(data, status) {
		console.log(data);
	});
	$("div").html(s);
	$('body button').click(()=> {
		A.on_click('a click');
	});
});
