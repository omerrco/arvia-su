import {
  Building2,
  Droplets,
  Funnel,
  Wrench,
  type IconNode,
} from "@lucide/astro";

type ServiceIcon = typeof Droplets;

export type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    title: "Evsel Su Arıtma",
    description:
      "Eviniz için güvenilir ve yüksek kaliteli içme suyu çözümleri.",
    icon: Droplets,
  },
  {
    title: "Bakım ve Onarım",
    description: "Arıtma sistemleri için profesyonel bakım ve teknik servis.",
    icon: Wrench,
  },
  {
    title: "Filtre Değişimi",
    description:
      "Cihazınızın verimli çalışması için periyodik filtre değişimi.",
    icon: Funnel,
  },
  {
    title: "Kurumsal Çözümler",
    description: "İşletmelere özel yüksek kapasiteli su arıtma sistemleri.",
    icon: Building2,
  },
];
