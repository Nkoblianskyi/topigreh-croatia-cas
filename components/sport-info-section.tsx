import { Card } from "@/components/ui/card"

export function SportInfoSection() {
  return (
    <section id="game-types" className="py-8 md:py-12 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            <span className="text-foreground">Vrste </span>
            <span className="text-primary">Kazino Igara</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Razumijevanje različitih tipova igara i kako ih igrati
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          {/* Introduction */}
          <Card className="p-4 md:p-6 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white">
            <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">Svijet online kasino igara</h3>
            <p className="text-sm md:text-lg text-blue-100 leading-relaxed">
              Online kasina nude nevjerojatan izbor igara - od klasičnih slotova i ruleta do sofisticiranih live dealer
              igara s profesionalnim krupijerima. Svaka kategorija igara ima svoja pravila, strategije i house edge.
              Razumijevanje različitih tipova igara ključno je za uživanje i odgovorno kockanje.
            </p>
          </Card>

          {/* Slots */}
          <Card className="p-4 md:p-6 border-2 border-border">
            <h3 className="text-lg md:text-2xl font-bold text-foreground mb-3 md:mb-6">
              Slot igre - Najomiljenije igre
            </h3>
            <div className="space-y-3 md:space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Slot mašine su daleko najpopularnije kazino igre. Jednostavne su za igru - pritisnete gumb i bubnjevi se
                vrte. Nema strategije, sve je čista sreća. Ali ne bi trebali potcijeniti njihovu raznolikost i
                kompleksnost.
              </p>

              <div>
                <h4 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">Vrste slot igara:</h4>

                <div className="space-y-2 md:space-y-3">
                  <div className="border-l-4 border-primary pl-3 md:pl-4 py-1.5 md:py-2">
                    <h5 className="font-bold text-sm md:text-base text-foreground mb-1">
                      Klasični slotovi (3-reel slots)
                    </h5>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      Tradicionalni slotovi s 3 bubnja i jednostavnim simbolima (voće, sedmice, BAR). Idealni za
                      početnike jer su laki za razumijevanje. RTP obično 95-97%.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-3 md:pl-4 py-1.5 md:py-2">
                    <h5 className="font-bold text-sm md:text-base text-foreground mb-1">Video slotovi (5+ reels)</h5>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      Moderni slotovi s 5 ili više bubnjeva, multiplih paylinesa, bonus igrama, free spinovima i
                      specijalnim simbolima (wild, scatter). Najraznolikija kategorija s temama od egipatskih piramida
                      do svemirskih aventura.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-3 md:pl-4 py-1.5 md:py-2">
                    <h5 className="font-bold text-sm md:text-base text-foreground mb-1">Progresivni jackpot slotovi</h5>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      Slotovi gdje dio svakog uloga ide u zajednički jackpot koji raste dok netko ne dobije. Jackpoti
                      mogu doseći milijune eura! Poznati slotovi: Mega Moolah, Mega Fortune. Često zahtijevaju
                      maksimalni ulog za qualifying za jackpot.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-3 md:pl-4 py-1.5 md:py-2">
                    <h5 className="font-bold text-sm md:text-base text-foreground mb-1">Megaways slotovi</h5>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      Revolucionarni mehanizam gdje broj simbola po bubnju varira svaki spin, stvarajući tisuće mogućih
                      načina za pobjedu. Vrlo volatilni ali uzbudljivi. Popularni naslovi: Bonanza, Extra Chilli.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-3 md:p-5">
                <h5 className="font-bold text-sm md:text-base text-foreground mb-1.5 md:mb-2">
                  Što je važno kod slotova:
                </h5>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                  <li>
                    <strong className="text-foreground">RTP (Return to Player):</strong> Postotak koji igra vraća
                    dugoro. Tražite RTP 96% ili više.
                  </li>
                  <li>
                    <strong className="text-foreground">Volatilnost:</strong> Niska volatilnost = češće male pobjede.
                    Visoka volatilnost = rjeđe ali veće pobjede.
                  </li>
                  <li>
                    <strong className="text-foreground">Hit frequency:</strong> Koliko često igra isplaćuje bilo kakav
                    dobitak.
                  </li>
                  <li>
                    <strong className="text-foreground">Maksimalni dobitak:</strong> Koliko najviše možete dobiti na
                    jednom spinu.
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Table Games */}
          <Card className="p-4 md:p-6 border-2 border-border">
            <h3 className="text-lg md:text-2xl font-bold text-foreground mb-3 md:mb-6">Stolne igre - Klasika kasina</h3>
            <div className="space-y-3 md:space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Stolne igre su srce svakog kasina. Za razliku od slotova, mnoge stolne igre uključuju element strategije
                i odlučivanja. House edge je često manji nego kod slotova.
              </p>

              <div className="space-y-3 md:space-y-4">
                <div className="bg-background rounded-lg p-3 md:p-4 border border-border">
                  <h4 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">Blackjack (21)</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                    Najpoznatija karta igra u kasinu. Cilj je skupiti kartice čija vrijednost je bliže 21 od dilera, ali
                    ne preko. As vrijedi 1 ili 11, face cards 10, ostale po nominalnoj vrijednosti.
                  </p>
                  <div className="bg-muted/50 rounded p-2 md:p-3">
                    <p className="text-xs md:text-sm">
                      <strong className="text-foreground">House edge:</strong> 0.5-1% uz pravilnu strategiju (jedna od
                      najboljih odds u kasinu!)
                      <br />
                      <strong className="text-foreground">Strategija:</strong> Postoji "basic strategy" chart koji
                      pokazuje matematički najoptimalniji potez.
                    </p>
                  </div>
                </div>

                <div className="bg-background rounded-lg p-3 md:p-4 border border-border">
                  <h4 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">Rulet</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                    Ikona kasina - kotač s brojevima 0-36 (europski) ili 0-00-36 (američki). Kladite se na broj, boju
                    (crvena/crna), paran/neparan, ili grupe brojeva. Dealer pušta lopticu koja pada na broj.
                  </p>
                  <div className="bg-muted/50 rounded p-2 md:p-3 space-y-1 text-xs md:text-sm">
                    <p>
                      <strong className="text-foreground">Europski rulet house edge:</strong> 2.7% (bolja opcija)
                    </p>
                    <p>
                      <strong className="text-foreground">Američki rulet house edge:</strong> 5.26% (dupla nula povećava
                      house edge)
                    </p>
                    <p>
                      <strong className="text-foreground">Strategija:</strong> Nema "sigurne" strategije. Martingale i
                      slični sistemi ne mijenjaju house edge.
                    </p>
                  </div>
                </div>

                <div className="bg-background rounded-lg p-3 md:p-4 border border-border">
                  <h4 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">Baccarat</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                    Jednostavna igra koja izgleda sofisticirano. Kladite se hoće li "Player", "Banker" ili "Tie" imati
                    ruku bližu 9. Ne morate razumijeti pravila vuče karata - sve je automatizirano.
                  </p>
                  <div className="bg-muted/50 rounded p-2 md:p-3">
                    <p className="text-xs md:text-sm">
                      <strong className="text-foreground">House edge:</strong> Banker 1.06%, Player 1.24%, Tie 14.36%
                      (izbjegavajte Tie!)
                      <br />
                      <strong className="text-foreground">Savjet:</strong> Uvijek kladite na Banker - matematički
                      najbolja opcija.
                    </p>
                  </div>
                </div>

                <div className="bg-background rounded-lg p-3 md:p-4 border border-border">
                  <h4 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">Poker varijante</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                    Kasina nude razne poker igre protiv kuće (ne protiv drugih igrača): Caribbean Stud, Texas Hold'em
                    Bonus, Three Card Poker. Svaka ima svoja pravila ali zajednička je hijerarhija poker kombinacija.
                  </p>
                  <div className="bg-muted/50 rounded p-2 md:p-3">
                    <p className="text-xs md:text-sm text-foreground">
                      House edge varira ali je obično 2-5%. Strategija je kompleksnija od blackjacka ali postoje optimal
                      play chartovi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Live Dealer Games */}
          <Card className="p-4 md:p-6 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="text-lg md:text-2xl font-bold text-foreground mb-3 md:mb-6">
              Live Dealer igre - Pravo kasino iskustvo
            </h3>
            <div className="space-y-3 md:space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Live dealer igre su revolucija online kockanja. Igrate u realnom vremenu protiv pravog dealera ili
                krupijera koji vodi igru iz studija. Sve se prenosi putem HD live streama - vidite dealera, kartice,
                rulet kotač. Pružaju autentično kasino iskustvo bez odlaska iz kuće.
              </p>

              <div>
                <h4 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">
                  Što nudе live dealer igre:
                </h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-3 md:p-4 border border-border">
                    <h5 className="font-semibold text-sm md:text-base text-foreground mb-1.5 md:mb-2">
                      Live Blackjack
                    </h5>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Multiplih stolova s različitim limitima, brzinom igre, i pravilima. Neki nude side bets i
                      specijalitete.
                    </p>
                  </div>

                  <div className="bg-background rounded-lg p-3 md:p-4 border border-border">
                    <h5 className="font-semibold text-sm md:text-base text-foreground mb-1.5 md:mb-2">Live Rulet</h5>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Europski, američki, French, ili specijalni rulet kao Lightning Roulette s multiplier funkcijom.
                    </p>
                  </div>

                  <div className="bg-background rounded-lg p-3 md:p-4 border border-border">
                    <h5 className="font-semibold text-sm md:text-base text-foreground mb-1.5 md:mb-2">Live Baccarat</h5>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Klasični baccarat s profesionalnim dealerom. VIP stolovi za high rollere.
                    </p>
                  </div>

                  <div className="bg-background rounded-lg p-3 md:p-4 border border-border">
                    <h5 className="font-semibold text-sm md:text-base text-foreground mb-1.5 md:mb-2">Game Shows</h5>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Crazy Time, Monopoly Live, Deal or No Deal - zabavne game show igre s voditeljem i interakcijom.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/20 border border-secondary/40 rounded-lg p-3 md:p-4">
                <h5 className="font-bold text-sm md:text-base text-foreground mb-1.5 md:mb-2">
                  Prednosti live dealer igara:
                </h5>
                <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                  <li>• Vjerujete da je igra poštena - vidite sve u realnom vremenu</li>
                  <li>• Autentično kasino iskustvo s ljudskom interakcijom</li>
                  <li>• Chat s dealerom i drugim igračima (optional)</li>
                  <li>• Profesionalni krupijeri obučeni za vrhunsku uslugu</li>
                  <li>• Multiplih kamera za različite kute gledanja</li>
                </ul>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground italic">
                <strong>Napomena:</strong> Live dealer igre zahtijevaju stabilnu internet vezu. Minimalni ulozi su često
                viši nego kod RNG igara.
              </p>
            </div>
          </Card>

          {/* Other Games */}
          <Card className="p-4 md:p-6 border-2 border-border">
            <h3 className="text-lg md:text-2xl font-bold text-foreground mb-3 md:mb-6">Ostale popularne kategorije</h3>

            <div className="space-y-4 md:space-y-6">
              <div>
                <h4 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">Video Poker</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                  Kombinacija slot mašine i pokera. Dobijete 5 karata, odaberete koje zadržati, zatim vučete zamjenske.
                  Cilj je napraviti što jaču poker kombinaciju. Varijante: Jacks or Better, Deuces Wild, Joker Poker.
                </p>
                <div className="bg-muted/50 rounded p-2 md:p-3 text-xs md:text-sm">
                  <p>
                    <strong className="text-foreground">House edge:</strong> Može biti izuzetno nizak (0.5% ili manje)
                    uz pravilnu strategiju. Jedna od najboljih igara za igrače!
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">Scratch cards (Srećke)</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                  Digitalna verzija instant-win srećki. Jednostavno "ogrebe" virtualnu karticu i odmah vidite jeste li
                  dobili. Brzo, jednostavno, zabavno.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">Keno i Bingo</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Igre slične lutriji. Keno - birate brojeve i čekate izvlačenje. Bingo - označavate brojeve na kartici
                  dok ih objavljuju. Društvene i opuštajuće igre.
                </p>
              </div>
            </div>
          </Card>

          {/* Conclusion */}
          <Card className="p-4 md:p-6 bg-secondary text-secondary-foreground">
            <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white">Odaberite igru prema svom stilu</h4>
            <p className="text-sm md:text-base text-blue-100 leading-relaxed mb-3">
              Svaka kategorija igara nudi različito iskustvo. Slotovi su brzi i ne zahtijevaju razmišljanje - čista
              zabava. Stolne igre nude bolji house edge i element strategije. Live dealer igre daju autentično kasino
              iskustvo.
            </p>
            <p className="text-xs md:text-sm text-blue-200">
              Naš savjet: Isprobajte svaku kategoriju u demo modu (gdje je dostupan) prije igranja s pravim novcem.
              Pronađite što vam najviše odgovara i učite pravila i strategije.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
