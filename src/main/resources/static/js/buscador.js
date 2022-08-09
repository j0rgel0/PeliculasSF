  window.addEventListener("load", function(event) {

  const search = async searchBox => {
  const res = await fetch('http://127.0.0.1:8080/api/data/');
  const data = await res.json();
  let busqueda = document.getElementById('search').value;
 
  //Obtener y filtrar los datos
  let fits = data.filter(elemento => {
	if(busqueda.length > 0 ){
    const regex = new RegExp(`^${busqueda}`, 'gi');
    return elemento.title.match(regex) || elemento.locations.match(regex);}
  });
  
  //Limpia si no hay información
	  if (busqueda.length === 0) {
	    fits = [];
	    dataList.innerHTML = '';
	  } 
  outputHtml(fits);
};

// Display result in HTML
const outputHtml = fits => {
		console.log(fits);
  if (fits.length > 0) {
    const html = fits.map(
        fit => `
             
     <div id="contenedorProducto" class="d-flex flex-column card-deck col-md-5 col-lg-3 col-xl-2" data-toggle="modal" data-target="#id" onclick="cargarModal(${fit.id})">
        
      <div class="card-body">

          <div class="text-center"><h6>🎬${fit.title} - (${fit.release_year})</h6>
          <iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=${fit.locations}+,San Francisco, CA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            
            <h6 class="text-muted"> by ${fit.director}</h6>
            <p id="location"><b>Location:</b> ${fit.locations}</p>
          </div>
      </div>

    </div>
     `).join('');
document.getElementById('dataList').innerHTML = html;
  }
};

document.getElementById('search').addEventListener('input', () => search(search.value));
  
    });