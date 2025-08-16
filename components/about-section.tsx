import { Clock, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const stats = [
  {
    icon: Clock,
    title: "Berpengalaman Lebih Dari 20 Tahun",
    description: "Pengalaman panjang dalam industri konstruksi kolam renang",
  },
  {
    icon: Users,
    title: "200+ Client Merasa Puas",
    description: "Kepercayaan klien adalah prioritas utama kami",
  },
  {
    icon: Shield,
    title: "Bergaransi Sampai 10 Tahun",
    description: "Jaminan kualitas untuk setiap proyek yang kami kerjakan",
  },
];

export default function AboutSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-foreground mb-4 md:mb-6">
              Komitmen Kami Sebagai Penyedia Layanan Kolam Renang
            </h2>
            <div className="space-y-4 md:space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                Sebagai kontraktor kolam renang profesional, kami dengan senang
                hati akan mendampingi Anda untuk segala urusan kolam renang
                Anda. Mulai dari proses yang paling awal yaitu perencanaan
                konstruksi yang meliputi konsultasi,
                <span className="font-semibold"> budgeting</span>, survey
                lokasi, pembuatan gambar kerja dan 3D model kolam renang serta
                RAB, proses maintenance dan perawatan, treatment, renovasi dan
                lain sebagainya.
              </p>
              <p>
                Dengan perencanaan yang baik serta pengawasan yang ketat dalam
                setiap prosesnya, kami yakin hasil pekerjaan akan sangat
                optimal, efisien dan tidak mungkin mengecewakan.
              </p>
              <p>
                Layanan kami telah menjangkau berbagai daerah di Indonesia.
                Banyak kolam renang di DKI Jakarta, Semarang, Medan, Bogor,
                Surabaya, Padang, Sukabumi, Batam, Bali dan berbagai kota
                lainnya, bahkan beberapa kolam renang di Malaysia dan Singapura
                telah berhasil kami tangani dengan baik.
              </p>
              <p>
                <span className="font-semibold">
                  Selama lebih dari 20 tahun
                </span>
                , ratusan kolam renang telah kami bangun dan kami pelihara
                dengan baik dan masih berfungsi dan tetap indah hingga saat ini.
              </p>
            </div>
            <div className="mt-6 md:mt-8">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base">
                Dapatkan Penawaran Kolam Renang
              </Button>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <Image
              src="/luxury-modern-pool.png"
              alt="Luxury Swimming Pool"
              width={600}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary text-white rounded-lg p-6 md:p-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                    {stat.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
