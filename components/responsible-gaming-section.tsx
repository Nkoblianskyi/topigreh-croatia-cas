import { Card } from "@/components/ui/card"

export function ResponsibleGamingSection() {
  return (
    <section id="responsible-gaming" className="py-8 md:py-12 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block mb-3 bg-destructive/10 text-destructive px-4 py-1.5 text-xs md:text-sm font-semibold rounded-full border border-destructive/30">
            Važna informacija 18+
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            <span className="text-foreground">Odgovorno </span>
            <span className="text-primary">Kockanje</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Kockanje treba biti zabava, ne način zarade ili bijeg od problema
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          {/* Warning */}
          <Card className="p-4 md:p-6 bg-gradient-to-r from-destructive/10 to-destructive/5 border-2 border-destructive/30">
            <h3 className="text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-4">Upozorenje o rizicima</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-2 md:mb-4">
              Kockanje može uzrokovati ozbiljne financijske, psihičke i socijalne probleme. Prema studijama, približno
              2-3% populacije razvije probleme s kockanjem. Ono što počinje kao nevina zabava može postati destruktivna
              ovisnost koja uništava živote, obitelji i karijere.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Nikada ne kockajte novac koji ne možete priuštiti izgubiti.</strong>{" "}
              Ako osjećate da kockanje izmiče kontroli, odmah potražite stručnu pomoć.
            </p>
          </Card>

          {/* Article Content */}
          <Card className="p-4 md:p-6 bg-card border-2 border-border">
            <h3 className="text-lg md:text-2xl font-bold text-foreground mb-3 md:mb-6">Što je odgovorno kockanje?</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-sm md:text-base">
                Odgovorno kockanje znači pristupiti igrama na sreću s realnim očekivanjima i jasnim granicama. Kasina su
                dizajnirana da zarade - matematička prednost je uvijek na strani kuće. To ne znači da ne možete
                pobijediti, ali dugoročno, prosječan igrač gubi više nego što dobiva.
              </p>
              <p className="text-sm md:text-base">
                Ključ odgovornog kockanja je tretirati ga kao oblik zabave za koju plaćate, poput odlaska u kino ili
                restoran. Postavite budžet koliko ste spremni "potrošiti" na tu zabavu i pridržavajte se toga. Ako
                pobijedite - odlično! Ako izgubite - to je cijena zabave koju ste dobili.
              </p>
            </div>
          </Card>

          {/* Signs of Problem Gambling */}
          <Card className="p-4 md:p-6 bg-card border-2 border-border">
            <h3 className="text-lg md:text-2xl font-bold text-foreground mb-3 md:mb-6">
              Znakovi problematičnog kockanja
            </h3>
            <div className="space-y-3 md:space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                Prepoznavanje problema rani je znak je ključno. Ako primijetite bilo koji od sljedećih znakova kod sebe
                ili bliskih osoba, vrijeme je za promjenu:
              </p>

              <div className="space-y-2 md:space-y-3">
                <div className="border-l-4 border-destructive pl-3 md:pl-4 py-1.5 md:py-2">
                  <p className="text-sm md:text-base text-muted-foreground">
                    <strong className="text-foreground">Povećanje uloga i učestalosti:</strong> Stalno imate potrebu
                    kockati više novca ili češće kako biste osjetili uzbuđenje.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-3 md:pl-4 py-1.5 md:py-2">
                  <p className="text-sm md:text-base text-muted-foreground">
                    <strong className="text-foreground">Bezuspješno pokušaje kontrole:</strong> Pokušavali ste smanjiti
                    ili prestati kockati, ali niste uspjeli.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-3 md:pl-4 py-1.5 md:py-2">
                  <p className="text-sm md:text-base text-muted-foreground">
                    <strong className="text-foreground">"Vraćanje" gubitaka:</strong> Odmah nakon gubitka osjećate
                    snažnu potrebu da se vratite i "vratite" izgubljeni novac.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-3 md:pl-4 py-1.5 md:py-2">
                  <p className="text-sm md:text-base text-muted-foreground">
                    <strong className="text-foreground">Zanemarivanje obaveza:</strong> Kockanje remeti vaš posao,
                    školovanje, obiteljske odnose ili druge važne aspekte života.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-3 md:pl-4 py-1.5 md:py-2">
                  <p className="text-sm md:text-base text-muted-foreground">
                    <strong className="text-foreground">Financijski problemi:</strong> Posudba novca, prodaja imovine,
                    neplaćanje računa zbog kockanja.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-3 md:pl-4 py-1.5 md:py-2">
                  <p className="text-sm md:text-base text-muted-foreground">
                    <strong className="text-foreground">Laganje:</strong> Skrivate koliko vremena ili novca trošite na
                    kockanje od obitelji i prijatelja.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-3 md:pl-4 py-1.5 md:py-2">
                  <p className="text-sm md:text-base text-muted-foreground">
                    <strong className="text-foreground">Emocionalni problemi:</strong> Krivnja, tjeskoba, depresija ili
                    iritabilnost povezani s kockanjem.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Practical Tips */}
          <Card className="p-4 md:p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <h3 className="text-lg md:text-2xl font-bold text-foreground mb-3 md:mb-6">
              Praktični savjeti za odgovorno kockanje
            </h3>
            <div className="space-y-4 md:space-y-6">
              <div>
                <h4 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">
                  Postavite čvrste limite PRIJE igranja
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Odlučite točan iznos novca koji možete izgubiti bez ikakvih posljedica za vaš budžet. To je vaš "limit
                  gubitka". Takođe postavite "limit dobitka" - ako dostignete određenu dobit, prestanite igrati.
                  Pridržavajte se ovih limita BEZ IZNIMKE.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">Koristite alate kasina</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Sva licencirana kasina nude alate za odgovorno kockanje - limiti depozita, limiti gubitka, session
                  timeri, cool-off periodi i samoisključivanje. NE OKLIJEVAJTE ih koristiti. Oni su tu da vas zaštite.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">
                  Nikada ne "vraćajte" gubitke
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  "Chasing losses" je najčešći put u ozbiljne probleme. Kada izgubite svoj limit, PRESTANITE. Misao "još
                  jedan spin da se vratim" je zamka. Prihvatite gubitak kao dio igre i odmaknite se.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">
                  Ne kockajte pod utjecajem
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Alkohol i droge narušavaju rasuđivanje. Nikada ne igrajte kada niste potpuno trijezni. Također,
                  izbjegavajte kockanje kada ste emocionalno uznemireni, ljuti, tužni ili pod stresom.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">
                  Balansirajte s drugim aktivnostima
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Kockanje ne smije biti vaša jedina aktivnost ili hobi. Održavajte zdrave odnose, vježbajte, razvijajte
                  druge interese. Ako primijetite da zanemarujete druge aspekte života, to je alarm.
                </p>
              </div>
            </div>
          </Card>

          {/* Help Resources */}
          <Card className="p-4 md:p-6 bg-secondary text-secondary-foreground">
            <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-6 text-white">Gdje potražiti pomoć</h3>
            <p className="text-sm md:text-base text-blue-100 leading-relaxed mb-4 md:mb-6">
              Ako vi ili netko koga poznajete ima problem s kockanjem, pomoć je dostupna. Potražiti pomoć nije znak
              slabosti - to je hrabar i odgovoran korak prema rješenju problema.
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="bg-white/10 rounded-lg p-3 md:p-5">
                <h4 className="font-bold text-base md:text-xl mb-2 md:mb-3 text-white">
                  HUPIS - Hrvatski centar za odgovorno kockanje
                </h4>
                <p className="text-sm md:text-base text-blue-100 mb-2 leading-relaxed">
                  Besplatno savjetovalište koje pruža pomoć osobama s problemima kockanja i njihovim obiteljima. Nudimo
                  individualnu terapiju, grupnu terapiju i edukativne programe.
                </p>
                <p className="text-xs md:text-sm text-blue-200">
                  Web:{" "}
                  <a
                    href="https://www.hupis.hr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-white transition-colors underline"
                  >
                    www.hupis.hr
                  </a>
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-3 md:p-5">
                <h4 className="font-bold text-base md:text-xl mb-2 md:mb-3 text-white">
                  Poliklinika za zaštitu djece i mladih Zagreb
                </h4>
                <p className="text-sm md:text-base text-blue-100 mb-2 leading-relaxed">
                  Specijalizirani centar koji nudi terapijske programe za liječenje ovisnosti o kockanju. Besplatne
                  usluge dostupne su svim građanima Hrvatske.
                </p>
                <p className="text-xs md:text-sm text-blue-200">
                  Web:{" "}
                  <a
                    href="https://www.poliklinika-djeca.hr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-white transition-colors underline"
                  >
                    www.poliklinika-djeca.hr
                  </a>
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-3 md:p-5">
                <h4 className="font-bold text-base md:text-xl mb-2 md:mb-3 text-white">Anonimni kockari</h4>
                <p className="text-sm md:text-base text-blue-100 mb-2 leading-relaxed">
                  Međunarodna organizacija koja organizira grupe podrške za osobe s problemima kockanja. Sastanci su
                  besplatni, povjerljivi i dostupni u većim hrvatskim gradovima.
                </p>
                <p className="text-xs md:text-sm text-blue-200">
                  Međunarodni web:{" "}
                  <a
                    href="https://www.gamblersanonymous.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-white transition-colors underline"
                  >
                    www.gamblersanonymous.org
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-destructive/20 rounded-lg border border-destructive/40">
              <p className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base">Hitna situacija?</p>
              <p className="text-blue-100 text-xs md:text-sm">
                Ako ste u krizi, kontaktirajte Nacionalnu kriznu liniju za pomoć 116-123 (dostupna 24/7) ili se obratite
                najbližoj hitnoj psihijatrijskoj službi.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
