import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  integrations: [tailwind()],

  output: isDev ? "static" : "server",

  ...(isDev
    ? {}
    : {
        adapter: cloudflare(),
        image: {
          service: {
            entrypoint: "@astrojs/cloudflare/image-service",
          },
        },
      }),
});