import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivatlivspolitikPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Politika Privatnosti</h1>
            <p className="text-muted-foreground text-lg">Kako štitimo i koristimo vaše osobne podatke</p>
          </div>

          <div className="space-y-8">
            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Uvod</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">topigrehr.com</strong> poštuje vašu privatnost i zavezan je zaštiti
                vaše osobne podatke. Ova politika privatnosti objašnjava kako prikupljamo, koristimo, čuvamo i štitimo
                vaše informacije u skladu s Općom uredbom o zaštiti podataka (GDPR) i važećim hrvatskim zakonodavstvom.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Korištenjem naše web stranice, pristajete na prikupljanje i korištenje informacija u skladu s ovom
                politikom. Ako se ne slažete s bilo kojim dijelom ove politike, molimo vas da ne koristite našu
                stranicu.
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Voditelj obrade podataka</h2>
              <div className="bg-muted/30 p-4 rounded">
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Naziv:</strong> topigrehr.com
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:privacy@topigrehr.com" className="text-primary hover:underline">
                    privacy@topigrehr.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Web stranica:</strong> topigrehr.com
                </p>
              </div>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Koje podatke prikupljamo?</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">1. Automatski prikupljeni podaci</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Kada posjetite našu web stranicu, automatski prikupljamo određene tehničke informacije:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>IP adresa (anonimizirana)</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>Tip preglednika i verzija</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>Operativni sustav</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>Referral URL (stranica s koje ste došli)</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>Stranice koje posjećujete na našoj web stranici</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>Datum i vrijeme posjete</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">2. Kolačići i slične tehnologije</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Koristimo kolačiće za poboljšanje vašeg korisničkog iskustva, analizu ponašanja posjetitelja i
                    personalizaciju sadržaja. Detaljne informacije o kolačićima možete pronaći u našoj{" "}
                    <a href="/cookie-politika" className="text-primary hover:underline font-medium">
                      Politici kolačića
                    </a>
                    .
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">3. Dobrovoljno pruženi podaci</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Ako nas kontaktirate putem email-a ili kontakt obrasca, prikupljamo informacije koje nam dobrovoljno
                    pružite:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>Ime i prezime</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>Email adresa</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>Sadržaj vaše poruke</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Kako koristimo vaše podatke?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">1.</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Poboljšanje web stranice</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Analiziramo kako posjetitelji koriste našu stranicu kako bismo kontinuirano poboljšavali sadržaj,
                      navigaciju i funkcionalnost.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">2.</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Personalizacija sadržaja</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Koristimo podatke kako bismo vam prikazali relevantnije preporuke kasina i sadržaja koji
                      odgovaraju vašim interesima.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">3.</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Komunikacija</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Odgovaramo na vaše upite, pitanja i povratne informacije koje nam šaljete putem email-a ili
                      kontakt obrasca.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">4.</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Sigurnost i prevencija prijevara</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Pratimo i analiziramo promet kako bismo zaštitili našu stranicu od zlonamernih aktivnosti,
                      prijevara i kršenja naših uvjeta korištenja.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">5.</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Ispunjavanje pravnih obveza</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Koristimo i čuvamo podatke kako bismo ispunili zakonske obveze koje se odnose na našu djelatnost.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Dijeljenje podataka s trećim stranama</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Ne prodajemo vaše osobne podatke trećim stranama.</strong> Vaša
                privatnost je naš prioritet. Međutim, dijelimo određene anonimne podatke u sljedećim slučajevima:
              </p>

              <div className="space-y-4">
                <div className="bg-muted/30 p-4 rounded">
                  <h4 className="font-bold text-foreground mb-2">Analitički servisi</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Koristimo Vercel Analytics za analizu prometa i ponašanja korisnika. Svi podaci su anonimizirani i
                    agregirani.
                  </p>
                </div>

                <div className="bg-muted/30 p-4 rounded">
                  <h4 className="font-bold text-foreground mb-2">Affiliate partneri</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Kada kliknete na link koji vodi do online kasina, može se podijeliti anonimizirana informacija o
                    tome kako ste došli do tog kasina (referral tracking). Ovo ne uključuje nikakve osobne podatke.
                  </p>
                </div>

                <div className="bg-muted/30 p-4 rounded">
                  <h4 className="font-bold text-foreground mb-2">Pravne obveze</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Možemo otkriti vaše podatke ako je to zakonski potrebno ili kao odgovor na valjane zahtjeve javnih
                    tijela (npr. sudski nalog).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Vaša prava prema GDPR-u</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                U skladu s GDPR zakonodavstvom, imate sljedeća prava u vezi s vašim osobnim podacima:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background p-4 rounded border border-border">
                  <h4 className="font-bold text-foreground mb-2">Pravo na pristup</h4>
                  <p className="text-sm text-muted-foreground">
                    Možete zatražiti kopiju svih osobnih podataka koje imamo o vama.
                  </p>
                </div>

                <div className="bg-background p-4 rounded border border-border">
                  <h4 className="font-bold text-foreground mb-2">Pravo na ispravak</h4>
                  <p className="text-sm text-muted-foreground">
                    Možete zatražiti ispravak netočnih ili nepotpunih podataka.
                  </p>
                </div>

                <div className="bg-background p-4 rounded border border-border">
                  <h4 className="font-bold text-foreground mb-2">Pravo na brisanje</h4>
                  <p className="text-sm text-muted-foreground">
                    Možete zatražiti brisanje vaših osobnih podataka ("pravo na zaborav").
                  </p>
                </div>

                <div className="bg-background p-4 rounded border border-border">
                  <h4 className="font-bold text-foreground mb-2">Pravo na ograničenje obrade</h4>
                  <p className="text-sm text-muted-foreground">
                    Možete ograničiti način na koji koristimo vaše podatke.
                  </p>
                </div>

                <div className="bg-background p-4 rounded border border-border">
                  <h4 className="font-bold text-foreground mb-2">Pravo na prenosivost</h4>
                  <p className="text-sm text-muted-foreground">
                    Možete dobiti svoje podatke u strukturiranom, strojno čitljivom formatu.
                  </p>
                </div>

                <div className="bg-background p-4 rounded border border-border">
                  <h4 className="font-bold text-foreground mb-2">Pravo na prigovor</h4>
                  <p className="text-sm text-muted-foreground">
                    Možete se usprotiviti obradi vaših podataka u određenim situacijama.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-background rounded border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Kako ostvariti svoja prava:</strong> Pošaljite nam email na{" "}
                  <a href="mailto:privacy@topigrehr.com" className="text-primary hover:underline">
                    privacy@topigrehr.com
                  </a>{" "}
                  s detaljima vašeg zahtjeva. Odgovorit ćemo u roku od 30 dana.
                </p>
              </div>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Sigurnost podataka</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Uzimamo sigurnost vaših podataka vrlo ozbiljno. Primjenjujemo odgovarajuće tehničke i organizacijske
                mjere za zaštitu vaših osobnih podataka od neovlaštenog pristupa, gubitka, uništenja ili oštećenja:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>SSL/TLS enkripcija za sve podatke u prijenosu</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>Sigurni serveri s redovitim sigurnosnim ažuriranjima</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>Ograničen pristup osobnim podacima samo ovlaštenom osoblju</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>Redovite sigurnosne provjere i testiranja</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Koliko dugo čuvamo podatke?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Čuvamo vaše osobne podatke samo onoliko dugo koliko je potrebno za svrhe navedene u ovoj politici
                privatnosti:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Analitički podaci:</strong> Anonimni podaci o korištenju
                    stranice čuvaju se do 2 godine
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Kolačići:</strong> Ovisno o tipu, od sesije do 2 godine
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Korespondencija:</strong> Email komunikacija čuva se do 3 godine
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border-2 border-primary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt i pritužbe</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ako imate pitanja o ovoj politici privatnosti ili želite ostvariti neko od svojih prava, kontaktirajte
                nas:
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email za privatnost:</strong>{" "}
                  <a href="mailto:privacy@topigrehr.com" className="text-primary hover:underline font-medium">
                    privacy@topigrehr.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Opći kontakt:</strong>{" "}
                  <a href="mailto:info@topigrehr.com" className="text-primary hover:underline font-medium">
                    info@topigrehr.com
                  </a>
                </p>
              </div>

              <div className="bg-muted/30 p-4 rounded">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Pravo na pritužbu:</strong> Ako smatrate da nismo pravilno
                  postupili s vašim osobnim podacima, imate pravo podnijeti pritužbu nadležnom tijelu za zaštitu
                  podataka u Hrvatskoj (Agencija za zaštitu osobnih podataka -{" "}
                  <a
                    href="https://azop.hr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    azop.hr
                  </a>
                  ).
                </p>
              </div>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Promjene politike privatnosti</h2>
              <p className="text-muted-foreground leading-relaxed">
                Možemo povremeno ažurirati ovu politiku privatnosti. Sve promjene bit će objavljene na ovoj stranici s
                ažuriranim datumom. Za značajnije promjene možemo vas obavijestiti dodatno (npr. putem obavijesti na
                stranici). Preporučamo da povremeno pregledate ovu stranicu kako biste bili informirani o tome kako
                štitimo vaše podatke.
              </p>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                Posljednje ažurirano: <strong className="text-foreground">Siječanj 2025</strong>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
