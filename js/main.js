function textarea() {
	var llamarID = document.getElementById("inputBox");
	return llamarID.value;
}

function AgragarLista() {
	var agregar = textarea();
	if (agregar !== "") {
		ObtenerLista(agregar);
		clean();
	}
}

function ObtenerLista(text) {
	var llamarDiv = document.getElementById("homework");
	
	// Crear Elemento
	var crearElemento = document.createElement("div");
	crearElemento.id  = "lista";

	var br =document.createElement("br");

	var checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.setAttribute("class", "element");
	checkbox.onchange =  function() {
		parrafo.innerHTML =  text.strike();  
	}
	var parrafo = document.createElement("div");
	parrafo.id = "texto";
	parrafo.innerHTML = text;

	var icon = document.createElement("span");
	icon.setAttribute("class", "glyphicon glyphicon-trash");
	icon.setAttribute("id", "trash");
	icon.onclick = function() {
		llamarDiv.removeChild(crearElemento)
	}

	llamarDiv.appendChild(crearElemento);
	crearElemento.appendChild(checkbox);
	crearElemento.appendChild(parrafo);
	crearElemento.appendChild(icon);

}

function clean() {
	var LamarID =document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}