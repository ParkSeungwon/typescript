/// <reference path="jquery.d.ts" />
;
$(function () {
    for (var _i = 0, CONTACT_DATA_1 = CONTACT_DATA; _i < CONTACT_DATA_1.length; _i++) {
        var contact = CONTACT_DATA_1[_i];
        console.log("DisplayText: " + contact.DisplayText + ", Email : " + contact.Email);
    }
    $("#12").html("hello");
    $.post("localhost");
});
