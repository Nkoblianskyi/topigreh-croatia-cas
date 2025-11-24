"use client"

export function HeroSection() {
  const currentDate = new Date()
  const monthNames = [
    "siječnja",
    "veljače",
    "ožujka",
    "travnja",
    "svibnja",
    "lipnja",
    "srpnja",
    "kolovoza",
    "rujna",
    "listopada",
    "studenoga",
    "prosinca",
  ]

  return (
    <section className="relative bg-secondary overflow-hidden h-[280px]">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/elegant-casino-table-with-roulette-wheel--poker-ca.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="h-full flex items-center">
          {/* Left Content - Compact */}
          <div className="max-w-2xl space-y-4 text-white">
            <div className="text-xs text-blue-200">
              Ažurirano {currentDate.getDate()}. {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Najbolja <span className="text-accent">Kasina</span> u Hrvatskoj
            </h1>

            <p className="text-sm md:text-base text-blue-100 max-w-xl">
              Stručno testirano, neovisno ocijenjeno. Pronađite savršeno kasino za sigurnu zabavu.
            </p>

            <div className="flex flex-wrap gap-4 items-center pt-2 text-xs text-blue-100">
              <span>✓ Licencirana kasina</span>
              <span>•</span>
              <span>✓ Odgovorna igra</span>
              <span>•</span>
              <span>✓ SSL enkripcija</span>
              <span>•</span>
              <span>✓ 18+</span>
              <span>•</span>
              <span>✓ Provjereno</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
