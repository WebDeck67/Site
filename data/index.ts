import { links } from "@/config";

export const gridItems = [
  {
    id: 1,
    title: "Chez WebDeck, nous croyons en la puissance de la créativité.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Disponible pour tout échange.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 z-999",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  {
    id: 4,
    title: "Passionné de technologie avec une passion pour le développement.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 6,
    title: "Vous souhaitez discuter de votre projet ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Cure by Mins - Boutique e-commerce Shopify",
    des: "Un magasin Shopify pour une marque de prêt-à-porter, proposant un thème personnalisé et un processus de paiement fluide.",
    img: "/p1.png",
    link: "https://clone-figmaa.netlify.app",
    sourceCode: "https://github.com/sanidhyy/figma-clone",
  },
  {
    id: 2,
    title: "Swan Energie - Site vitrine",
    des: "Site vitrine pour une entreprise d'économie énergétique.",
    img: "/p2.png",
    link: "https://swanenergie.fr",
    sourceCode: "https://swanenergie.fr",
  },
  {
    id: 3,
    title: "Fitavey - Boutique e-commerce Shopify",
    des: "Site de commerce pour gaine amincissante.",
    img: "/p3.png",
    link: "https://fitavey.com",
    sourceCode: "https://fitavey.com",
  },
  {
    id: 4,
    title: "Scyn rénovation - Site vitrine",
    des: "Entreprise de rénovation et de construction.",
    img: "/p4.png",
    link: "https://scynrenovation.com",
    sourceCode: "https://scynrenovation.com",
  },
] as const;

export const testimonials = [
  {
    quote: `Travailler avec ${links.ownerName} a transformé notre vision en réalité. Son professionnalisme et son engagement ont fait toute la différence.`,
    name: "Cure by Mins",
    title: "site e-commerce",
  },
  {
    quote: `Grâce à ${links.ownerName}, notre site web a atteint de nouveaux sommets en performance et en esthétique.`,
    name: "Akridi Barber",
    title: "site vitrine",
  },
  {
    quote: `La créativité de ${links.ownerName} et son souci du détail ont permis de réaliser un projet à la fois innovant et fonctionnel.`,
    name: "Scyn Rénovation",
    title: "Site vitrine",
  },
  {
    quote: `Avec ${links.ownerName}, nous avons découvert une nouvelle dimension d'innovation technologique et de design.`,
    name: "Swan Energie",
    title: "Site vitrine",
  },
  {
    quote: `Collaborer avec ${links.ownerName} a jeté les bases d'un avenir prometteur pour notre marque, alliant efficacité et originalité.`,
    name: "Fitavey",
    title: "Site e-commerce",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "Ovh cloud",
    img: "/ovh.html",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Concepteur de Site Web",
    desc: "Création d'une vitrine numérique interactive et moderne, mettant en avant le design, l'expérience utilisateur et l'innovation.",
    className: "md:col-span-3",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Développeur Frontend Web",
    desc: "Développement d'interfaces réactives pour valoriser les projets et améliorer la visibilité de votre site web.",
    className: "md:col-span-3",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Expert SEO & Marketing Digital",
    desc: "Optimisation SEO et stratégies marketing pour booster le trafic et l'engagement en ligne.",
    className: "md:col-span-3",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Responsable Transformation Digitale",
    desc: "Intégration de technologies web modernes, garantissant des performances optimales et une expérience utilisateur de qualité.",
    className: "md:col-span-3",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [

  {
    name: "Instagram",
    img: "/insta.svg",
    link: "https://www.instagram.com/webdeck67/",
  },

] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
