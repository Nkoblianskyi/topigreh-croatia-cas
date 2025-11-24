"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Cookie } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/98 backdrop-blur-lg border-t-2 border-primary/30 shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Cookie className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-foreground mb-1">Kolačići i privatnost</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Koristimo kolačiće za poboljšanje iskustva i personalizaciju sadržaja. Nastavkom korištenja pristajete
                na upotrebu.{" "}
                <Link
                  href="/cookies"
                  className="text-primary hover:text-accent underline font-medium transition-colors"
                >
                  Saznajte više
                </Link>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <Button
              onClick={declineCookies}
              variant="outline"
              className="flex-1 sm:flex-none border-border hover:bg-muted bg-transparent"
            >
              Odbij
            </Button>
            <Button
              onClick={acceptCookies}
              className="flex-1 sm:flex-none bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold shadow-lg"
            >
              Prihvati sve
            </Button>
            <Button onClick={declineCookies} variant="ghost" size="icon" className="hidden sm:flex">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
