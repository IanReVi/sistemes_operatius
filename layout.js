document.addEventListener("DOMContentLoaded", () => {
  // Capçalera
  const headerHTML = `
    <header class="hero">
      <nav class="hero-nav">
        <a href="index.html">Portada</a>
        <a href="sprintsu.html">Índex de sprints Ubuntu</a>
        <a href="sprintsw.html">Índex de sprints Windows</a>
        <a href="https://github.com/IanReVi/sistemes_operatius/" target="_blank" rel="noopener">Codi a GitHub ↗</a>
      </nav>
      <div class="hero-titol">
        <h1>Sistemes Operatius</h1>
        <p class="subtitol">Mòdul ISOPJ1 · Cicle Formatiu de Grau Superior</p>
      </div>
    </header>
  `;

  // Peu de pàgina
  const footerHTML = `
    <footer class="peu">
      <p class="peu-llicencia">
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ca" target="_blank" rel="license noopener">
          <img src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png" alt="Llicència Creative Commons Reconeixement-NoComercial-CompartirIgual 4.0" width="88" height="31">
        </a>
        <span>Contingut sota llicència <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ca" target="_blank" rel="license noopener">CC BY-NC-SA 4.0</a></span>
      </p>
      <p class="autoria">Autor: <strong>Ian Reverté Vidiella</strong> · Pràctica 0 · Sistemes Operatius (ISOPJ1)</p>
    </footer>
  `;

  // Injecció al DOM
  const headerElem = document.getElementById("header-container");
  const footerElem = document.getElementById("footer-container");

  if (headerElem) headerElem.outerHTML = headerHTML;
  if (footerElem) footerElem.outerHTML = footerHTML;
});