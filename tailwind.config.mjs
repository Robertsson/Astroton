/** @type {import('tailwindcss').Config} */
import { join } from "path";
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from "@skeletonlabs/tw-plugin";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}"
    ),
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
	forms,
	typography,
    skeleton({
      themes: { preset: [{name: "skeleton", enhancements: true },{name: "wintry", enhancements: true }] },
    }),
  ],
};
