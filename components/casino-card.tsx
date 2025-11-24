import Link from "next/link"
import { Star, ArrowRight, CheckCircle2, Trophy } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Casino } from "@/lib/casinos"
import Image from "next/image"

interface CasinoCardProps {
  casino: Casino
  isTopChoice?: boolean
  rank?: number
}

function StarRating({ rating }: { rating: number }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    const fillPercentage = Math.min(Math.max(((rating - (i - 1)) / 0.2) * 20, 0), 100)
    stars.push(
      <div key={i} className="relative">
        <Star className="h-4 w-4 md:h-5 md:w-5 text-gray-300" />
        <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
          <Star className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />
        </div>
      </div>,
    )
  }
  return <div className="flex gap-0.5">{stars}</div>
}

export function CasinoCard({ casino, isTopChoice = false, rank }: CasinoCardProps) {
  const getBadgeVariant = (rank?: number) => {
    if (rank === 1) return { text: "#1 IZBOR", class: "bg-gradient-to-r from-primary to-accent text-white" }
    if (rank === 2) return { text: "TOP POPULAR", class: "bg-gradient-to-r from-accent to-primary text-white" }
    if (rank === 3) return { text: "PREMIUM", class: "bg-secondary text-secondary-foreground" }
    return { text: "", class: "" }
  }

  const badgeInfo = getBadgeVariant(rank)
  const isTopRanked = rank && rank <= 3

  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:shadow-xl border-2 ${
        rank === 1
          ? "border-primary shadow-lg shadow-primary/20 bg-gradient-to-br from-card to-primary/5"
          : "border-border hover:border-primary/50 bg-card"
      }`}
    >
      <div className="relative">
        {/* Rank Badge */}
        {isTopRanked && (
          <div
            className={`absolute top-0 left-0 z-10 ${badgeInfo.class} px-6 py-2 rounded-br-2xl font-bold text-sm shadow-lg`}
          >
            {badgeInfo.text}
          </div>
        )}

        <div className="p-6">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-[200px_1fr_auto] gap-6 items-center">
            {/* Logo */}
            <div className="flex items-center justify-center bg-white rounded-xl p-4 border-2 border-border shadow-sm">
              <Image
                width={180}
                height={120}
                src={casino.logo || "/placeholder.svg"}
                alt={`${casino.name} logo`}
                className="w-full h-28 object-contain"
              />
            </div>

            {/* Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <StarRating rating={casino.rating} />
                    <span className="text-lg font-bold text-primary">{casino.rating}</span>
                    <span className="text-sm text-muted-foreground">({casino.votes} recenzija)</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg font-semibold text-muted-foreground">Bonus dobrodošlice</span>
                </div>
                <p className="text-xl font-extrabold text-foreground">{casino.bonus}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-1 bg-background">
                  <CheckCircle2 className="h-3 w-3" />
                  Brze isplate
                </Badge>
                <Badge variant="outline" className="gap-1 bg-background">
                  <Trophy className="h-3 w-3" />
                  Vrhunska podrška
                </Badge>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 items-center">
              <Link href={casino.url} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button
                  size="lg"
                  className={`w-full font-bold shadow-lg hover:shadow-xl transition-all group ${
                    rank === 1
                      ? "bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white"
                      : "bg-primary hover:bg-accent text-primary-foreground"
                  }`}
                >
                  Posjeti kasino
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-4">
            <div className="flex gap-3 items-start">
              <div className="w-36 h-24 flex-shrink-0 bg-white rounded-lg p-2 border border-border">
                <Image
                  width={140}
                  height={90}
                  src={casino.logo || "/placeholder.svg"}
                  alt={`${casino.name}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center flex-col justify-center text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-2.5 border border-primary/20">
                <p className="text-xs text-muted-foreground mb-0.5">Bonus dobrodošlice</p>
                <p className="text-sm font-bold text-foreground leading-tight">{casino.bonus}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 justify-center bg-background/50 rounded-lg p-2.5 border border-border">
              <StarRating rating={casino.rating} />
              <span className="text-base font-bold text-primary">{casino.rating}</span>
              <span className="text-sm text-muted-foreground">({casino.votes} recenzija)</span>
            </div>

            <Link href={casino.url} target="_blank" rel="noopener noreferrer">
              <Button
                className={`w-full font-semibold ${
                  rank === 1
                    ? "bg-gradient-to-r from-primary to-accent text-white"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Posjeti kasino
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Terms */}
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">{casino.terms}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
