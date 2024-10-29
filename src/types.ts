export type Site = {
    language: string;
    author: string;
    title: string;
    description: Description;
    domain: Domain;
    legal: Legal;
    address: Address;
    socialMedia: SocialMedia[];
    features: Features;
    seo: SEO;
    analytics: Analytics;
    theme: Theme;
    contact: Contact;
    localization: Localization;
    maintenanceMode: boolean;
};

export type Description = {
    short: string;
    medium: string;
    long: string;
};

export type Domain = {
    name: string;
    url: string;
};

export type Legal = {
    name: string;
    identityNumber: string;
    vat: string;
    phone: string;
    appName: string;
    type: string;
};

export type Address = {
    street: string;
    city: string;
    zip: string;
    country: string;
};

export type SocialMedia = {
    platform: string;
    link: string;
};

export type FeatureItem = {
    title: string;
    icon: string;
    description: string;
};

export type Features = {
    title: string;
    items: FeatureItem[];
};

export type SEO = {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
};

export type Analytics = {
    googleAnalyticsId: string;
    counterAnalyticsId: string;
    facebookPixelId: string;
};

export type Theme = {
    primaryColor: string;
    secondaryColor: string;
    surfaceColor: string;
    fontFamily: string;
};

export type Contact = {
    email: string;
    phone: string;
    fax?: string;
};

export type Localization = {
    defaultLanguage: string;
    supportedLanguages: string[];
};