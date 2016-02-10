/**
 * Created by esattahaibis on 2016-02-04.
 * File name app.js
 * Desc contains custom JavaScript code for Esat's Bio
 */

(function(){
	//alert("Tryout 1 2 3");

	var myCurrentBio = 'my Bio that coming from JavaScript';
	var myHeading = 'My Biography!';

	var projectOneText = 'Project one text comming from Javascript';
	var projectTwoText = 'Project two text coming from JavaScript';
	var projectThreeText = 'Project three text coming from JavaScript';

	console.log(location.pathname.substring(location.pathname.lastIndexOf("/") + 1));

	if(location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == 'index.html') {

		document.getElementById("myBio").innerHTML = myCurrentBio;
		document.getElementById("myHeading").innerHTML = myHeading;
	} else if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == 'portfolio.html') {

		document.getElementById("projectOne").innerHTML = projectOneText;
		document.getElementById("projectTwo").innerHTML = projectTwoText;
		document.getElementById("projectThree").innerHTML = projectThreeText;
	}





})();

function redirectButton() {
	alert("You succesfully sent your massage!");
	window.location.href = "index.html";
}

