/// <reference path="jquery.d.ts" />
interface IContactData {
	DisplayText: string;
	Email: string;
};
declare var CONTACT_DATA: IContactData[];
$( function() {
	for (let contact of CONTACT_DATA)
		console.log(`DisplayText: ${contact.DisplayText}, Email : ${contact.Email}`);
	$("#12").html("hello");
	$.post("localhost");
});
