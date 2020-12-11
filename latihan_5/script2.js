function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// function loadNavButton() {
// 	document.getElementById("navSection").innerHTML= "testestes";
// }

var screenWidth=screen.width;
function loadBody() {
	alert("screenwidth="+screenWidth);
	// document.getElementById("loadBody").innerHTML= "testestes";
	if(screenWidth<=828) {
		// closeNavButton();
		document.getElementById("burgerButton").style.display= "block";
		document.getElementById("menuButton").style.display= "none";
		
	}
	else{
		// loadNavButton();
		document.getElementById("burgerButton").style.display= "none";
		document.getElementById("menuButton").style.display= "block";
		}
}

// function closeNavButton() {
// 	document.getElementById("navSection").innerHTML= "";
// }







