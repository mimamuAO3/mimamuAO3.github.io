function listaus() {
	if (document.getElementById("fandom").value != 0) {
		document.getElementById("otsikko").innerHTML = "Ehkä jokin näistä?";
		if (document.getElementById("fandom").value == 1) {
			if (document.getElementById("karanteeni").checked) {
				document.getElementById("listaus").innerHTML = ficci("Se toinen ministeri", "49387", "K11", "HP", 1600);
			}
			else if (document.getElementById("ikaraja").value == 3) {
				document.getElementById("listaus").innerHTML = ficci("Nevillen vetelävalvatti", "40758", "K18", "HP", 2500);
			}
			else if (document.getElementById("ikaraja").value == 2) {
				document.getElementById("listaus").innerHTML = ficci("Kaksi valaa", "45965", "K15", "HP", 1100);
			}
			else {
				if (document.getElementById("pituus").value == 3) {
					document.getElementById("listaus").innerHTML = ficci("Annos tekee myrkyn", "48689", "K11", "HP", 14000);
				}
				else if (document.getElementById("pituus").value == 2) {
					document.getElementById("listaus").innerHTML = ficci("Alfajiri", "43747", "K11", "HP", 1600);
					document.getElementById("listaus").innerHTML += ficci("Se toinen ministeri", "49387", "K11", "HP", 1600);
					document.getElementById("listaus").innerHTML += ficci("Kolme kertaa kun Petunia lainasi Vernonin levyjä", "42835", "K11", "HP", 1900);
				}
				else {
					document.getElementById("listaus").innerHTML = ficci("Ota minut Viktoriksi", "50533", "S", "HP", 900);
				}
			}
		}
		else if (document.getElementById("fandom").value == 2 && !document.getElementById("karanteeni").checked) {
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
			document.getElementById("listaus").innerHTML = "rare";
		}
		else {
			document.getElementById("otsikko").innerHTML = "Yhyy, ei löytynyt mitään!";
			document.getElementById("listaus").innerHTML = "";	
		}
	}
	else if (document.getElementById("karanteeni").checked || document.getElementById("joulu").checked || document.getElementById("paritukseton").checked) {
		if (document.getElementById("karanteeni").checked && (document.getElementById("fandom").value != 1 && document.getElementById("fandom").value != 2)) {
			document.getElementById("listaus").innerHTML = ficci("Pohjoismaista yhteistyötä", "49888", "K11", "Hetalia", 1100);
			document.getElementById("listaus").innerHTML += ficci("Maailman onnellisin kansakunta", "50890", "S", "Hetalia", 1100);
		}
		if (document.getElementById("joulu").checked) {
		}
		if (document.getElementById("paritukseton").checked) {
		}
	}
	else {
		document.getElementById("otsikko").innerHTML = "";
		document.getElementById("listaus").innerHTML = "";
	}
}

function ficci(nimi, numero, ikaraja, fandom, sanat) {
	return "<a href='https://www.finfanfun.fi/index.php?topic=" + numero + "'>" + nimi + "</a> (" + ikaraja + ") " + fandom + "<br />";
}