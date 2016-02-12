/**
 * Created by esattahaibis on 2016-02-11.
 */

/**
 * Created by esattahaibis on 2016-02-04.
 * File name app.js
 * Desc contains custom JavaScript code for Esat's Bio
 */

(function(){
	//alert("Tryout 1 2 3");

	var myHeading = 'My Biography!';
	var myCurrentBioOne = 'my Bio that coming from JavaScript';
	var myCurrentBioTwo = 'my Bio that coming from JavaScript';
	var projectOneText = 'Project one text comming from Javascript saddsadsadsadsadsadsadsa';
	var projectTwoText = 'Project two text coming from JavaScript dsadsadasdsadsadsadsadsadsa';
	var projectThreeText = 'Project three text coming from JavaScript dsadsadsadsadsadsadsadsad';

	document.getElementById("paragraphOne").innerHTML = myCurrentBioOne;
	document.getElementById("paragraphTwo").innerHTML = myCurrentBioTwo;

	/*document.getElementById("projectOneText").innerHTML = projectOneText;
	document.getElementById("projectTwoText").innerHTML = projectTwoText;
	document.getElementById("projectThreeText").innerHTML = projectThreeText;*/


	document.getElementById("btnSend").addEventListener("click", function(){
		alert("You succesfully sent your massage!");
		console.log('success');
		window.location.href = "#page-top";
	});



})();

