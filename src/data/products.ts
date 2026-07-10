import purehomeImg from "../assets/products/purehome-water-purifier.png";
import proflowImg from "../assets/products/proflow-water-system.png";
import compactImg from "../assets/products/compact-water-purifier.png";
import filtercareImg from "../assets/products/filtercare.png";
import type { ImageMetadata } from "astro";

export type Product = {
  title: string;
  category: string;
  description: string;
  summary: string;
  image: ImageMetadata;
  imageAlt: string;
  idealFor: string[];
};

export const products: Product[] = [
  {
    title: "Arvia PureHome 7",
    category: "Evsel Su Arıtma",
    description:
      "PureHome 7, daire ve küçük aile kullanımı için tasarlanmış sessiz ve kolay bakımı yapılabilen bir içme suyu arıtma çözümüdür.",
    summary: "Mutfak altı kurulum için 7 aşamalı  içme suyu arıtma sistemi.",
    image: purehomeImg,
    imageAlt: "Arvia PureHome 7 tezgâh altı evsel su arıtma cihazı",
    idealFor: ["Daireler", "Aile kullanımı", "Mutfak altı kurulum"],
  },
  {
    title: "Arvia ProFlow",
    category: "Endüstriyel Sistemler",
    description:
      "Arvia ProFlow, yoğun kullanımda su tadını stabil tutmak isteyen işletmeler için geliştirilmiş yüksek kapasiteli sistemdir.",
    summary:
      "İşletmelerin yüksek kapasiteli temiz su ihtiyacı için geliştirilen profesyonel sistem.",
    image: proflowImg,
    imageAlt: "Arvia ProFlow endüstriyel su arıtma sistemi",
    idealFor: ["İşletmeler", "Yüksek Kullanım"],
  },
  {
    title: "Arvia Compact",
    category: "Kompakt Sistemler",
    description:
      "Küçük alanlar için geliştirilen kompakt yapısıyla, yüksek performanslı su arıtmayı modern ve pratik bir tasarımla sunar.",
    summary:
      "Küçük mutfaklar için geliştirilen, az yer kaplayan modern su arıtma çözümü.",
    image: compactImg,
    imageAlt: "Kompakt tasarımlı Arvia su arıtma cihazı",
    idealFor: ["Küçük alanlar", "Kolay kullanım"],
  },
  {
    title: "Arvia FilterCare Bakım Paketi",
    category: "Bakım Paketi",
    description:
      "FilterCare, cihaz bakım tarihlerini kaçırmak istemeyen ev ve işletmeler için hatırlatma, filtre değişimi ve performans kontrolünü tek pakette toplar.",
    summary:
      "Arıtma cihazları için planlı filtre değişimi ve performans kontrol paketi.",
    image: filtercareImg,
    imageAlt: "Arvia bakım paketi",
    idealFor: [
      "Mevcut cihaz sahipleri",
      "İşletmeler",
      "Düzenli bakım isteyen kullanıcılar",
    ],
  },
];
