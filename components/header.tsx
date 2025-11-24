"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, Home, Info, Shield, FileText } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/90 shadow-md border-b-2 border-primary/30">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/favicon.ico"
                alt="TopIgreHR Logo"
                width={50}
                height={50}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-primary">TopIgre</span>
                <span className="text-secondary">HR</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/">
              <Button variant="ghost" className="gap-2 hover:bg-primary/10 hover:text-primary">
                <Home className="h-4 w-4" />
                Početna
              </Button>
            </Link>
            <Link href="/o-nama">
              <Button variant="ghost" className="gap-2 hover:bg-primary/10 hover:text-primary">
                <Info className="h-4 w-4" />O nama
              </Button>
            </Link>
            <Link href="/politika-privatnosti">
              <Button variant="ghost" className="gap-2 hover:bg-primary/10 hover:text-primary">
                <Shield className="h-4 w-4" />
                Privatnost
              </Button>
            </Link>
            <Link href="/cookie-politika">
              <Button variant="ghost" className="gap-2 hover:bg-primary/10 hover:text-primary">
                <FileText className="h-4 w-4" />
                Kolačići
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Home className="h-4 w-4" />
                Početna
              </Button>
            </Link>
            <Link href="/o-nama" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Info className="h-4 w-4" />O nama
              </Button>
            </Link>
            <Link href="/politika-privatnosti" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Shield className="h-4 w-4" />
                Privatnost
              </Button>
            </Link>
            <Link href="/cookie-politika" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4" />
                Kolačići
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
