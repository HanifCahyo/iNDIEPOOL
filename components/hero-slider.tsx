"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Kontraktor Kolam Renang Terbaik",
    subtitle: "untuk Rumah & Villa Anda",
    description:
      "Desain kolam renang pribadi terbaik yang mengutamakan keindahan dan estetika sesuai dengan passion anda, sehingga menunjang aktivitas olahraga & rekreasi bagi keluarga anda.",
    image: "/luxury-blue-pool.png",
    cta: "Hubungi Kami",
    features: ["Desain Custom", "Kualitas Premium", "Garansi Resmi"],
  },
  {
    id: 2,
    title: "Kolam Renang Impian Anda",
    subtitle: "Realitas Kami",
    description:
      "Kami membawa impian Anda menjadi kenyataan dengan menyediakan layanan kolam renang berkualitas tinggi dan desain yang sesuai keinginan Anda.",
    image: "/tropical-resort-pool.png",
    cta: "Lihat Portfolio",
    features: [
      "15+ Tahun Pengalaman",
      "Tim Profesional",
      "After Sales Service",
    ],
  },
  {
    id: 3,
    title: "Teknologi Terdepan",
    subtitle: "Hasil Sempurna",
    description:
      "Menggunakan teknologi dan material terbaik untuk menciptakan kolam renang yang tidak hanya indah, tetapi juga tahan lama dan mudah perawatan.",
    image: "/modern-infinity-pool.png",
    cta: "Konsultasi Gratis",
    features: ["Teknologi Modern", "Material Premium", "Eco-Friendly"],
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-white"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center py-8 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-3 md:space-y-4">
                  <p className="text-primary font-semibold tracking-wider uppercase text-xs sm:text-sm lg:text-base">
                    Kontraktor Kolam Renang Premium
                  </p>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold leading-tight text-gray-900">
                    {slides[currentSlide].title}
                  </h1>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-primary font-medium">
                    {slides[currentSlide].subtitle}
                  </h2>
                </div>

                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium max-w-2xl">
                  {slides[currentSlide].description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {slides[currentSlide].features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-primary/10 border border-primary/20 px-3 md:px-5 py-2 md:py-3 rounded-full shadow-sm"
                    >
                      <span className="text-xs sm:text-sm lg:text-base font-semibold text-primary">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg"
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    {slides[currentSlide].cta}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg bg-transparent"
                  >
                    Lihat Portfolio
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Main Image */}
            <div className="relative order-1 lg:order-2">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt={slides[currentSlide].title}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex justify-center gap-2 md:gap-4 mt-4 md:mt-6">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                      index === currentSlide
                        ? "ring-2 ring-primary shadow-lg scale-105"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-16 h-12 md:w-20 md:h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 border border-gray-200 p-2 md:p-4 rounded-full transition-all duration-300 group shadow-lg hidden sm:block"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-700 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 border border-gray-200 p-2 md:p-4 rounded-full transition-all duration-300 group shadow-lg hidden sm:block"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-700 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 md:space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 shadow-lg ${
              index === currentSlide
                ? "bg-primary scale-125 shadow-primary/50"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/20 rounded-full hidden 2xl:block animate-pulse" />
      <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-primary/30 rounded-full hidden 2xl:block animate-pulse" />
    </section>
  );
}
