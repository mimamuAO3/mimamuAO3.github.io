function listaus() {
	if (document.getElementById("fandom").value == 1) {
		document.getElementById("listaus").innerHTML = "Potter";
	}
	else if (document.getElementById("fandom").value == 2) {
		document.getElementById("listaus").innerHTML = "SW";
	}
	else if (document.getElementById("fandom").value == 3) {
		document.getElementById("listaus").innerHTML = "rare";
	}
	else {
		document.getElementById("listaus").innerHTML = "";
	}
}