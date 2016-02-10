/**
 * Created by esattahaibis on 2016-02-04.
 * File name app.js
 * Desc contains custom JavaScript code for Esat's Bio
 */

(function(){
	//alert("Tryout 1 2 3");

	var myCurrentBio = 'my Bio that coming from JavaScript';
	var myHeading = 'My Biography!';

	document.getElementById("myBio").innerHTML = myCurrentBio;
	document.getElementById("myHeading").innerHTML = myHeading;




})();

function redirectButton() {
	alert("You succesfully sent your massage!");
	window.location.href = "index.html";
}

