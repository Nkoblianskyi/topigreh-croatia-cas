export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">O </span>
            <span className="text-primary">topigrehr.com</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nezavisna platforma za recenzije i usporedbu online kasina u Hrvatskoj
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-card border-2 border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Tko smo mi i što radimo</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">topigrehr.com</strong> je nezavisna hrvatska platforma osnovana s
                jasnim ciljem - pružiti igračima točne, pouzdane i objektivne informacije o online kasinima dostupnima u
                Hrvatskoj. U industriji prepunoj marketinških trikova i skrivenih uvjeta, mi postojimo kako bismo bili
                vaš pouzdani vodič kroz svijet online kockanja.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Naš tim čine iskusni analitičari industrije kockanja, stručnjaci za online sigurnost i profesionalci s
                višegodišnjim iskustvom u iGaming sektoru. Svakodnevno testiramo, analiziramo i uspoređujemo online
                kasina kako biste vi mogli donijeti informiranu odluku o tome gdje igrati.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Naša misija je jednostavna - omogućiti vam siguran i transparentan pristup svijetu online kasina kroz
                nezavisne recenzije, detaljne usporedbe i korisne vodiče koji vam pomažu pronaći najbolje platforme za
                vaše potrebe.
              </p>
            </div>
          </div>

          <div className="bg-card border-2 border-primary/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Naša metodologija ocjenjivanja</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Svako online kasino na našoj platformi prolazi kroz detaljan proces ocjenjivanja koji se temelji na
              sljedećim kriterijima:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-bold text-foreground mb-2">1. Licenca i regulacija</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Provjeravamo valjanost licence i reputaciju regulatornog tijela. Sva kasina na našoj listi moraju
                  imati važeću licencu od renomiranih institucija poput Malta Gaming Authority (MGA), Curacao eGaming,
                  UK Gambling Commission ili drugih priznatih regulatora. Bez licence, kasino ne dolazi na našu listu.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-bold text-foreground mb-2">2. Sigurnost i zaštita podataka</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Analiziramo sigurnosne protokole, SSL enkripciju, GDPR usklađenost i politike zaštite privatnosti.
                  Testiramo kako kasina štite vaše osobne i financijske podatke, te provjeravamo njihove procedure za
                  prevenciju prijevara i zaštitu maloljetnika.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-bold text-foreground mb-2">3. Bonus ponude i uvjeti</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Detaljno analiziramo svaku bonus ponudu - wagering zahtjeve, vremenska ograničenja, maksimalne isplate
                  i sve ostale uvjete. Uspoređujemo ih s industrijskim standardima i upozoravamo na sve nepoštene ili
                  nejasne uvjete. Transparentnost je ključna - označavamo sve skrivene detalje koje kasina ne ističu
                  dovoljno jasno.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-bold text-foreground mb-2">4. Izbor igara i provajderi</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Pregledavamo cjelokupnu biblioteku igara, testiramo kvalitetu i raznolikost ponude, provjeravamo RTP
                  postotke i certifikate game provajdera. Ocjenjujemo dostupnost popularnih naslova, live casino opcija,
                  progresivnih jackpota i ukupno korisničko iskustvo igranja.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-bold text-foreground mb-2">5. Metode plaćanja i brzina isplata</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Testiramo sve dostupne metode depozita i povlačenja novca - kreditne kartice, e-novčanike,
                  kriptovalute i bankovne transfere. Provjeravamo minimalne i maksimalne limite, naknade, vrijeme obrade
                  i verifikacijske procedure. Brzina i transparentnost isplata ključni su faktori u našoj ocjeni.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-bold text-foreground mb-2">6. Korisnička podrška</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Testiramo dostupnost i kvalitetu korisničke podrške kontaktirajući ih putem različitih kanala (live
                  chat, email, telefon) u različito vrijeme dana. Ocjenjujemo brzinu odgovora, stručnost osoblja,
                  ljubaznost komunikacije i dostupnost na hrvatskom jeziku.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-bold text-foreground mb-2">7. Mobilno iskustvo</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Provjeravamo kako kasino funkcionira na mobilnim uređajima - responsive dizajn, brzinu učitavanja,
                  dostupnost svih funkcionalnosti, optimizaciju igara za manje ekrane i dostupnost native mobilnih
                  aplikacija.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border-2 border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Naše vrijednosti</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-bold text-foreground mb-2">Objektivnost i neovisnost</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Naše recenzije su potpuno neovisne i objektivne. Iako primamo affiliate proviziju od nekih operatera
                  kada korisnici kliknu na naše linkove, to nikada ne utječe na naše ocjene ili preporuke. Loše kasino
                  dobit će lošu ocjenu bez obzira na poslovne odnose. Naša reputacija i povjerenje korisnika su
                  najvažniji.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-bold text-foreground mb-2">Potpuna transparentnost</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Jasno označavamo affiliate linkove i objašnjavamo kako financiramo našu platformu. Svi kriteriji
                  ocjenjivanja su javno dostupni i detaljno objašnjeni. Ne skrivamo svoje metode rada niti imamo
                  skrivene motive. Što vidite, to dobivate - iskrene, transparentne informacije.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-bold text-foreground mb-2">Zaštita igrača na prvom mjestu</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Vaša sigurnost i dobrobit su naš prioritet. Aktivno promoviramo odgovorno kockanje, upozoravamo na
                  rizike ovisnosti i nikada ne prikazujemo kockanje kao način zarade ili rješavanje financijskih
                  problema. Preporučujemo samo licencirane, sigurne i fer operatere. Ako kasino ne ispunjava naše
                  sigurnosne standarde, neće biti na našoj listi.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-bold text-foreground mb-2">Kontinuirano ažuriranje</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Online casino industrija se brzo mijenja - novi operateri, nove bonus ponude, promjene u uvjetima,
                  tehnološki napredak. Naš tim kontinuirano prati sve promjene i redovito ažurira recenzije i
                  informacije. Sve podatke provjeravamo mjesečno kako biste uvijek imali najpreciznije i najnovije
                  informacije.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-bold text-foreground mb-2">Edukacija korisnika</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Osim recenzija, pružamo detaljne vodiče, članke i savjete koji vam pomažu bolje razumjeti svijet
                  online kockanja. Objašnjavamo termine, strategije, bonus uvjete i sve ostalo što vam treba znati kako
                  biste igrali sigurno i odgovorno.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/10 border-2 border-secondary/30 rounded-lg p-6">
            <h4 className="text-lg font-bold text-foreground mb-3">Važna napomena o odgovornom kockanju</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              <strong className="text-foreground">topigrehr.com</strong> je isključivo informativni i usporedni portal.
              Ne pružamo usluge kockanja niti prihvaćamo oklade. Sve informacije su pružene u edukativne svrhe kako
              bismo vam pomogli donijeti informiranu odluku.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Kockanje može biti ovisnost i dovesti do ozbiljnih financijskih i osobnih problema. Uvijek igrajte
              odgovorno, samo s novcem koji si možete priuštiti izgubiti, i nikada ne pokušavajte nadoknaditi gubitke.
              Ako smatrate da imate problem s kockanjem, potražite stručnu pomoć. <strong>18+</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
