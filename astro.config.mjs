import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import { SITE } from "./src/config";
import sitemap from "@astrojs/sitemap";

import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [tailwind(), svelte(), sitemap()]
});