export interface ProjectResult {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  imageSrc: string;
  client: string;
  industry: string;
  services: string[];
  description: string;
  challenge: string;
  solution: string;
  results: ProjectResult[];
  techStack: string[];
  // NEW ARCHITECTURAL FIELDS
  scopeOfWork: string;
  timeline: string;
  finalThoughts: string;
  gallery: string[];
}

export const STUDIO_PROJECTS: Project[] = [
  {
    slug: "boltshift",
    title: "Boltshift",
    year: "2025",
    imageSrc:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    client: "Boltshift Logistics",
    industry: "Logistică & Transport",
    services: ["Web Design", "Custom Development", "SEO Strategy"],
    scopeOfWork: "Strategy / Branding / SEO",
    timeline: "12 săptămâni",
    description:
      "O transformare digitală completă pentru un lider în logistică, axată pe automatizarea fluxurilor de rezervare și vizibilitate în timp real.",
    challenge:
      "Clientul folosea un sistem de management învechit care cauza întârzieri în procesarea comenzilor și o rată de abandon ridicată a clienților noi din cauza interfeței non-responsive.",
    solution:
      "Am dezvoltat o platformă Next.js ultra-rapidă, integrată cu sistemele interne de tracking prin API-uri custom. Designul a fost simplificat pentru a permite plasarea unei comenzi în mai puțin de 30 de secunde.",
    finalThoughts:
      "Site-ul Boltshift este acum o piesă centrală în creșterea lor de business, servind ca un instrument puternic pentru atragerea de noi clienți și consolidarea relațiilor cu partenerii existenți.",
    results: [
      { label: "Reducere Timp Rezervare", value: "-60%" },
      { label: "Creștere Trafic Organic", value: "+45%" },
      { label: "Scorul Core Web Vitals", value: "98/100" },
    ],
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    gallery: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586717799213-39ac12df885e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    slug: "ephemeral",
    title: "Ephemeral",
    year: "2025",
    imageSrc:
      "https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?q=80&w=1200&auto=format&fit=crop",
    client: "Ephemeral Jewels",
    industry: "E-commerce Premium",
    services: ["Brand Identity", "E-commerce Store", "Animations"],
    scopeOfWork: "Design / Development / Branding",
    timeline: "16 săptămâni",
    description:
      "Un magazin online de bijuterii care îmbină eleganța vizuală cu performanța tehnică, oferind o experiență de cumpărare cinematică.",
    challenge:
      "Produsele premium aveau nevoie de o prezentare care să denote luxul, fără a sacrifica viteza de încărcare a paginilor de produs bogate în imagini de înaltă rezoluție.",
    solution:
      "Am implementat încărcare progresivă și optimizare avansată a imaginilor, împreună cu micro-interacțiuni fluide care ghidează utilizatorul către checkout.",
    finalThoughts:
      "Efortul nostru s-a concentrat pe crearea unui sentiment de exclusivitate, unde fiecare pixel contribuie la povestea brandului Ephemeral.",
    results: [
      { label: "Rata de Conversie", value: "+22%" },
      { label: "Viteza de Încărcare", value: "0.8s" },
      { label: "Timp mediu pe pagină", value: "+3min" },
    ],
    techStack: ["React", "Custom CSS", "Shopify Headless", "GSAP"],
    gallery: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    slug: "powersurge",
    title: "Powersurge",
    year: "2024",
    imageSrc:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop",
    client: "Powersurge Energy",
    industry: "Energie Regenerabilă",
    services: ["Data Dashboard", "Enterprise Web", "UX Audit"],
    scopeOfWork: "UI/UX / Data Visualization",
    timeline: "20 săptămâni",
    description:
      "Platformă enterprise pentru monitorizarea în timp real a consumului de energie, cu peste 50.000 de puncte de date procesate secundar.",
    challenge:
      "Vizualizarea complexă a datelor era greoaie, făcând dificilă identificarea rapidă a defectelor în rețea de către operatori.",
    solution:
      "Am reconstruit tabloul de bord folosind grafice vectoriale performante și un sistem de alerte inteligente bazat pe priorități.",
    finalThoughts:
      "Powersurge a reușit să reducă timpul de răspuns la incidente cu 40%, demonstrând că designul bun salvează resurse critice.",
    results: [
      { label: "Eficiență Operatori", value: "+40%" },
      { label: "Reducere Downtime", value: "-15%" },
      { label: "Acuratețe Date", value: "99.9%" },
    ],
    techStack: ["Next.js", "Chart.js", "Recoil", "Node.js"],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    slug: "mastermail",
    title: "Mastermail",
    year: "2024",
    imageSrc:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    client: "Mastermail Agency",
    industry: "MarTech & Email",
    services: ["SaaS Platform", "UI/UX Design", "Email Templating"],
    scopeOfWork: "SaaS Design / Product Strategy",
    timeline: "14 săptămâni",
    description:
      "O platformă SaaS care democratizează accesul la campanii de email marketing complexe prin intermediul unui editor drag-and-drop intuitiv.",
    challenge:
      "Utilizatorii non-tehnici aveau dificultăți în a crea design-uri care să arate bine pe toate dispozitivele și clienții de email.",
    solution:
      "Am integrat un motor de randare riguros și un set de template-uri 'smart' care se auto-ajustează la dimensiunile ecranului.",
    finalThoughts:
      "Mastermail a devenit un standard în industria locală, ajutând peste 10.000 de utilizatori să comunice mai eficient.",
    results: [
      { label: "Utilizatori Activi", value: "+10k" },
      { label: "Timp Creare Campanie", value: "-75%" },
      { label: "Deliverability Rate", value: "99.2%" },
    ],
    techStack: ["Vue.js", "PostgreSQL", "AWS", "MJML"],
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];
