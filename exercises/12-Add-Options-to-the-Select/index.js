let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let selector = document.getElementById("mySelect");

countries.forEach(country => {
    let crearOpcion = document.createElement("option");
    let texto = document.createTextNode(country);

    crearOpcion.appendChild(texto);
    selector.appendChild(crearOpcion);
});


selector.addEventListener('change', (event) => {
    alert(event.target.value);
})

{/* <select title="select" id="mySelect">
		<option value="-1">Select your country</option>
	</select> */}