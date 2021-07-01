window.addEventListener("load", cargoPagina);

function cargoPagina() {
	//hacemos el DOM para la busqueda
	const formulario= document.getElementById("formulario");
	formulario.addEventListener("submit", buscar);
	console.log(formulario)
}

function buscar(event) {
	//console.log(event);
	event.preventDefault();
	
	const form = new FormData(this);
	
	const busqueda = form.get("input");
	const url = "https://api.jikan.moe/v3";
	
	fetch(`${url}/search/anime?q=${busqueda}&page=1`)
	.then(response=>{
		return response.json();
	})
	.then(dios)
	.catch(error=>console.warn(error.message))
	
}

function dios (datosDelFetch) {
	console.log(datosDelFetch.results);
	//console.log(); 
	const resultadosBusqueda = document.getElementById("resultados");
	
	resultadosBusqueda.innerHTML = datosDelFetch.results
	.map(elAnime=>{
		return`
		<img src="${elAnime.image_url}" />
		<p>${elAnime.title}</p>
		<p>${elAnime.synopsis}</p>
		<p>${elAnime.score}</p>
		<p><a href="${elAnime.url}">link a la pagina</a></p>
`
	})
	
}