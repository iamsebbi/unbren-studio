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
    image: "/branding.jpg",
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
    image: "/web-design.jpg",
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
    image: "/social-media.jpg",
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
    image: "/content-production.jpg",
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
