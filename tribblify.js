//////////////////////////////////////////////////////////////////
// INSTRUCTIONS
// 1. Include this script in your page
// 2. Add an initial trigger (e.g. onclick for some element) to call tribblify()
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// CONFIG
///////////////////////////////////
// Tribble breeding event. Default "onmouseout".
// For less troublesome tribbles, set to "onclick" (but where's the fun in that?)
var tribblifyOn = "onmouseout";
///////////////////////////////////
// List of image URLs. Each tribble will be randomly selected from here.
// Customise as you wish (must contain at least one entry)
// It doesn't have to be tribbles. It works just as well with jellybeans, or cats
var tribbles = [
		"http://i1171.photobucket.com/albums/r552/CarrieVS/tribbles/tribble01.png",
		"http://i1171.photobucket.com/albums/r552/CarrieVS/tribbles/tribble02.png",
		"http://i1171.photobucket.com/albums/r552/CarrieVS/tribbles/tribble03.png",
		"http://i1171.photobucket.com/albums/r552/CarrieVS/tribbles/tribble04.png",
		"http://i1171.photobucket.com/albums/r552/CarrieVS/tribbles/tribble05.png",
		"http://i1171.photobucket.com/albums/r552/CarrieVS/tribbles/tribble06.png",
		"http://i1171.photobucket.com/albums/r552/CarrieVS/tribbles/tribble07.png",
		"http://i1171.photobucket.com/albums/r552/CarrieVS/tribbles/tribble08.png"
	];
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

var tribbleCount = 0;
var tribbleContainer;

function tribblify() {
	if (tribbleCount == 0) {
		// Stick them all in a box, for easier handling
		tribbleContainer = document.createElement("div");
		tribbleContainer.setAttribute("id","tribbleContainer");
		document.body.appendChild(tribbleContainer);
		
		// Add some styles
		var style = document.createElement("style");
		var styles = document.createTextNode(
				"#tribbleContainer{background-color:none;border:none;position:relative}" +
				".tribble{position:fixed;z-index:1;}" +
				"#killTribbles{position:fixed;bottom:0;right:0;z-index:2;background-color:#000;color:#000;padding:4px;margin:5px;border-radius:2px;border:none}" +
				"#killTribbles:hover,#killTribbles:focus{color:#fff}"
		);
		style.appendChild(styles);
		tribbleContainer.appendChild(style);
			
		// Add reset button, because we're not completely evil
		var reset = document.createElement("button");
		var text = document.createTextNode("Kill the tribbles!");
		reset.appendChild(text);
		reset.setAttribute("id","killTribbles");
		reset.setAttribute("onclick","killTribbles()");
		tribbleContainer.appendChild(reset);
		
		addTribble();
	} else {
		var currentCount = tribbleCount;
		for (i=0; i<currentCount; i++) {
			addTribble();
		}
	}
}

function addTribble() {
	// Random tribble
	var i = Math.floor( Math.random() * tribbles.length );
	var imagePath = tribbles[i];
	
	//Random position
	var vPos = Math.floor( Math.random() * window.innerHeight ) - 10 + "px";
	var hPos = Math.floor( Math.random() * window.innerWidth ) - 10 + "px";
	
	var tribble = document.createElement("img");
	tribble.setAttribute("class","tribble");
	tribble.setAttribute(tribblifyOn,"tribblify()");
	tribble.setAttribute("src",imagePath);
	tribble.setAttribute("alt","tribble");
	tribble.style.top = vPos;
	tribble.style.left = hPos;
	
	tribbleContainer.appendChild(tribble);
	
	tribbleCount += 1;
}

function killTribbles() {
	document.body.removeChild(tribbleContainer);	
	tribbleCount = 0;
}
