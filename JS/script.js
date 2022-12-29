// Encriptador de cadenas de texto
// Parte del Challenge One de Alura
/*
La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"` */

let vocales = ["e", "i", "a", "o", "u"]
let key = ["enter", "imes", "ai", "ober", "ufat"];
let estado = 0;

function Encriptar() {
	let cadena = document.getElementById("mensaje").value;
	let salida = cadena;

	if (cadena == "") {
		return false;
	}


	for (let n = 0; n < vocales.length; n++) {
		salida = salida.replaceAll(vocales[n], key[n]);
	}

	document.getElementById("salida-portada").style.display = "none";
	document.getElementById("salida").style.display = "block";
	document.getElementById("salida").innerHTML = salida;

}

function Desencriptar() {
	let cadena = document.getElementById("mensaje").value;
	let salida = cadena;

	if (cadena == "") {
		return false;
	}


	for (let n = 0; n < vocales.length; n++) {
		salida = salida.replaceAll(key[n], vocales[n]);
	}

	document.getElementById("salida-portada").style.display = "none";
	document.getElementById("salida").style.display = "block";
	document.getElementById("salida").innerHTML = salida;

}

function alertarCopiado() {
	let texto = document.getElementById("salida").value;
	let alerta = document.getElementById("alerta-copiado");

	navigator.clipboard.writeText(texto);

	if (estado == 0) {
		alerta.style.visibility = "visible";
		alerta.style.opacity = 0;
		estado = 1;
	} else {
		alerta.style.opacity = 0.6;
		alerta.style.visibility = "hidden";
		estado = 0;
	}



}


document.getElementById("botonEncriptar").addEventListener("click", Encriptar);
document.getElementById("botonDesencriptar").addEventListener("click", Desencriptar);
document.getElementById("salida").addEventListener("click", alertarCopiado);

