import type { Site } from "./types";

export const SITE: Site = {
  language: "en",
  author: "Robertsson",
  title: "Astroton",
  description: {
    short: "Launch your new Astro site by harnessing the power of Skeleton with Astroton",
    medium: "Effortlessly launch your Astro site with Astroton, featuring pre-configured Astro settings and seamless integration of Skeleton for a polished foundation.",
    long: "Effortlessly launch your new Astro site by harnessing the power of Skeleton with Astroton. This theme comes pre-configured with essential Astro settings and seamlessly integrates the versatility of Skeleton, providing you with a streamlined and polished foundation for your website.",
  },
  domain: {
    name: "Astroton",
    url: "https://astroton.onrender.com",
  },
  legal: {
    name: "Robertsson Inc.",
    identityNumber: "123456789",
    vat: "VAT123456",
    phone: "+1234567890",
    appName: "Astroton",
    type: "Company",
  },
  address: {
    street: "123 Astro Street",
    city: "Astro City",
    zip: "12345",
    country: "Astroland",
  },
  socialMedia: [
    {
      platform: "GitHub",
      link: "https://github.com/Robertsson/astroton",
    },
  ],
  features: {
    title: "Features",
    items: [
      {
        title: "Feature 1",
        icon: "icon1",
        description: "Description of feature 1",
      },
      {
        title: "Feature 2",
        icon: "icon2",
        description: "Description of feature 2",
      },
    ],
  },
  seo: {
    metaTitle: "Astroton - Astro Theme with Skeleton",
    metaDescription: "Launch your new Astro site by harnessing the power of Skeleton with Astroton",
    keywords: ["Astro", "Skeleton", "Theme"],
  },
  analytics: {
    googleAnalyticsId: "UA-12345678-1",
    counterAnalyticsId: "12345678",
    facebookPixelId: "1234567890",
  },
  theme: {
    primaryColor: "#ff0000",
    secondaryColor: "#00ff00",
    surfaceColor: "#ffffff",
    fontFamily: "Arial, sans-serif",
  },
  contact: {
    email: "contact@astroton.com",
    phone: "+1234567890",
    fax: "+0987654321",
  },
  localization: {
    defaultLanguage: "en",
    supportedLanguages: ["en", "es", "fr", "de"],
  },
  maintenanceMode: false,
};