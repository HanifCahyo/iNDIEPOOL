import {
  Wrench,
  MessageCircle,
  Waves,
  CheckCircle,
  Hammer,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Hammer,
    title: "Jasa Pembuatan Kolam Renang",
    description:
      "Kolam renang memerlukan perencanaan yang matang dalam pembuatannya. Untuk itu kami menerapkan SOP yang ketat untuk memastikan hasil yang optimal.",
    link: "#",
  },
  {
    icon: Wrench,
    title: "Jasa Perawatan Kolam Renang",
    description:
      "Mata pedih, tumbuhnya jamur dan bakteri, air yang tidak keruh dan berbagai masalah akan muncul jika kolam renang tidak dirawat dengan baik.",
    link: "#",
  },
  {
    icon: MessageCircle,
    title: "Konsultasi Segala Jenis Kolam Renang",
    description:
      "Jika Anda membutuhkan konsultasi dan pertanyaan seputar kolam renang, kami dengan senang hati akan membantu memberikan solusi terbaik.",
    link: "#",
  },
  {
    icon: Waves,
    title: "Penyedia Peralatan Dan Obat Kolam Renang",
    description:
      "Kami memiliki persediaan obat dan peralatan kolam renang sendiri sehingga kami berani menjamin jika harga kami lebih kompetitif.",
    link: "#",
  },
  {
    icon: CheckCircle,
    title: "Jasa Treatment & Maintenance Kolam Renang",
    description:
      "Kolam renang yang sudah terlalu lama tidak digunakan membutuhkan perlakuan khusus agar dapat digunakan kembali dengan optimal.",
    link: "#",
  },
  {
    icon: Hammer,
    title: "Jasa Renovasi Kolam Renang",
    description:
      "Seperti karya yang lain, model kolam renang juga memiliki tren sendiri. Pada jangka waktu tertentu, kolam renang juga memerlukan renovasi.",
    link: "#",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-foreground mb-4">
            Layanan dan Jasa Kontraktor Kolam Renang Untuk
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif text-primary mb-4 md:mb-6">
            Rumah Pribadi, Hotel, dan Tempat Wisata
          </h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto px-4">
            Kami menyediakan layanan komprehensif untuk semua kebutuhan kolam
            renang Anda, dari perencanaan hingga perawatan berkelanjutan dengan
            standar kualitas tertinggi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    variant="outline"
                    className="text-primary border-primary hover:bg-primary hover:text-white bg-transparent text-sm md:text-base"
                  >
                    Selengkapnya
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
