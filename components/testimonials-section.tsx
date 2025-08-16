/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Bapak Galih",
    location: "Pondok Indah, Jakarta Selatan",
    rating: 5,
    text: "Saya merekomendasikan untuk pembuatan kolam renang di Permata Asia Pool. Pengerjaan sangat baik dan berkualitas. Pelayanan diberikan pengerjaan air kolam dan gratis perawatan selama. Harga sesuai keinginan tapi kualitas dan pelayanan yang diberikan sangat oke.",
    beforeImage: "/damaged-pool-before.png",
    afterImage: "/luxury-modern-pool-renovation.png",
  },
  {
    id: 2,
    name: "Bapak Ridwan",
    location: "Komplek Harikum Bambu Apus, Jakarta Timur",
    rating: 5,
    text: "Pengerjaan sangat baik. Selesai sesuai waktu nya, bertanggung jawab hingga selesai. Hasil sangat memuaskan dan sesuai dengan permintaan kolam & mesin yang diinginkan. Terimakasih",
    beforeImage: "/empty-backyard-before-pool.png",
    afterImage: "/minimalist-pool-after-construction.png",
  },
  {
    id: 3,
    name: "Rani Anggreka",
    location: "Medan",
    rating: 5,
    text: "Pengalaman bekerja dengan kolamrenang.co.id luar biasa! Desain kolam renang yang mereka buat benar-benar sesuai dengan keinginan kami dan hasilnya lebih dari yang kami harapkan. Proses konstruksi juga berjalan lancar dan tim mereka sangat profesional. Kami sangat puas dan menikmati setiap momen di kolam renang baru kami.",
    beforeImage: "/overgrown-garden-before-pool.png",
    afterImage: "/tropical-resort-pool.png",
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            Testimoni Klien
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Kepuasan klien adalah prioritas utama kami. Dengarkan pengalaman
            mereka yang telah mempercayakan proyek kolam renang impian kepada
            kami.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 p-6 md:p-12">
              {/* Before/After Images */}
              <div className="space-y-4 order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="relative group">
                    <img
                      src={current.beforeImage || "/placeholder.svg"}
                      alt="Sebelum renovasi"
                      className="w-full h-32 md:h-48 object-cover rounded-xl"
                    />
                    <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-red-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                      SEBELUM
                    </div>
                  </div>
                  <div className="relative group">
                    <img
                      src={current.afterImage || "/placeholder.svg"}
                      alt="Sesudah renovasi"
                      className="w-full h-32 md:h-48 object-cover rounded-xl"
                    />
                    <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-green-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                      SESUDAH
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex flex-col justify-center order-1 lg:order-2">
                <div className="mb-4 md:mb-6">
                  <Quote className="w-8 h-8 md:w-12 md:h-12 text-primary/20 mb-3 md:mb-4" />
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6 italic">
                    "{current.text}"
                  </p>
                </div>

                <div className="flex items-center mb-3 md:mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold text-lg md:text-xl text-primary mb-1">
                    {current.name}
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground">
                    📍 {current.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between p-4 md:p-6 bg-gray-50 border-t">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="flex items-center gap-2 bg-transparent text-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Sebelumnya</span>
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? "bg-primary"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="flex items-center gap-2 bg-transparent text-sm"
              >
                <span className="hidden sm:inline">Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
