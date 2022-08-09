let rowProds = document.getElementById("lista");

function mostrarTodo(elemento) {
    rowProds.innerHTML += `
    <div id="contenedorProducto" class="d-flex flex-column card-deck col-md-5 col-lg-3 col-xl-2" data-toggle="modal" data-target="#id" onclick="cargarModal(${elemento.id})">
        
      <div class="card-body">

          <div class="text-center"><h6>🎬${elemento.title} - (${elemento.release_year})</h6>
          <iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=${elemento.locations}+,San Francisco, CA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            
            <h6 class="text-muted"> by ${elemento.director}</h6>
            <p id="location"><b>Location:</b> ${elemento.locations}</p>
          </div>
      </div>

        <div class="card-footer text-muted mx-auto">
          <button type="button" class="btn btn-outline-dark">🎥Detalles</button>
      </div>

    </div>

    `;
}//monstrarTodo


fetch('http://127.0.0.1:8080/api/data/', {
    method: "GET"
// Funcion anonima o de flecha.
// En este caso, función flecha.
}).then( (response) => {
    response.json().then((data) => {
			
		let keys = Object.keys(data);
        let inicio = keys.length - 5;
        for (var i = inicio; i < keys.length; i++) {
            let key = keys[i];
   			let value = data[key];
   			console.log(value);
   			mostrarTodo(value);
		}

    // Error en el servidor, DNS están mal, no tienes conexión
    }).catch((err)=> {
        console.log("catch request "+ err);
    });
// Encontró el servidor, pero no existe el dato.
}).catch((err)=> {
    console.log("catch request "+ err);
});
