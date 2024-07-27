// forzar el idioma español
localStorage.setItem("strapi-admin-language", "es");

// cambiar los atributos del head
document.title = "Aurora";

// cambiar el favicon
const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = "/img/favicon.png";
document.head.appendChild(favicon);

//cargar css personalizado

// Crear un nuevo elemento <link>
const css = document.createElement("link");
css.rel = "stylesheet";
css.href = "/css/style.css";
document.head.appendChild(css);


const replaceText = (searchText, replaceText) => {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null // Este es el tercer argumento, el filtro opcional
  );
  let node;
  while ((node = walker.nextNode())) {
    node.nodeValue = node.nodeValue.replace(
      new RegExp(searchText, "gi"),
      replaceText
    );
  }
};

// Crear un observador de mutaciones
const observer = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      // Verificar si "Loading content." ya no está en el DOM
      if (!document.body.textContent.includes("Loading content.")) {
        // Ejecutar replaceText y desconectar el observador
        replaceText("Strapi", "Aurora");
        observer.disconnect();
      }
    }
  }
});

// Función para iniciar el observador
const startObserving = () => {
  // Configurar el observador para observar cambios en el DOM
  observer.observe(document.body, { childList: true, subtree: true });
};

// Iniciar el observador por primera vez
startObserving();

// Escuchar cambios en la URL
window.addEventListener("popstate", () => {
  // Reiniciar el observador cuando cambie la URL
  observer.disconnect();
  startObserving();
});
