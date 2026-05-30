import {
  Crown,
  Droplets,
  Eye,
  Feather,
  Flower2,
  Hand,
  Scissors,
  Sparkles,
  Star,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";
import planityData from "./eden-perfect-75002-paris-23v.json";

type PlanityPrice = {
  display: string;
};

type PlanityService = {
  id: string;
  name: string;
  duration: string;
  sort: number;
  price: PlanityPrice;
};

type PlanityCategory = {
  id: string;
  name: string;
  sort: number;
  services: PlanityService[];
};

export type PrestationCategory = {
  id: string;
  label: string;
};

export type PrestationService = {
  cat: string;
  icon: LucideIcon;
  name: string;
  duration: string;
  price: string;
};

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "coloration-et-meches": Droplets,
  "soins-cheveux": Sparkles,
  "coupe-de-cheveux-et-coiffure": Scissors,
  "lissage-defrisage": Wind,
  defrisage: Zap,
  tresses: Crown,
  extensions: Sparkles,
  maquillage: Eye,
  "beaute-du-regard": Eye,
  "maquillage-permanent-et-semi-permanent": Eye,
  "soin-du-visage": Flower2,
  "beaute-des-pieds": Hand,
  "soin-curly-lissage": Wind,
  locks: Crown,
  "femme-forfait-epilation-a-la-cire": Feather,
  "afro-metisse": Scissors,
  tissages: Crown,
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getCategoryIcon(slug: string): LucideIcon {
  return CATEGORY_ICONS[slug] ?? Star;
}

function getSortedCategories(): PlanityCategory[] {
  return [...planityData.categories].sort((a, b) => a.sort - b.sort);
}

export function getPrestationCategories(): PrestationCategory[] {
  return getSortedCategories().map((category) => ({
    id: slugify(category.name),
    label: category.name,
  }));
}

export const DEFAULT_PRESTATION_CATEGORY = "coloration-et-meches";

export function getPrestationServices(): PrestationService[] {
  return getSortedCategories().flatMap((category) => {
    const cat = slugify(category.name);
    const icon = getCategoryIcon(cat);

    return [...category.services]
      .sort((a, b) => a.sort - b.sort)
      .map((service) => ({
        cat,
        icon,
        name: service.name.trim(),
        duration: service.duration,
        price: service.price.display,
      }));
  });
}

export const PRESTATION_CATEGORIES = getPrestationCategories();
export const PRESTATION_SERVICES = getPrestationServices();
