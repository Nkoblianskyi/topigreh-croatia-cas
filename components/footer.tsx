"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Facebook, Twitter, Instagram, Shield, Award } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background decoration */}

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex items-center gap-3">
                <Image
                  src="/favicon.ico"
                  alt="TopIgreHR"
                  width={45}
                  height={45}
                  className="group-hover:scale-110 transition-transform"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold">
                    <span className="text-accent">TopIgre</span>
                    <span className="text-white">HR</span>
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-sm text-blue-100 leading-relaxed mb-6">
              Vaš pouzdani vodič kroz svijet online kasina u Hrvatskoj. Stručne recenzije, objektivne ocjene.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-accent rounded-full" />
              Brzi Linkovi
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#rankings"
                  className="text-sm text-blue-100 hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-accent transition-colors" />
                  Top Kasina
                </Link>
              </li>
              <li>
                <Link
                  href="/o-nama"
                  className="text-sm text-blue-100 hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-accent transition-colors" />O
                  nama
                </Link>
              </li>
              <li>
                <Link
                  href="/#guide"
                  className="text-sm text-blue-100 hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-accent transition-colors" />
                  Vodič za izbor
                </Link>
              </li>
              <li>
                <Link
                  href="/#responsible-gaming"
                  className="text-sm text-blue-100 hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-accent transition-colors" />
                  Odgovorno kockanje
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-accent rounded-full" />
              Pravne informacije
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/politika-privatnosti"
                  className="text-sm text-blue-100 hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-accent transition-colors" />
                  Politika privatnosti
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-politika"
                  className="text-sm text-blue-100 hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-accent transition-colors" />
                  Politika kolačića
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Features */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-accent rounded-full" />
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-blue-100 hover:text-accent transition-colors">
                  info@topigrehr.com
                </p>
              </li>
            </ul>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <Shield className="h-4 w-4 text-accent" />
                <span>100% Sigurno</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <Award className="h-4 w-4 text-accent" />
                <span>Licencirani operatori</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Gaming Logos */}
        <div className="border-t border-white/20 pt-10 mb-10">
          <h3 className="text-lg font-bold mb-6 text-center">Odgovorno kockanje</h3>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <a
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all"
            >
              <Image
                src="/hupis.png"
                alt="HUPIS"
                width={100}
                height={50}
                className="h-10 w-auto object-contain opacity-80 hover:opacity-100"
              />
            </a>
            <a
              href="https://www.pbsvi.hr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all"
            >
              <Image
                src="/pbsvi.svg"
                alt="PBSVI"
                width={90}
                height={40}
                className="h-8 w-auto object-contain opacity-80 hover:opacity-100"
              />
            </a>
            <a
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all"
            >
              <Image
                src="/gamble.webp"
                alt="GambleAware"
                width={90}
                height={40}
                className="h-8 w-auto object-contain opacity-80 hover:opacity-100"
              />
            </a>
            <a
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all"
            >
              <Image
                src="/gamecare-new.svg"
                alt="GamCare"
                width={100}
                height={50}
                className="h-10 w-auto object-contain opacity-80 hover:opacity-100"
              />
            </a>
            <a
              href="https://www.gamstop.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all"
            >
              <Image
                src="/gamstop.svg"
                alt="GamStop"
                width={100}
                height={50}
                className="h-10 w-auto object-contain opacity-80 hover:opacity-100"
              />
            </a>
          </div>

          <div className="mt-8 bg-white/5 border border-white/10 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-xs text-blue-100 leading-relaxed text-center">
              <strong className="text-white">Važno upozorenje:</strong> Kockanje može biti ovisnost. Igrajte odgovorno i
              samo ako imate 18+ godina. Ova stranica sadrži affiliate linkove - možemo primiti proviziju, no to ne
              utječe na naše objektivne recenzije. Sve preporuke temeljene su na detaljnim testiranjima.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-blue-100">
            © {currentYear} <span className="font-bold text-accent">topigrehr.com</span> · Sva prava pridržana
          </div>
          <div className="flex items-center gap-2 text-blue-100">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Made with ❤️ in Croatia
          </div>
        </div>
      </div>
    </footer>
  )
}
