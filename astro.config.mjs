import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react({
    include: ['**/react/*']
  })],
  site: "https://example.com",
  markdown: { shikiConfig: { theme: 'dracula' } },
});
