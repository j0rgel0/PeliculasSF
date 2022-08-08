let URLMain = "json/rows.json";
let rowProds = document.getElementById("lista");

function monstrarTodo(elemento) {
    rowProds.innerHTML += `
    
    <div id="contenedorProducto" class="d-flex flex-column card-deck col-md-5 col-lg-3 col-xl-2">
        <div class="card-body">

            <div>
                <h5 class="text-center">${elemento[8]} (${elemento[9]})</h5>
                <h6 class="text-muted text-center"> ${elemento[14]}</h6>
                <div style="width: 100%">
                    <iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=${elemento[10]}+,San Francisco, CA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    <p><b>Location:</b> ${elemento[10]}</p>
                </div>
            </div>
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
      data.meta.view.columns.forEach((element,i) => {
        console.log(i+' '+element.name);
    });
        data.data.forEach(element => {
            monstrarTodo(element);
        });
    // Error en el servidor, DNS están mal, no tienes conexión
    }).catch((err)=> {
        console.log("catch request "+ err);
    });
// Encontró el servidor, pero no existe el dato.
}).catch((err)=> {
    console.log("catch request "+ err);
});
