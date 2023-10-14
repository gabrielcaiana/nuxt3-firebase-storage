export default defineNuxtConfig({
  app: {
    head: {
      title: "nuxt-firebase-storage",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["nuxt-icon"],
  runtimeConfig: {
    public: {
      firebaseApiKey: "",
      firebaseAppId: "",
      firebaseAuthDomain: "",
      firebaseProjectId: "",
      firebaseStorageBucket: "",
      firebaseMessagingSenderId: "",
      firebaseMeasurementId: "",
    },
  },
});
