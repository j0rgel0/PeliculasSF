// Encabezado
function header() {
    const headerHTML = `
    <img class="navbar-brand logo" src="./img/logo.png" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav mr-auto">
    
            <!-- Liga a página de Inicio -->
            <li class="nav-item">
              <a class="nav-link" href="./index.html">Inicio</a>
            </li>
    
            <!-- Liga a página de Buscador -->
            <li class="nav-item">
              <a class="nav-link" href="./buscador.html">Buscador</a>
            </li>

            <!-- Liga a página de Administrador -->
            <li class="nav-item">
              <a class="nav-link" href="./admin.html">Admin</a>
            </li>
  
            </li>
          </ul>
        </div>

    `;
    const itemsContainer = document.querySelector("header");
    itemsContainer.innerHTML += headerHTML;
}

// Pie de página
function footer() {
    const footerHTML = `
        
        `;
    const itemsContainer = document.querySelector("footer");
    itemsContainer.innerHTML += footerHTML;
}
// Ejecutando encabezado
header();
// Encabezando pie de página
footer();
