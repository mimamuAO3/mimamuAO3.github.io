function hahmot_ja_listaus() {
	// HP
	if (document.getElementById("fandom").value == 1) {
		document.getElementById("hahmot").innerHTML = "hahmot: <input type='checkbox' id='aurora' onchange='listaus()'> Aurora Sinistra " +
		"<input type='checkbox' id='harry' onchange='listaus()'> Harry " +
		"<input type='checkbox' id='hermione' onchange='listaus()'> Hermione " +
		"<input type='checkbox' id='molly' onchange='listaus()'> Molly " +
		"<input type='checkbox' id='percy' onchange='listaus()'> Percy " +
		"<input type='checkbox' id='severus' onchange='listaus()'> Severus";
	}
	// SW
	else if (document.getElementById("fandom").value == 2) {
		document.getElementById("hahmot").innerHTML = "hahmot: <input type='checkbox' id='hux' onchange='listaus()'> Hux " +
		"<input type='checkbox' id='kylo' onchange='listaus()'> Kylo Ren " +
		"<input type='checkbox' id='quigon' onchange='listaus()'> Qui-Gon Jinn";
	}
	else {
		document.getElementById("hahmot").innerHTML = "hahmot: <i>hahmohaku toimii vain Potter- ja Star Wars-ficeillä</i>";
	}
	listaus();
}

function listaus() {
		
	if (document.getElementById("fandom").value != 0) {
		document.getElementById("otsikko").innerHTML = "Ehkä jokin näistä?";
		document.getElementById("listaus").innerHTML = "";
		if (document.getElementById("fandom").value == 1) {
			if (!HP()){
				yhyy();
			}
		}
		else if (document.getElementById("fandom").value == 2 && !document.getElementById("karanteeni").checked && !document.getElementById("joulu").checked && !document.getElementById("paritukseton").checked) {
			if (document.getElementById("ikaraja").value == 3) {
				document.getElementById("listaus").innerHTML = ficci("Pamarthen viskiä", "46175", "K18", "SW", 2400);
			}
			else {
				if (document.getElementById("pituus").value == 3) {
					document.getElementById("listaus").innerHTML = ficci("Armitage, kapinallinen", "48892", "K11", "SW", 4500);
				}
				else {
					document.getElementById("listaus").innerHTML = ficci("Osa maailmankaikkeutta", "46380", "K11", "SW", 700);
					document.getElementById("listaus").innerHTML += ficci("Yksi joka planeetalla", "46408", "K11", "SW", 700);
					document.getElementById("listaus").innerHTML += ficci("Ei kukaan", "46288", "S", "SW", 500);
				}

			}
		}
		else if (document.getElementById("fandom").value == 3) {
			if (!rare()) {
				yhyy();
			}
		}
		else {
			yhyy();	
		}
	}
	// ei fandomia
	else if (teema()) {
		document.getElementById("otsikko").innerHTML = "Ehkä jokin näistä?";
		document.getElementById("listaus").innerHTML = "";

		// Tähtien sodasta ei ole teemaficcejä
		if (!(HP() && rare())){
			yhyy();
		}
	}
	// ei mitään valintoja
	else {
		document.getElementById("otsikko").innerHTML = "";
		document.getElementById("listaus").innerHTML = "";
	}
}

function ficci(nimi, numero, ikaraja, fandom, sanat) {
	return "- <a href='https://www.finfanfun.fi/index.php?topic=" + numero + "'>" + nimi + "</a> (" + ikaraja + ") " + fandom + "<br />";
}

function yhyy() {
	document.getElementById("otsikko").innerHTML = "Yhyy, ei löytynyt mitään!";
	document.getElementById("listaus").innerHTML = "";
}

function teema() {
	return (document.getElementById("karanteeni").checked || document.getElementById("joulu").checked || document.getElementById("paritukseton").checked);
}

// palauttaa true, jos jotain löytyi, muutoin false
function HP() {
	// K18
	if (document.getElementById("ikaraja").value == 3) {
		// tällä ikärajalla ei ole teemaficcejä
		if (teema()) {
			return false;
		}	
		// pitkät
		else if (document.getElementById("pituus").value == 3){	
			document.getElementById("listaus").innerHTML = ficci("Hermione Granger ja kaksoisolennon arvoitus", "43303", "K18", "HP", 82000);
		}
		// keskipitkät
		else if (document.getElementById("pituus").value == 2){	
			document.getElementById("listaus").innerHTML = ficci("Nevillen vetelävalvatti", "40758", "K18", "HP", 2500);
		}
		// lyhyet, ei valintaa
		else {
			if (document.getElementById("harry").checked || document.getElementById("hermione").checked) {
				return false;
			}
			else {			
				document.getElementById("listaus").innerHTML = ficci("Kielletty ovi", "43961", "K18", "HP", 500);
			}
		}
	}
	// K15 tai pelkkä teema	
	if (document.getElementById("ikaraja").value == 2 || document.getElementById("joulu").checked) {

		document.getElementById("listaus").innerHTML = ficci("Kaksi valaa", "45965", "K15", "HP", 1100);
		
	}
	// S, K11, ei ikärajaa
	if (document.getElementById("ikaraja").value == 1 || document.getElementById("ikaraja").value == 0) {
		
		if (document.getElementById("pituus").value == 3 || document.getElementById("joulu").checked) {

			document.getElementById("listaus").innerHTML += ficci("Annos tekee myrkyn", "48689", "K11", "HP", 14000);

		}
		if (document.getElementById("pituus").value == 2 || teema()) {

			if (!teema()) {
				document.getElementById("listaus").innerHTML = ficci("Alfajiri", "43747", "K11", "HP", 1600);
				document.getElementById("listaus").innerHTML += ficci("Kolme kertaa kun Petunia lainasi Vernonin levyjä", "42835", "K11", "HP", 1900);
				document.getElementById("listaus").innerHTML += ficci("New Yorkin taika", "44000", "S", "HP", 1200);
			}
			
			if (document.getElementById("pituus").value == 2 || document.getElementById("karanteeni").checked) {
				document.getElementById("listaus").innerHTML += ficci("Se toinen ministeri", "49387", "K11", "HP", 1600);
			}
		}
		else if (!teema()){
			document.getElementById("listaus").innerHTML = ficci("Ota minut Viktoriksi", "50533", "S", "HP", 900);
			document.getElementById("listaus").innerHTML += ficci("Pardon My French", "43499", "S", "HP", 600);
		}
	}
	return true;
}

// palauttaa true, jos jotain löytyi, muutoin false
function rare() {
		
	// K18
	if (document.getElementById("ikaraja").value == 3) {
		if (teema()) {
			return false;
		}		
		// pitkät
		else if (document.getElementById("pituus").value == 3){	
			document.getElementById("listaus").innerHTML = ficci("Utilitaristin unelma", "48039", "K18", "The Good Place", 4600);
		}
		// keskipitkät, ei valintaa
		else if (document.getElementById("pituus").value == 2 || document.getElementById("pituus").value == 0){	
			document.getElementById("listaus").innerHTML = ficci("Himokas ottomaani", "45862", "K18", "Murdochin murhamysteerit", 2600);
		}
		// lyhyet
		else {
			return false;
		}
	}
	// K15	
	else if (document.getElementById("ikaraja").value == 2) {
		if (teema()) {
			return false;
		}		
		// pitkät
		else if (document.getElementById("pituus").value == 3){	
			document.getElementById("listaus").innerHTML = ficci("One to Another", "45522", "K15", "My Mad Fat Diary", 3400);
		}
		// keskipitkät, ei valintaa
		else if (document.getElementById("pituus").value == 2 || document.getElementById("pituus").value == 0){	
			document.getElementById("listaus").innerHTML = ficci("Maarianhaminan taistelu", "49985", "K15", "Hetalia", 2200);
			document.getElementById("listaus").innerHTML += ficci("Ruudullinen rusetti", "47967", "K15", "The Good Place", 1300);
		}
		// lyhyet
		else {
			return false;
		}
	}
	// S, K11, ei ikärajaa
	else {
		// pitkät
		if (document.getElementById("pituus").value == 3) {
			if (teema()) {
				return false;
			}		
			else {
				document.getElementById("listaus").innerHTML = ficci("Sauna, sisu ja suomettuminen", "49935", "K11", "Hetalia", 3100);
			}
		}
		// keskipitkät
		else if (document.getElementById("pituus").value == 2 || document.getElementById("karanteeni").checked) {

				document.getElementById("listaus").innerHTML += ficci("Pohjoismaista yhteistyötä", "49888", "K11", "Hetalia", 1100);
				document.getElementById("listaus").innerHTML += ficci("Maailman onnellisin kansakunta", "50890", "S", "Hetalia", 1100);

		}
		// lyhyet, ei valintaa
		else {
			document.getElementById("listaus").innerHTML = ficci("Niin paljon helpompaa", "47206", "S", "Grantchester", 900);
			document.getElementById("listaus").innerHTML += ficci("Ero", "47060", "S", "Tohtori Živago", 800);
			document.getElementById("listaus").innerHTML += ficci("Ansionsa mukaan", "46443", "K11", "Stranger Things", 300);
			document.getElementById("listaus").innerHTML += ficci("Kieleni lausuu, mitä sydämeni kuiskaa", "41859", "S", "Seitsemän veljestä", 500);
		}
	}
	return true;
	alert("d");
}