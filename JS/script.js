// Encriptador de cadenas de texto
// Parte del Challenge One de Alura
/*
La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"` */

const vocales = ["e", "i", "a", "o", "u"]
const key = ["enter", "imes", "ai", "ober", "ufat"];
const alerta = document.getElementById("alerta-copiado");
const textoAreaSalida = document.getElementById("salida");

function Encriptar() {

	// Encripta mensaje que se ingresa en el textarea con ID mensaje

	const cadena = document.getElementById("mensaje").value;
	let salida = cadena.toLowerCase();

	if (cadena == "") {
		return false;
	}

	for (let n = 0; n < vocales.length; n++) {
		salida = salida.replaceAll(vocales[n], key[n]);
	}

	EditarCSS(salida);

}

function Desencriptar() {

	// Desencripta mensaje ya encriptado en que se ingresa en el textarea con ID mensaje

	const cadena = document.getElementById("mensaje").value;
	let salida = cadena.toLowerCase();

	if (cadena == "") {
		return false;
	}


	for (let n = 0; n < vocales.length; n++) {
		salida = salida.replaceAll(key[n], vocales[n]);
	}

	EditarCSS(salida);

}

function alertarCopiado() {

	// Reproduce animación que despliega mensaje de texto copiado

	const texto = textoAreaSalida.value;

	navigator.clipboard.writeText(texto);
	alerta.style.display = "block";
	alerta.style.animationPlayState = "running";

}

function pausedAnimation() {

	/* Detiene animación del mensaje de texto copiado para que se reproduzca
	una vez por evento */

	alerta.style.animationPlayState = "paused";
	alerta.style.display = "none";
}

function EditarCSS(salida) {

	/* Edita el estilo según sea requerido para imprimir el mensaje encriptado */

	const portadaSalida = document.getElementById("salida-portada");

	portadaSalida.style.display = "none";
	textoAreaSalida.style.display = "block";
	textoAreaSalida.value = salida;

	if (window.innerWidth <= 915) {
		textoAreaSalida.style.height = (textoAreaSalida.scrollHeight*1.01) + "px";
	}

}

// Eventos
window.addEventListener("resize", function(){

	/* Mantiene el tamaño del cuadro de salida responsivo */

	if (this.innerWidth <= 915) {
		textoAreaSalida.style.height = "auto";
		textoAreaSalida.style.height = (textoAreaSalida.scrollHeight*1.01) + "px";
	} else {
		textoAreaSalida.style.height = 84 + "%";
	}
});
document.getElementById("botonEncriptar").addEventListener("click", Encriptar);
document.getElementById("botonDesencriptar").addEventListener("click", Desencriptar);
document.getElementById("salida").addEventListener("click", alertarCopiado);
alerta.addEventListener("webkitAnimationIteration", pausedAnimation, false);
alerta.addEventListener("animationiteration", pausedAnimation, false);

