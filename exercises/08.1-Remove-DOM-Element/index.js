// your code here
// if you check the HTML, you will find that the second LI has the id=secondElement
// you can use that to your advantage as a CSS selector
var listaDesordenada = document.querySelector("#secondElement");
listaDesordenada.parentNode.removeChild(listaDesordenada);