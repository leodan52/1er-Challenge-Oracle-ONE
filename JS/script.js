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
let alerta = document.getElementById("alerta-copiado");

function EditarCSS(salida) {
	const textoArea = document.getElementById("salida");
	const portadaSalida = document.getElementById("salida-portada");
	const contenedor = document.getElementById("contenedor");
	const formArea = document.getElementById("form");
	const logo = document.getElementById("imagen-logo");

	const inicialheithcont = contenedor.clientHeight;
	let minAltotextoArea = portadaSalida.clientHeight;
	const inicialAltotextoArea = textoArea.scrollHeight;
	const alturaform = formArea.clientHeight;
	const alturaLogo = logo.clientHeight;

	if (screen.width < 850 & inicialAltotextoArea != 0) {
		minAltotextoArea = inicialAltotextoArea;
		textoArea.style.height = "18vh";
	}

	portadaSalida.style.display = "none";
	textoArea.style.display = "block";
	textoArea.value = salida;

	if (screen.width < 850) {

		const altura = textoArea.scrollHeight;
		const newAlturaTexArea = altura*1.1;
		const incremento = newAlturaTexArea - minAltotextoArea;
		const newAlturacont = inicialheithcont + incremento;

		contenedor.style.height = newAlturacont + "px" ;

		logo.style.height = alturaLogo + "px";
		formArea.style.height = alturaform + "px";
		textoArea.style.height = newAlturaTexArea + "px";

		console.log(newAlturaTexArea);
		console.log(textoArea.scrollHeight);
	}

}

function Encriptar() {
	let cadena = document.getElementById("mensaje").value;
	let salida = cadena;

	if (cadena == "") {
		return false;
	}


	for (let n = 0; n < vocales.length; n++) {
		salida = salida.replaceAll(vocales[n], key[n]);
	}

	EditarCSS(salida);
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

	EditarCSS(salida);
}

function alertarCopiado() {
	let texto = document.getElementById("salida").value;

	navigator.clipboard.writeText(texto);

	alerta.style.animationPlayState = "running";
}

function pausedAnimation() {
	alerta.style.animationPlayState = "paused";
}


document.getElementById("botonEncriptar").addEventListener("click", Encriptar);
document.getElementById("botonDesencriptar").addEventListener("click", Desencriptar);
document.getElementById("salida").addEventListener("click", alertarCopiado);
alerta.addEventListener("webkitAnimationIteration", pausedAnimation, false);
alerta.addEventListener("animationiteration", pausedAnimation, false);

