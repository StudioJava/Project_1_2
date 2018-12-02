// JavaScript Document
var person = [];
//++++++++
function myFunction(){
	var firstName = document.getElementById("input-1").value;
	var lastName = document.getElementById("input-2").value;
	document.getElementById("demo").innerHTML = firstName + " " + lastName;
	
	addName(firstName,lastName);
	console.log(person);
	clear();
}
//+++++++++
function addName(first,last){
	person.push(first +" " + last);
}
//++++++++++
function clear(){
	document.getElementById("input-1").value = "";
	document.getElementById("input-2").value = "";
}
//++++++
function print(){
	
	var listHTML = "";	
	var i;
	for (i = 0; i < person.length; i++) {
    listHTML += "<li>" +  person[i] + "</li>";
	};
	document.getElementById("demo").innerHTML = "Your List of Friends:";
	document.getElementById("demo2").innerHTML = listHTML;
	
}