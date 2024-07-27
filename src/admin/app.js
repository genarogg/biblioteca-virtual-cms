const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'en
    "es",
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  defaultLocale: "es", // Establecer español como idioma por defecto
};

const bootstrap = (app) => {
  console.log(app);

  //ejecuta una funcion es unaa etiqueta script
  const script = document.createElement("script");
  script.src = "/js/replaceText.js";
  script.type = "module"; // Establecer el tipo de script como módulo ESM
  document.body.appendChild(script);
};

export default {
  config,
  bootstrap,
};
