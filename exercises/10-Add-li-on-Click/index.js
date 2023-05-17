let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function () {
	//your code here
	let padreListas = document.querySelector("#myList");
	let nuevaLista = document.createElement("li");
	let mensaje = document.createTextNode("Forth Element");

	nuevaLista.appendChild(mensaje);
	padreListas.appendChild(nuevaLista);
});
