export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Kurulum öncesinde ihtiyacımızı ayrıntılı şekilde dinlediler. Gereksiz bir sistem önermek yerine evimize uygun çözümü sundular. Kurulum da oldukça temiz tamamlandı.",
    name: "Mert Aydın",
    role: "Ev tipi sistem kullanıcısı",
    location: "İstanbul",
  },
  {
    quote:
      "İşletmemizde günlük su tüketimi oldukça yüksek. Kurulan sistemden sonra hem su kalitesi hem de bakım sürecinin takibi çok daha düzenli hale geldi.",
    name: "Selin Kaya",
    role: "İşletme yöneticisi",
    location: "Kocaeli",
  },
  {
    quote:
      "Filtre değişim zamanlarını takip etmek zorunda kalmıyoruz. Servis ekibi zamanı geldiğinde iletişime geçiyor ve bakım sürecini hızlıca tamamlıyor.",
    name: "Burak Demir",
    role: "Bakım paketi müşterisi",
    location: "İstanbul",
  },
];
