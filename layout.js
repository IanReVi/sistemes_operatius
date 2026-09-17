document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const isSprintPage = /\/sprint[1-3][uw]\//i.test(currentPath);
  const pathPrefix = isSprintPage ? "../" : "";
  const pageTitle = document.title.split(" - ")[0];
  const headerElem = document.getElementById("header-container");
  const footerElem = document.getElementById("footer-container");
  const headerData = headerElem ? headerElem.dataset : {};
  const sprintMatch = currentPath.match(/sprint([1-3])([uw])\//i);
  const section = sprintMatch ? sprintMatch[2].toLowerCase() : currentPath.match(/sprint([uw])\.html/i)?.[1]?.toLowerCase();
  const sectionLabel = section === "u" ? "Ubuntu" : section === "w" ? "Windows" : "";
  const sectionPath = section ? `sprints${section}.html` : "";
  const sprintNumber = sprintMatch ? sprintMatch[1] : "";
  const title = headerData.title || (isSprintPage ? pageTitle : pageTitle === "Índex de sprints Ubuntu" || pageTitle === "Índex de sprints Windows" ? "Índex de sprints" : pageTitle);
  const subtitle = headerData.subtitle || (isSprintPage ? "Índex d'apartats d'aquest sprint" : pageTitle === "Sistemes Operatius" ? "Mòdul ISOPJ1 · Cicle Formatiu de Grau Superior" : "");
  const breadcrumb = isSprintPage
    ? `<p class="miguetes"><a href="${pathPrefix}index.html">Portada</a> / <a href="${pathPrefix}${sectionPath}">Índex de sprints ${sectionLabel}</a> / Sprint ${sprintNumber}</p>`
    : pageTitle.startsWith("Índex de sprints")
      ? `<p class="miguetes"><a href="index.html">Portada</a> / Índex de sprints</p>`
      : "";

  const headerHTML = `
    <header class="hero">
      <nav class="hero-nav">
        <a href="${pathPrefix}index.html">Portada</a>
        <a href="${pathPrefix}sprintsu.html">Índex de sprints Ubuntu</a>
        <a href="${pathPrefix}sprintsw.html">Índex de sprints Windows</a>
        <a href="https://github.com/IanReVi/sistemes_operatius/" target="_blank" rel="noopener">Codi a GitHub ↗</a>
      </nav>
      <div class="hero-titol">
        ${breadcrumb}
        <h1>${title}</h1>
        ${subtitle ? `<p class="subtitol">${subtitle}</p>` : ""}
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

  if (headerElem) headerElem.outerHTML = headerHTML;
  if (footerElem) footerElem.outerHTML = footerHTML;
});