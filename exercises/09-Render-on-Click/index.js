let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function () {
	//your code here
	let nuevoDiv = document.createElement("div");
	let mensaje = document.createTextNode("Hello World");
	nuevoDiv.style.background = "yellow";
	nuevoDiv.appendChild(mensaje)
	document.body.appendChild(nuevoDiv);
});