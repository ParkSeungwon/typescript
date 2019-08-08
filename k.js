/// <reference path="jquery.d.ts" />
;
class A {
    static on_click(a = 'ab') {
        alert("hello" + a);
    }
}
;
class B {
    on_click() {
        alert('second');
    }
}
;
let b = new B();
let Q;
Q[1][1] = 3;
$(function () {
    let s = "";
    for (let contact of CONTACT_DATA)
        s += `DisplayText: ${contact.DisplayText}, Email : ${contact.Email}<br>`;
    $.get("http://www.msn.com", function (data, status) {
        console.log(data);
    });
    $("div").html(s);
    $('body button').click(() => {
        A.on_click('a click');
    });
});
