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
              <a class="nav-link" href="./buscador.html">Buscar</a>
            </li>

            <!-- Liga a página de Registrate -->
            <li class="nav-item">
              <a class="nav-link" href="./registrar.html">Registrarse</a>
            </li>

            <!-- Liga a página de Inicio de Sesión -->
            <li class="nav-item">
              <a class="nav-link" href="./login.html">Inicia Sesión</a>
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
    <div style="text-align: center;">
    Realizado por <a class="enlacesFooter" href="https://www.linkedin.com/in/jorgelopezvz/">Jorge Francisco López Valdez</a>
    </div><br>
        `;
    const itemsContainer = document.querySelector("footer");
    itemsContainer.innerHTML += footerHTML;
}
// Ejecutando encabezado
header();
// Encabezando pie de página
footer();
