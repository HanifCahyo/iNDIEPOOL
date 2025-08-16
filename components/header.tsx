"use client";

import { Button } from "@/components/ui/button";
import { Search, Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border shadow-sm">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2 md:gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+62 21 1234 5678</span>
                <span className="sm:hidden">Call Us</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@aqualuxpools.com</span>
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
            <div className="text-xs md:text-sm font-medium hidden sm:block">
              Konsultasi Gratis: Hubungi Kami Sekarang
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-primary text-primary-foreground p-2 md:p-3 rounded-lg mr-2 md:mr-4">
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <div className="w-4 h-3 md:w-6 md:h-4 bg-secondary rounded-sm relative">
                  <div className="absolute inset-1 bg-primary-foreground rounded-sm opacity-30"></div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold font-serif text-foreground">
                AquaLux Pools
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground">
                Premium Pool Contractor
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Beranda
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Tentang Kami
            </a>
            <div className="relative group">
              <a
                href="#"
                className="text-foreground hover:text-primary font-medium transition-colors flex items-center"
              >
                Produk
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <a
                    href="#"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    Perlengkapan & Aksesoris Kolam Renang
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    Pompa & Filter Kolam Renang
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <a
                href="#"
                className="text-foreground hover:text-primary font-medium transition-colors flex items-center"
              >
                Jasa
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <a
                    href="#"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    Jasa Perawatan Kolam Renang
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    Jasa Pembuatan Kolam Renang
                  </a>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Artikel
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Kontak
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground hidden sm:flex"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-3 md:px-6 text-sm md:text-base">
              <span className="hidden sm:inline">Konsultasi Gratis</span>
              <span className="sm:hidden">Konsultasi</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <a
                href="#"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Beranda
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Tentang Kami
              </a>
              <div className="space-y-2">
                <div className="text-foreground font-medium">Produk</div>
                <div className="pl-4 space-y-2">
                  <a
                    href="#"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Perlengkapan & Aksesoris Kolam Renang
                  </a>
                  <a
                    href="#"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Pompa & Filter Kolam Renang
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-foreground font-medium">Jasa</div>
                <div className="pl-4 space-y-2">
                  <a
                    href="#"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Jasa Perawatan Kolam Renang
                  </a>
                  <a
                    href="#"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Jasa Pembuatan Kolam Renang
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Artikel
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Kontak
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
