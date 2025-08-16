import Image from "next/image";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      image: "/luxury-modern-pool.png",
      title: "Kolam Renang Residensial Mewah",
      location: "Jakarta Selatan",
      type: "Kolam Pribadi",
    },
    {
      image: "/infinity-pool-city.png",
      title: "Infinity Pool Premium",
      location: "Bandung",
      type: "Villa Resort",
    },
    {
      image: "/tropical-resort-pool.png",
      title: "Hotel Swimming Pool",
      location: "Bali",
      type: "Komersial",
    },
    {
      image: "/modern-infinity-pool.png",
      title: "Kolam Minimalis Modern",
      location: "Surabaya",
      type: "Kolam Pribadi",
    },
    {
      image: "/tropical-resort-pool.png",
      title: "Resort Style Pool",
      location: "Yogyakarta",
      type: "Villa Resort",
    },
    {
      image: "/rooftop-glass-pool.png",
      title: "Rooftop Pool Premium",
      location: "Jakarta Pusat",
      type: "Apartemen",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portofolio Proyek
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Agar Anda tidak ragu, silakan lihat portofolio kami pembuatan kolam
            renang di seluruh Indonesia
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-base md:text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-1">{item.location}</p>
                  <span className="inline-block bg-primary px-2 md:px-3 py-1 rounded-full text-xs font-medium">
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button className="bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300">
              Lihat Semua Proyek
            </button>
            <button className="border-2 border-primary text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
              Konsultasi Proyek
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
