export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
}

export const STUDIO_SERVICES: ServiceItem[] = [
  {
    id: "branding",
    number: "(001)",
    title: "Identitate de Brand",
    description:
      "Creăm identități vizuale care rezonează și dăinuie. De la concept la manual de brand, construim fundația succesului tău.",
    image: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    categories: [
      "Identitate",
      "Strategie",
      "Sistem Vizual",
      "Design Logo",
      "Voce Brand",
      "Ghid de Brand",
    ],
  },
  {
    id: "web-design",
    number: "(002)",
    title: "Dezvoltare Web de Performanță",
    description:
      "Experiențe digitale imersive, optimizate pentru performanță și conversie. Imbinăm estetica de top cu funcționalitatea impecabilă.",
    image: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    categories: [
      "UX/UI",
      "Next.js",
      "Motion Design",
      "E-commerce",
      "Performanță",
      "Integrare CMS",
    ],
  },
  {
    id: "social-media",
    number: "(003)",
    title: "Strategie Social Media",
    description:
      "Amplificăm prezența brandului tău în social media prin conținut creativ și strategii axate pe rezultate măsurabile.",
    image: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    categories: [
      "Creare Conținut",
      "Ads",
      "Management",
      "Analiză",
      "Influencer Marketing",
      "SEO",
    ],
  },
  {
    id: "content-production",
    number: "(004)",
    title: "Producție Conținut Studio",
    description:
      "Povestim vizual prin fotografie și video de înaltă calitate. Capturăm esența brandului tău în fiecare cadru.",
    image: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    categories: [
      "Fotografie",
      "Videografie",
      "Post-Producție",
      "Storyboarding",
      "Regie",
      "Colorizare",
    ],
  },
];
