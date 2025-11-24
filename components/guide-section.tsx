import { Card } from "@/components/ui/card"

export function GuideSection() {
  return (
    <section id="guide" className="py-8 md:py-12 px-4 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            <span className="text-foreground">Vodič za </span>
            <span className="text-primary">Odabir Kasina</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stručni savjeti za sigurnu i informiranu odluku
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          {/* Introduction */}
          <Card className="p-4 md:p-6 bg-card border-2 border-border">
            <h3 className="text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-4">
              Kako odabrati pravo online kasino?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-2 md:mb-4">
              Odabir pravog online kasina može biti zbunjujući s obzirom na ogroman izbor dostupan hrvatskim igračima.
              Postoje stotine operatera koji nude svoje usluge, a ne nude svi istu razinu kvalitete, sigurnosti i
              poštenosti. U ovom vodiču objasnit ćemo detaljno što trebate provjeriti prije registracije.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Slijedite naše savjete korak po korak i moći ćete sa sigurnošću odabrati kasino koji odgovara vašim
              potrebama i pruža sigurno okruženje za igru.
            </p>
          </Card>

          {/* Step 1 */}
          <Card className="p-4 md:p-6 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-base md:text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-base md:text-2xl font-bold text-foreground">
                  Licenca i regulacija - Temelj sigurnosti
                </h3>
              </div>
            </div>

            <div className="md:ml-16 space-y-3 md:space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Prije bilo čega drugog, provjerite licencu! Ovo je najvažniji kriterij za sigurnost. Online kasino MORA
                imati važeću licencu od renomirane regulatorne institucije. Bez licence, kasino djeluje ilegalno i nema
                nikakvog nadzora - vaš novac i podaci nisu zaštićeni.
              </p>

              <div className="bg-background rounded-lg p-3 md:p-5 border border-border">
                <h4 className="font-bold text-sm md:text-base text-foreground mb-2 md:mb-3">
                  Najpoznatije licence koje treba tražiti:
                </h4>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-base text-muted-foreground">
                  <li className="pl-3 md:pl-4 border-l-2 border-primary">
                    <strong className="text-foreground">MGA (Malta Gaming Authority)</strong> - Zlatni standard u EU,
                    vrlo strogi propisi
                  </li>
                  <li className="pl-3 md:pl-4 border-l-2 border-primary">
                    <strong className="text-foreground">Curacao eGaming</strong> - Najčešća internacionalna licenca
                  </li>
                  <li className="pl-3 md:pl-4 border-l-2 border-primary">
                    <strong className="text-foreground">UKGC (UK Gambling Commission)</strong> - Najstroža regulativa na
                    svijetu
                  </li>
                  <li className="pl-3 md:pl-4 border-l-2 border-primary">
                    <strong className="text-foreground">Gibraltar Regulatory Authority</strong> - Visoki standardi EU
                  </li>
                </ul>
              </div>

              <div className="bg-muted/50 rounded-lg p-3 md:p-5">
                <p className="text-xs md:text-sm text-foreground">
                  <strong>Kako provjeriti:</strong> Informacije o licenci uvijek su u footeru web stranice. Kliknite na
                  logo licence - trebali biste biti preusmjereni na web stranicu regulatora gdje možete verificirati
                  licencu. Ako licence nema ili link ne vodi nikamo, IZBJEGAVAJTE to kasino.
                </p>
              </div>
            </div>
          </Card>

          {/* Step 2 */}
          <Card className="p-4 md:p-6 border-2 border-border">
            <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-base md:text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-base md:text-2xl font-bold text-foreground">Sigurnost podataka i transakcija</h3>
              </div>
            </div>

            <div className="md:ml-16 space-y-3 md:space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Dajete kasinu svoje osobne podatke, financijske informacije i deponirte pravi novac. Sigurnost mora biti
                na prvom mjestu. Evo što provjeriti:
              </p>

              <div className="space-y-3 md:space-y-4">
                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-1.5 md:mb-2">SSL enkripcija</h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                    Provjerite ima li web stranica SSL certifikat - URL mora početi s "https://" (ne samo "http://"), a
                    u adresnoj traci bi trebala biti ikona brave. Minimum je 128-bit enkripcija, ali vrhunska kasina
                    koriste 256-bit SSL enkripciju koja je ista kao u bankama.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-1.5 md:mb-2">GDPR usklađenost</h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                    Kasina koja posluju u EU moraju biti usklađena s GDPR pravilima o zaštiti podataka. To znači da
                    imate pravo znati koje podatke prikupljaju, kako ih koriste, i možete zatražiti brisanje. Politika
                    privatnosti mora biti jasna i dostupna.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-1.5 md:mb-2">
                    Dvofaktorska autentifikacija (2FA)
                  </h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                    Vrhunska kasina nude 2FA kao dodatnu zaštitu vašeg računa. To znači da osim lozinke trebaš i kod s
                    vašeg mobitela za pristup, što jako otežava hakiranje.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Step 3 */}
          <Card className="p-4 md:p-6 border-2 border-border">
            <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-base md:text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-base md:text-2xl font-bold text-foreground">Razumijevanje bonus uvjeta</h3>
              </div>
            </div>

            <div className="md:ml-16 space-y-3 md:space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Bonusi izgledaju atraktivno - "100% do 5000 kn + 100 free spinova!" - ali đavao je u detaljima. Uvjeti
                bonusa (Terms & Conditions) mogu pretvoriti sjajan bonus u zamku. Evo što morate razumjeti:
              </p>

              <div className="bg-background rounded-lg p-3 md:p-5 border border-border space-y-3 md:space-y-4">
                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-2 md:mb-3">
                    Wagering Requirements (Zahtjevi za proigravanje)
                  </h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed mb-2 md:mb-3">
                    Ovo je broj puta koliko morate proigrati bonus prije nego možete podići dobitke. Primjer: Dobijete
                    1000 kn bonusa s wageringom 40x. To znači da morate proigrati 40.000 kn (1000 x 40) prije isplate!
                  </p>
                  <div className="bg-muted/50 rounded p-3 md:p-4">
                    <p className="text-xs md:text-sm text-foreground">
                      <strong>Što je razumno:</strong> 30x-40x je industriji standard. Ispod 30x je odlično. Iznad 50x
                      je pretjerano i teško ispunjivo.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-2 md:mb-3">Rok valjanosti</h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                    Koliko dugo imate da ispunite wagering zahtjeve. 30 dana je razumno, 7 dana je kratko, 90 dana je
                    izvrsno. Ako bonus istječe prije nego što ga proigrate, gubite sve dobitke.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-2 md:mb-3">Maksimalni dobitak</h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                    Mnogi bonusi imaju "max win" limit - npr. maksimalno možete podići 5000 kn iz bonusa, čak i ako
                    dobijete 50.000 kn. Provjerite je li to navedeno.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-2 md:mb-3">Igre koje vrijede</h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                    Ne doprinose sve igre jednako wageringu. Slotovi obično 100%, rulet možda 10-20%, a live dealer igre
                    često 0%. Pročitajte koje igre su uključene.
                  </p>
                </div>
              </div>

              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 md:p-5">
                <p className="text-xs md:text-sm text-foreground">
                  <strong>Važno upozorenje:</strong> Ponekad je bolje odbiti bonus ako su uvjeti previše strogi. Možete
                  igrati vlastitim novcem bez ograničenja.
                </p>
              </div>
            </div>
          </Card>

          {/* Step 4 */}
          <Card className="p-4 md:p-6 border-2 border-border">
            <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-base md:text-xl font-bold">
                4
              </div>
              <div>
                <h3 className="text-base md:text-2xl font-bold text-foreground">Kvaliteta i raznolikost igara</h3>
              </div>
            </div>

            <div className="md:ml-16 space-y-3 md:space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Možda imate najsigurniji kasino na svijetu, ali ako nema dobre igre, što vam vrijedi? Evo na što
                obratiti pažnju:
              </p>

              <div className="space-y-3 md:space-y-4">
                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-1.5 md:mb-2">
                    Renomirani game provideri
                  </h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    Vrhunska kasina rade s poznatim provajderima igara koji su certificirani i audited. Njihove igre su
                    provjereno poštene (RTP je testiran). Potražite ova imena:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
                    <div className="bg-primary/5 p-2 md:p-3 rounded">NetEnt</div>
                    <div className="bg-primary/5 p-2 md:p-3 rounded">Microgaming</div>
                    <div className="bg-primary/5 p-2 md:p-3 rounded">Evolution Gaming</div>
                    <div className="bg-primary/5 p-2 md:p-3 rounded">Pragmatic Play</div>
                    <div className="bg-primary/5 p-2 md:p-3 rounded">Play'n GO</div>
                    <div className="bg-primary/5 p-2 md:p-3 rounded">Yggdrasil</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-1.5 md:mb-2">
                    RTP (Return to Player)
                  </h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                    RTP pokazuje koliki postotak uloga igra teorijski vraća igračima kroz duži period. Primjer: RTP 96%
                    znači da će igra dugoročno vratiti 96 kn od svakih 100 kn uloženih. Tražite RTP iznad 95%. Kasina
                    koja objavljuju RTP informacije su transparentna.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-1.5 md:mb-2">Raznolikost</h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                    Dobro kasino nudi širok izbor - slotove, stolne igre (blackjack, rulet, poker), video poker, live
                    dealer igre, možda i sportske oklade. Više izbora znači da nećete dosaditi brzo.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Step 5 */}
          <Card className="p-4 md:p-6 border-2 border-border">
            <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-base md:text-xl font-bold">
                5
              </div>
              <div>
                <h3 className="text-base md:text-2xl font-bold text-foreground">Metode plaćanja i brzina isplata</h3>
              </div>
            </div>

            <div className="md:ml-16 space-y-3 md:space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Možete dobiti jackpot, ali ako isplata traje mjesecima ili kasino traži nemoguce dokumente, nećete biti
                sretni. Testiranje isplata je veliki dio naših recenzija.
              </p>

              <div className="bg-background rounded-lg p-3 md:p-5 border border-border space-y-3 md:space-y-4">
                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-1.5 md:mb-2">Dostupne metode</h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed mb-2 md:mb-3">
                    Kvalitetno kasino nudi raznolike opcije - kreditne/debitne kartice, e-novčanike (Skrill, Neteller,
                    PayPal), bankovne transfere, možda čak i kriptovalute. Više opcija = više fleksibilnosti.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-1.5 md:mb-2">Brzina procesiranja</h4>
                  <div className="space-y-2 text-sm mt-2">
                    <div className="flex justify-between p-2 bg-muted/50 rounded">
                      <span className="text-muted-foreground">E-novčanici:</span>
                      <span className="font-semibold text-foreground">0-24 sata</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/50 rounded">
                      <span className="text-muted-foreground">Kreditne kartice:</span>
                      <span className="font-semibold text-foreground">1-3 dana</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/50 rounded">
                      <span className="text-muted-foreground">Bankovni transfer:</span>
                      <span className="font-semibold text-foreground">3-5 dana</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/50 rounded">
                      <span className="text-muted-foreground">Kriptovalute:</span>
                      <span className="font-semibold text-foreground">Trenutno - 1 sat</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-1.5 md:mb-2">Naknade i limiti</h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                    Provjerite ima li kasino naknade za isplate (vrhunska kasina ne naplaćuju). Također pogledajte
                    minimalne i maksimalne limite isplate - neki kasina limitiraju koliko možete podići tjedno ili
                    mjesečno.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-1.5 md:mb-2">KYC verifikacija</h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                    Svi licencirani operateri moraju verificirati vaš identitet (Know Your Customer) prije prve isplate.
                    Trebate poslati kopiju osobne, dokaz adrese i možda dokaz o vlasništvu platne metode. To je normalno
                    i zakonski obavezno - ali proces treba biti jasan i brz.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Step 6 */}
          <Card className="p-4 md:p-6 border-2 border-border">
            <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-base md:text-xl font-bold">
                6
              </div>
              <div>
                <h3 className="text-base md:text-2xl font-bold text-foreground">Korisnička podrška</h3>
              </div>
            </div>

            <div className="md:ml-16 space-y-3 md:space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Kad nešto pođe po zlu - tehnički problem, pitanje o bonusu, problem s isplatom - trebate brzu i
                kompetentnu pomoć. Kvaliteta korisničke podrške razlikuje vrhunska kasina od osrednjih.
              </p>

              <div className="space-y-3 md:space-y-4">
                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-1.5 md:mb-2">Dostupnost 24/7</h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                    Online kasina rade non-stop, pa bi i podrška trebala biti dostupna cijelo vrijeme. Live chat 24/7 je
                    idealno - instant odgovori na vaša pitanja.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-1.5 md:mb-2">
                    Više kanala komunikacije
                  </h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                    Live chat, email, telefonska podrška - više opcija znači da možete odabrati način koji vam odgovara.
                    Neki kasina nude čak i WhatsApp ili Telegram podršku.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-1.5 md:mb-2">Hrvatski jezik</h4>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                    Ako kasino cilja hrvatsko tržište, podrška na hrvatskom jeziku je must-have. Ako nudi samo engleski,
                    osigurajte se da vam engleski jezik ne predstavlja problem.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 md:p-5">
                  <p className="text-xs md:text-sm text-foreground">
                    <strong>Naš savjet:</strong> Prije registracije, testirajte podršku. Pošaljite par pitanja kroz live
                    chat ili email. Procijenite brzinu odgovora i kvalitetu informacija. To vam govori što možete
                    očekivati ako kasnije nastane problem.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Conclusion */}
          <Card className="p-4 md:p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30">
            <h3 className="text-base md:text-2xl font-bold text-foreground mb-2 md:mb-4">Zaključak</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-2 md:mb-4">
              Odabir pravog kasina zahtijeva istraživanje, ali vrijedi uložiti vrijeme. Sretniji ćete biti igrajući u
              sigurnom, poštenom kasinu s dobrom podrškom nego loveći jackpot u sumnjivom operatera koji će vas ostaviti
              na cjedilu kad pobijedite.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-6">
              Sva kasina na našoj listi detaljno smo testirali prema ovim kriterijima. Možete biti sigurni da
              preporučujemo samo operatere koji ispunjavaju najviše standarde sigurnosti, poštenosti i kvalitete.
            </p>
            <div className="text-center">
              <a
                href="#rankings"
                className="inline-block bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold px-6 md:px-8 py-2 md:py-3 rounded-lg transition-all shadow-lg"
              >
                Pogledaj preporučena kasina
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
