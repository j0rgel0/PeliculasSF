let URLMain = "json/rows.json";
let rowProds = document.getElementById("lista");

function mostrarTodo(elemento) {
    rowProds.innerHTML += `
    <div id="contenedorProducto" class="d-flex flex-column card-deck col-md-5 col-lg-3 col-xl-2" data-toggle="modal" data-target="#id" onclick="cargarModal(${elemento[01]})">
        
      <div class="card-body">
          <div class="text-center"><h6>🎬${elemento[8]} - (${elemento[9]})</h6>
          <iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=${elemento[10]}+,San Francisco, CA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            
            <h6 class="text-muted"> by ${elemento[14]}</h6>
            <p id="location"><b>Location:</b> ${elemento[10]}</p>
          </div>
      </div>

        <div class="card-footer text-muted mx-auto">
          <button type="button" class="btn btn-outline-dark">🎥Detalles</button>
      </div>

    </div>

    `;
}//monstrarTodo

fetch(URLMain, {
    method: "GET"
// Funcion anonima o de flecha.
// En este caso, función flecha.
}).then( (response) => {

    response.json().then((data) => {
      data.meta.view.columns.forEach((elemento,i) => {
        console.log(i+' '+elemento.name);
    });
        // data.data.forEach(elemento => {
        //     monstrarTodo(elemento);
        // });

    		let keys = Object.keys(data.data);
        console.log(keys);
        let inicio = keys.length - 5;
        for (var i = inicio; i < keys.length; i++) {
            let key = keys[i];
   			    let value = data.data[key];
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
