import { Award, Crown, Gem, Trophy } from "lucide-react";

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: <Crown className="w-12 h-12" />,
      title: "Material Premium Eksklusif",
      description:
        "Menggunakan beton berkualitas K400 dengan teknologi terdepan, menjamin struktur kolam yang kokoh dan tahan puluhan tahun tanpa kerusakan.",
      highlight: "Standar Internasional",
    },
    {
      icon: <Gem className="w-12 h-12" />,
      title: "Teknologi Sistem Terdepan",
      description:
        "Sistem plumbing dan filtrasi berteknologi Jerman dengan presisi tinggi, menghadirkan kualitas air kristal jernih sepanjang waktu.",
      highlight: "German Technology",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Garansi Komprehensif",
      description:
        "Jaminan struktur hingga 10 tahun dan sistem mekanis 3 tahun, memberikan ketenangan pikiran total untuk investasi Anda.",
      highlight: "10 Tahun Garansi",
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Finishing Mewah Bersertifikat",
      description:
        "Sentuhan akhir dengan material import premium dan detail craftsmanship tingkat resort, menciptakan masterpiece yang memukau.",
      highlight: "Resort Grade Quality",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Crown className="w-4 h-4" />
            Keunggulan Eksklusif
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
            Mengapa Memilih <span className="text-primary">Premium Pool</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Pengalaman lebih dari 15 tahun dalam menciptakan kolam renang mewah
            untuk klien eksklusif di seluruh Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

              <div className="relative z-10">
                <div className="text-primary mb-8 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    {advantage.icon}
                  </div>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {advantage.highlight}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif group-hover:text-primary transition-colors duration-300">
                  {advantage.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4">
            <button className="bg-gradient-to-r from-primary to-primary/80 text-white px-12 py-5 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg">
              Konsultasi Eksklusif Gratis
            </button>
            <p className="text-sm text-gray-500">
              Dapatkan desain 3D dan estimasi biaya dalam 24 jam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
