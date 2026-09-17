document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const isSprintPage = /\/sprint[1-5][uw]\//i.test(currentPath);
  const pathPrefix = isSprintPage ? "../" : "";
  const pageTitle = document.title.split(" - ")[0];
  const headerElem = document.getElementById("header-container");
  const footerElem = document.getElementById("footer-container");
  const headerData = headerElem ? headerElem.dataset : {};
  const sprintMatch = currentPath.match(/sprint([1-5])([uw])\//i);
  const section = sprintMatch ? sprintMatch[2].toLowerCase() : currentPath.match(/sprint([uw])\.html/i)?.[1]?.toLowerCase();
  const sectionLabel = section === "u" ? "Ubuntu" : section === "w" ? "Windows" : "";
  const sectionPath = section ? `sprints${section}.html` : "";
  const sprintNumber = sprintMatch ? sprintMatch[1] : "";
  const title = headerData.title || (isSprintPage ? pageTitle : pageTitle === "Índex de sprints Ubuntu" || pageTitle === "Índex de sprints Windows" ? "Índex de sprints" : pageTitle);
  const subtitle = headerData.subtitle || (isSprintPage ? "Índex d'apartats d'aquest sprint" : pageTitle === "Sistemes Operatius" ? "Mòdul ISOPJ1 · Cicle Formatiu de Grau Superior" : "");
  const breadcrumb = isSprintPage
    ? `<p class="miguetes"><a href="${pathPrefix}index.html">Portada</a> / <a href="${pathPrefix}${sectionPath}">Índex de sprints ${sectionLabel}</a> / Sprint ${sprintNumber}</p>`
    : pageTitle.startsWith("Índex de sprints")
      ? `<p class="miguetes"><a href="index.html">Portada</a> / ${title}</p>`
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
        <a href="https://ianrevi.github.io/sistemes_operatius/index.html">Sistemes Operatius</a> © 2026 by
        <a href="https://github.com/IanReVi/sistemes_operatius">Ian Reverté Vidiella</a> is licensed under
        <a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International</a>
        <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
        <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
        <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
      </p>
      <p class="autoria">Autor: <strong>Ian Reverté Vidiella</strong> · Pràctica 0 · Sistemes Operatius (ISOPJ1)</p>
    </footer>
  `;

  if (headerElem) headerElem.outerHTML = headerHTML;
  if (footerElem) footerElem.outerHTML = footerHTML;
});