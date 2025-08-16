import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <p className="text-blue-200 text-lg mb-4 font-medium">
                TUNGGU APALAGI?
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Dapatkan Penawaran Khusus untuk Konstruksi Kolam Renang
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Siap membangun kolam renang impian? Hubungi kami untuk
                mendapatkan penawaran harga spesial yang tidak boleh Anda
                lewatkan!
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Lokasi Kami</h4>
                  <p className="text-blue-100">
                    Jl. Jati Utama Raya RT 005/008 Jatibenang Baru Kec Pondok
                    Gede, Jakarta Selatan
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      Jam Operasional
                    </h4>
                    <p className="text-blue-100">Senin - Jumat: 8.00 - 22.00</p>
                    <p className="text-blue-100">
                      Sabtu - Minggu: 8.00 - 17.00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Kontak</h4>
                    <p className="text-blue-100">Telepon: 0823 1111 6863</p>
                    <p className="text-blue-100">WhatsApp: 0823 1111 6863</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Sekarang
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg bg-transparent"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Kami
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/luxury-modern-pool-renovation.png"
                alt="Konstruksi kolam renang premium"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">
                  Kolam Renang Premium dengan Teknologi Terdepan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
