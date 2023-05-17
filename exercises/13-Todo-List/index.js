// Your code here
let contenedor = document.getElementById("container");
let input = document.getElementById("addToDo");
let ul = document.querySelector("ul");
let listaIconos = document.querySelectorAll("i");
let allSpan = document.querySelectorAll("span");

allSpan.forEach(element => {
    element.addEventListener('click', function (evento) {
        const item = evento.target.parentElement;
        ul.removeChild(item);
    });
});

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        let li = document.createElement("li");
        let span = document.createElement("span");
        let i = document.createElement("i");
        let accion = document.createTextNode(" " + event.target.value + " ");

        i.setAttribute("class", "fa fa-trash");

        span.appendChild(i);
        li.appendChild(span);
        li.appendChild(accion);
        ul.appendChild(li);

        span.addEventListener('click', function (evento) {
            const item = evento.target.parentElement;
            ul.removeChild(item);
        });

        event.target.value = "";
    }
});

{/* 
<div id="container">
	<h1 class="todo-header">To do List</h1>
	<input id="addToDo" type="text" placeholder="Add to do here" />
	<ul>
		<li>
			<span><i class="fa fa-trash"></i></span> Eat
		</li>
		<li>
			<span><i class="fa fa-trash"></i></span> Drink
		</li>
		<li>
			<span><i class="fa fa-trash"></i></span> Sleep
		</li>
	</ul>
</div> 
*/}