"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { X } from "lucide-react"
import { topCasino } from "@/lib/casinos"

export default function PromotionalModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-500">
      <div className="relative max-w-lg w-full animate-in zoom-in-95 duration-500">
        <Link href={topCasino.url} target="_blank" rel="noopener noreferrer">
          <div className="bg-card rounded-2xl overflow-hidden shadow-2xl border border-border transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <div className="bg-gradient-to-r from-primary to-accent p-6 text-center">
              <div className="inline-block bg-white/20 px-4 py-1.5 rounded-lg mb-2">
                <span className="text-xs font-bold text-white uppercase tracking-wide">Ekskluzivna ponuda</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">Najbolje rangiran kasino</h2>
              <p className="text-sm text-white/90">Isprobajte #1 kasino platformu u Hrvatskoj</p>
            </div>

            <div className="p-6 space-y-4">
              <div className="bg-white rounded-xl p-4 border border-border shadow-md flex justify-center">
                <Image
                  src={topCasino.logo || "/placeholder.svg"}
                  alt={topCasino.name}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                  <span className="text-xl font-bold text-primary">{topCasino.rating}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({topCasino.votes.toLocaleString()} glasova)</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/20 text-center">
                <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                  Bonus dobrodošlice
                </p>
                <p className="text-3xl font-bold text-foreground">{topCasino.bonus}</p>
              </div>

              <div className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold py-4 px-6 rounded-xl text-base transition-all shadow-lg hover:shadow-xl text-center">
                Posjeti kasino
              </div>

              <p className="text-xs text-muted-foreground text-center">{topCasino.terms}</p>
            </div>
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
