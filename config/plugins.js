module.exports = ({ env }) => ({
  "strapi-algolia": {
    enabled: true,
    config: {
      apiKey: env("ALGOLIA_ADMIN_KEY"),
      applicationId: env("ALGOLIA_APP_ID"),
      contentTypes: [
        {
          name: "api::trabajo.trabajo",
          populate: {
            path: "titulo, descripcion",
          },
          hideFields: [
            "publishedAt",
            "createdAt",
            "updatedAt",
            "downloader",
            "cedulaAutor",
            "apellidoAutor",
            "nombreAutor",
            "emailAutor",
            "id",
          ],
        },
      ],
    },
  },
});
