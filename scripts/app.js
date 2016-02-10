/**
 * Created by esattahaibis on 2016-02-04.
 * File name app.js
 * Desc contains custom JavaScript code for Esat's Bio
 */

(function(){
	//alert("Tryout 1 2 3");

	var myCurrentBio = 'd.ksnalkdnsa.n,d.nsa,mnd,msanas,mdn';
	var mparagrapghHtml;

	mparagrapghHtml = document.getElementById("myBio");
	mparagrapghHtml.innerHTML = myCurrentBio;

})();

function redirectButton() {
	alert("You succesfully sent your massage!");
	window.location.href = "index.html";
}

