import { CasinoCard } from "./casino-card"
import { casinos } from "@/lib/casinos"

export function RankingsSection() {
  return (
    <section id="rankings" className="px-4 py-12 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 hidden md:block">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Najnoviji </span>
            <span className="text-primary">Rejting Kasina</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ažurirano mjesečno prema našim testovima i recenzijama
          </p>
        </div>

        <div className="space-y-6">
          {casinos.map((casino, index) => (
            <CasinoCard key={casino.name} casino={casino} isTopChoice={casino.isTopChoice} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
