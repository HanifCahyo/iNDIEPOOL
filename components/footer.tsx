import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded opacity-90"></div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold">Premium Pool</h3>
                <p className="text-xs md:text-sm text-gray-400">Contractor</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
              Kontraktor kolam renang berpengalaman lebih dari 20 tahun dan
              telah memiliki badan hukum resmi untuk semua jenis konstruksi
              kolam renang.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
              Tentang Kami
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                >
                  Company Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                >
                  Layanan Kami
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                >
                  Link Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                >
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
              Layanan Pelanggan
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                >
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                >
                  Layanan Purna Jual
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                >
                  Legalitas Perusahaan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
              Hubungi Kami
            </h4>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm md:text-base text-gray-300">
                    Sen - Sab, 7:00 - 17:00
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm md:text-base text-gray-300">
                    Jl. Moh. Kahfi I No.67, Jagakarsa, Jakarta Selatan 12620
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm md:text-base text-gray-300">
                    +62 812-3180-0708
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm md:text-base text-gray-300">
                    permataasiapool@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <Button className="w-full mt-4 md:mt-6 bg-green-600 hover:bg-green-700 text-sm md:text-base">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Kami
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © 2024 Premium Pool Contractor. All Rights Reserved.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
