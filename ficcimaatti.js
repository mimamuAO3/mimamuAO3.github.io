function hahmot_ja_listaus() {
	// HP
	if (document.getElementById("fandom").value == 1) {
		document.getElementById("paahenkilohaku").innerHTML = "<b>päähenkilo</b><br /> <select id='paahenkilo' onchange='listaus()'>" +
		"<option value='0' selected='selected'></option>" +
		"<option value='aurora'>Aurora Sinistra</option>" +
		"<option value='boris'>Boris Johnson</option>" +
		"<option value='bunty'>Bunty</option>" +
		"<option value='harry'>Harry</option>" +
		"<option value='hermione'>Hermione</option>" +
		"<option value='molly'>Molly Weasley</option>" +
		"<option value='percy'>Percy Weasley</option>" +
		"<option value='queenie'>Queenie Goldstein</option>" +
		"<option value='ron'>Ron</option>" +
		"<option value='scorpius'>Scorpius Malfoy</option>" +
		"<option value='seraphina'>Seraphina Picquery</option>" +
		"<option value='severus'>Severus</option>" +
		"</select>";

	}
	// SW
	else if (document.getElementById("fandom").value == 2) {
		document.getElementById("paahenkilohaku").innerHTML = "<b>päähenkilo</b><br /> <select id='paahenkilo' onchange='listaus()'>" +
		"<option value='0' selected='selected'></option>" +
		"<option value='dexter'>Dexter Jettster</option>" +
		"<option value='hux'>Hux</option>" +
		"<option value='kaydel'>Kaydel Ko Connix</option>" +
		"<option value='quigon'>Qui-Gon Jinn</option>" +
		"<option value='rey'>Rey</option>" +
		"</select>";
		
	}
	else {
		document.getElementById("paahenkilohaku").innerHTML = "";
	}
	listaus();
}

function listaus() {
	
	document.getElementById("otsikko").innerHTML = "Ehkä jokin näistä?";
	document.getElementById("listaus").innerHTML = "";
	

	
	if (document.getElementById("fandom").value != 0) {
		
		document.getElementById("otsikko").innerHTML = "Ehkä jokin näistä?";
		document.getElementById("listaus").innerHTML = "";
		
		// fandom
		if (document.getElementById("fandom").value == 1) {
			if (!HP()){
				yhyy();
			}
		}
		else if (document.getElementById("fandom").value == 2 ) {
			if (!SW()){
				yhyy();
			}
		}
		else {
			if (!rare()) {
				yhyy();
			}
		}
	}
		
	// teema
	else if (document.getElementById("teema").value != 0) {

		// Tähtien sodasta ei ole teemaficcejä
		var ei_HP = !HP();
		var ei_rare = !rare();
		
		if (ei_HP && ei_rare){
			yhyy();
		}
	}
	
	// ei fandomia eikä teemaa
	else {

		if (document.getElementById("pituus").value == 0) {
			document.getElementById("otsikko").innerHTML = "Luettavaa löytyi vaikka millä mitalla! Tarkennetaanko hakua?";
		}
		
		var ei_HP = !HP();
		var ei_SW = !SW();
		var ei_rare = !rare();
		
		if (ei_HP && ei_rare && ei_SW){
			yhyy();
		}
	}
}

function ficci(nimi, numero, ikaraja, fandom, sanat) {
	document.getElementById("listaus").innerHTML += "- <a href='https://www.finfanfun.fi/index.php?topic=" + numero + "'>" + nimi + "</a> (" + ikaraja + ") " + fandom + "<br />";
}

function yhyy() {
	document.getElementById("otsikko").innerHTML = "Yhyy, ei löytynyt mitään!";
	document.getElementById("listaus").innerHTML = "";
}

// palauttaa true, jos jotain löytyi, muutoin false
function SW() {

	var fandom	= document.getElementById("fandom").value;
	var ikaraja	= document.getElementById("ikaraja").value;
	var pituus	= document.getElementById("pituus").value;
	var teema 	= document.getElementById("teema").value;
	
	var paahenkilo = 0;
	if (fandom == 2 && document.getElementById("paahenkilo").value != 0) {
		paahenkilo = document.getElementById("paahenkilo").value;
	}
		
	// K18
	if (ikaraja == 3) {
					
		if ((pituus == 2 || pituus == 0) && (paahenkilo == 0 || paahenkilo == "hux") && teema == 0){			
			ficci("Pamarthen viskiä", "46175", "K18", "SW", 2400);
		}
		else {
			return false;		
			
		}

	}
	// K15 
	else if (ikaraja == 2) {
		return false;	
	}
	
	// S, K11
	else {
		
		
		// pitkät 
		if (pituus == 3 || pituus == 0) {

			if (paahenkilo == 0 || paahenkilo == "hux" || paahenkilo == "kaydel") {
				ficci("Armitage, kapinallinen", "48892", "K11", "SW", 4500);
			}			

		}
		
		// keskipitkät
		if (pituus == 2) {
			
			return false;

		}
		if (pituus < 2){
	 
	
			if (paahenkilo == 0 || paahenkilo == "quigon") {
				ficci("Osa maailmankaikkeutta", "46380", "K11", "SW", 700);
			}
			
			if (paahenkilo == 0 || paahenkilo == "dexter") {
				ficci("Yksi joka planeetalla", "46408", "K11", "SW", 700);
			}

			if (paahenkilo == 0 || paahenkilo == "hux") {
				ficci("Ei kukaan", "46288", "S", "SW", 500);
				ficci("Häikäilemätön", "46209", "K11", "SW", 300);
			}
			
			if (paahenkilo == 0 || paahenkilo == "rey") {
				ficci("Täydellinen tasapaino", "46120", "K11", "SW", 700);
			}
			
			if (paahenkilo == 0 || paahenkilo == "kaydel") {
				ficci("Sivuhahmo", "46310", "S", "SW", 700);
			}
		}

	}
	return true;
}

// palauttaa true, jos jotain löytyi, muutoin false
function HP() {
	
	var fandom	= document.getElementById("fandom").value;
	var ikaraja	= document.getElementById("ikaraja").value;
	var pituus	= document.getElementById("pituus").value;
	var teema 	= document.getElementById("teema").value;
	
	var paahenkilo = 0;
	if (fandom == 1 && document.getElementById("paahenkilo").value != 0) {
		paahenkilo = document.getElementById("paahenkilo").value;
	}
	
	// K18
	if (ikaraja == 3) {
		
		// karsitaan pois mahdottomuudet
		// tällä ikärajalla ei ole teemaficcejä ja jos hahmo on määritelty, se voi olla vain hermione, severus tai queenie
		if (teema != 0 || 
		   (paahenkilo != 0 && (paahenkilo != "hermione" && paahenkilo != "severus" && paahenkilo != "queenie"))) {
			return false;
		}	
		
		// pitkät
		if (pituus == 3 || pituus == 0){	
		
			if (paahenkilo == 0 || paahenkilo == "hermione" || paahenkilo == "severus") {
				ficci("Hermione Granger ja kaksoisolennon arvoitus", "43303", "K18", "HP", 82000);
			}
		
			// pituus annettu, tähän voi lopettaa
			if (pituus == 3 || paahenkilo == "severus") {
				return true;
			}

		}
		// keskipitkät
		if (pituus == 2 || pituus == 0){	
			if (paahenkilo == 0 || paahenkilo == "hermione") {
				ficci("Nevillen vetelävalvatti", "40758", "K18", "HP", 2500);
			}
			
			// pituus annettu, tähän voi lopettaa
			if (pituus == 2 || paahenkilo == "hermione") {
				return true;
			}
		}
		// lyhyet
		if (pituus < 2 ){	
			
			if (paahenkilo == 0 || paahenkilo == "queenie") {
				ficci("Kielletty ovi", "43961", "K18", "HP", 500);
			}
		}
	}
	// K15 
	else if (ikaraja == 2) {
		if (teema == "karanteeni" || teema == "paritukseton" || pituus == 3 || (paahenkilo != 0 && (paahenkilo != "severus" && paahenkilo != "hermione"))) {
			return false;
		}
		
		// keskipitkät
		if (pituus == 2 || pituus == 0) {
			if (paahenkilo == 0 || paahenkilo == "severus") {
			ficci("Kaksi valaa", "45965", "K15", "HP", 1100);
			}
		}
	
		if (teema == "joulu") {
			return true;
		}
	
		// lyhyet
		if (pituus < 2 ){	
			
			if (paahenkilo == 0 || paahenkilo == "hermione") {
				ficci("Kuusi veljestä", "40604", "K15", "HP", 500);
			}
		}
		
	}
	// S, K11
	else {
		
		// karsitaan pois mahdottomuudet
		if (paahenkilo == "queenie") {
			return false;
		}
		
		// pitkät 
		if (pituus == 3 || pituus == 0) {


			if ((teema == 0 || teema == "joulu") && (paahenkilo == 0 || paahenkilo == "scorpius" || paahenkilo == "hermione")) {
				ficci("Annos tekee myrkyn", "48689", "K11", "HP", 14000);
			}
			
			if ((teema == 0 || teema == "joulu") && (paahenkilo == 0 || paahenkilo == "hermione")) {
				ficci("Proxima Centauri", "43861", "K11", "HP", 13000);
			}

			// pituus annettu, tähän voi lopettaa
			if (pituus == 3 || paahenkilo == "scorpius" || teema == "joulu") {
				return true;
			}

		}
		
		// keskipitkät
		if (pituus == 2 || pituus == 0) {
			

			if ((teema == 0 || teema == "karanteeni" || teema == "paritukseton") && (paahenkilo == 0 || paahenkilo == "boris")) {
				ficci("Se toinen ministeri", "49387", "K11", "HP", 1600);
			}
			
			if ((teema == 0 || teema == "paritukseton") && (paahenkilo == 0 || paahenkilo == "severus")) {
				ficci("Sianpää", "40982", "S", "HP", 1200);
			}
			
			if (teema == "karanteeni" || paahenkilo == "boris") {
				return true;
			} 
			
			if (teema == 0) {
			
				if (paahenkilo == 0 || paahenkilo == "aurora") {	
				ficci("Alfajiri", "43747", "K11", "HP", 1600);
				}
			
				if (paahenkilo == 0 || paahenkilo == "harry") {
				ficci("Kolme kertaa kun Petunia lainasi Vernonin levyjä", "42835", "K11", "HP", 1900);
				}
			
				if (paahenkilo == 0 || paahenkilo == "ron") {
				ficci("New Yorkin taika", "44000", "S", "HP", 1200);
				}
				
				if (paahenkilo == 0 || paahenkilo == "percy") {
				ficci("Nimi on vain numero", "42076", "S", "HP", 1200);
				}
				
				
							
			}

			if (paahenkilo == "aurora" || paahenkilo == "harry" || paahenkilo == "ron" || paahenkilo == "percy") {
				return true;
			} 

		}
		if (pituus < 2){
	
			if ((teema != 0 && teema == "paritukseton") || (paahenkilo != 0 && paahenkilo == "molly")) {
				ficci("Pardon My French", "43499", "S", "HP", 600);
			}
	
			if (teema == "paritukseton") {
				return true;
			} 
	
			if (paahenkilo == 0 || paahenkilo == "hermione") {
				ficci("Ota minut Viktoriksi", "50533", "S", "HP", 900);
			}
			
			if (paahenkilo == 0 || paahenkilo == "bunty") {
				ficci("Sinipunainen sulka", "47734", "S", "HP", 1000);
			}

			if (paahenkilo == 0 || paahenkilo == "seraphina") {
				ficci("Vakavin kuviteltavissa oleva vaara", "44187", "K11", "HP", 800);
			}

		}

	}
	return true;
}

// palauttaa true, jos jotain löytyi, muutoin false
function rare() {

	var fandom	= document.getElementById("fandom").value;
	var ikaraja	= document.getElementById("ikaraja").value;
	var pituus	= document.getElementById("pituus").value;
	var teema 	= document.getElementById("teema").value;
		
	// K18
	if (ikaraja == 3) {
		
		if (teema != 0) {
			return false;
		}		
		
		// pitkät
		if (pituus == 3 || pituus == 0){	
			ficci("Utilitaristin unelma", "48039", "K18", "The Good Place", 4600);
		}
		// keskipitkät, ei valintaa
		if (pituus == 2 || pituus == 0){	
			ficci("Himokas ottomaani", "45862", "K18", "Murdochin murhamysteerit", 2600);
		}
		// lyhyet
		if (pituus == 1){
			return false;
		}
	}
	// K15	
	else if (ikaraja == 2) {
		
		if (teema != 0) {
			return false;
		}		
		
		// pitkät
		if (pituus == 3 || pituus == 0){	
			ficci("One to Another", "45522", "K15", "My Mad Fat Diary", 3400);
		}
		// keskipitkät
		if (pituus == 2 || pituus == 0){	
			ficci("Maarianhaminan taistelu", "49985", "K15", "Hetalia", 2200);
			ficci("Ruudullinen rusetti", "47967", "K15", "The Good Place", 1300);
		}
		// lyhyet
		if (pituus == 1){
			return false;
		}
	}
	// S, K11
	else {
		// pitkät
		if (pituus == 3 || pituus == 0) {
			
			if (pituus == 3 && teema != 0) {
				return false;
			}	
			
			if (teema == 0) {
				ficci("Sauna, sisu ja suomettuminen", "49935", "K11", "Hetalia", 3100);
			}
		}
		// keskipitkät
		if (pituus == 2 || pituus == 0) {
			
			if (teema == "joulu") {
					return false;
			}

			if (teema == 0 || teema == "paritukseton") {
				ficci("Berliinin ihme", "50890", "S", "Hyviä enteitä (Good Omens)", 1600);
			}
			
			if (teema == 0 || teema == "karanteeni") {
				ficci("Maailman onnellisin kansakunta", "50890", "S", "Hetalia", 1100);
			}

			if (teema == 0 || teema == "karanteeni" || teema == "paritukseton") {
				ficci("Pohjoismaista yhteistyötä", "49888", "K11", "Hetalia", 1100);				
			}
			
			if (teema == "karanteeni" || teema == "paritukseton") {
					return true;
			}
			
			ficci("Kaksi kruunua", "47607", "S", "Dirk Gentlyn holistinen etsivätoimisto", 1100);
		}
		// lyhyet
		if (pituus < 2) {
			
			if (teema != 0) {
				return false;
			}	
			else {
				ficci("Niin paljon helpompaa", "47206", "S", "Grantchester", 900);
				ficci("Ero", "47060", "S", "Tohtori Živago", 800);
				ficci("Ansionsa mukaan", "46443", "K11", "Stranger Things", 300);
				ficci("Kieleni lausuu, mitä sydämeni kuiskaa", "41859", "S", "Seitsemän veljestä", 500);
			}
		}
	}
	return true;

}