let URLMain = "json/rows.json";
let rowProds = document.getElementById("lista");

function mostrarTodo(elemento) {
    rowProds.innerHTML += `
    <div id="contenedorProducto" class="d-flex flex-column card-deck col-md-5 col-lg-3 col-xl-2" data-toggle="modal" data-target="#id" onclick="cargarModal(${elemento[1].replace(/-/g, "")})">
        
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

function cargarModal(id){
  fetch('json/rows.json')  
  .then(res => res.json())  
  .then((out) => {  
    console.log(out);  
    out.forEach(element => {
      console.log(element);
         if(element[1].replace(/-/g, "") == id){
             document.getElementsByClassName("modalImagen")[0].src = element[0];
             document.getElementsByClassName("modalNombre")[0].innerHTML = element[0];
             document.getElementsByClassName("modalAutor")[0].innerHTML = "de " + element[1];
             document.getElementsByClassName("modalISBN")[0].innerHTML = "<strong>ISBN:</strong> " + element[1];
             document.getElementsByClassName("modalISBNhide")[0].value = element[10];
             document.getElementsByClassName("modalDescripcion")[0].innerHTML ="<strong>Sinopsis: </strong>"+element.descripcion;
             document.getElementsByClassName("modalPrecio")[0].innerHTML = "$ "+element.precio+" MXN";
             }
     });
  })  
  .catch(err => {  
    throw err  
  });
 }

   function cargarModal(isbn){
  fetch('http://127.0.0.1:8087/api/products/')  
  .then(res => res.json())  
  .then((out) => {  
    console.log(out);  
    out.forEach(element => {
      console.log(element);
         if(element.isbn == isbn){
             document.getElementsByClassName("modalImagen")[0].src = element.url_imagen;
             document.getElementsByClassName("modalNombre")[0].innerHTML = element.nombre;
             document.getElementsByClassName("modalAutor")[0].innerHTML = "de " + element.autor;
             document.getElementsByClassName("modalISBN")[0].innerHTML = "<strong>ISBN:</strong> " + element.isbn;
             document.getElementsByClassName("modalISBNhide")[0].value = element.isbn;
             document.getElementsByClassName("modalDescripcion")[0].innerHTML ="<strong>Sinopsis: </strong>"+element.descripcion;
             document.getElementsByClassName("modalPrecio")[0].innerHTML = "$ "+element.precio+" MXN";
             }
     });
  })  
  .catch(err => {  
    throw err  
  });
 }

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
