import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolitikPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Politika Kolačića</h1>
            <p className="text-muted-foreground text-lg">Kako koristimo kolačiće na topigrehr.com platformi</p>
          </div>

          <div className="space-y-8">
            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Što su kolačići?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kolačići (cookies) su male tekstualne datoteke koje se pohranjuju na vašem uređaju kada posjetite našu
                web stranicu. Oni omogućuju web stranici da zapamti vaše radnje i postavke tijekom određenog vremena,
                što poboljšava vaše korisničko iskustvo i omogućava nam analizu korištenja stranice.
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Vrste kolačića koje koristimo</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">1. Nužni (esencijalni) kolačići</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ovi kolačići su neophodni za osnovno funkcioniranje web stranice. Omogućavaju osnovne funkcije poput
                    navigacije i pristupa sigurnim područjima stranice. Bez ovih kolačića, stranica ne može pravilno
                    funkcionirati.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong className="text-foreground">Primjeri:</strong> Kolačići za pamćenje vaših postavki
                    privatnosti, kolačići za sesiju
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">2. Analitički kolačići</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Koristimo analitičke kolačiće kako bismo razumjeli kako posjetitelji koriste našu web stranicu. Ovi
                    kolačići prikupljaju anonimne podatke o broju posjetitelja, izvoru prometa, pregledanim stranicama i
                    vremenu provedenom na stranici. Ove informacije pomažu nam poboljšati funkcionalnost i sadržaj naše
                    platforme.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong className="text-foreground">Koristimo:</strong> Vercel Analytics za potpuno anonimizirano
                    praćenje posjeta
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">3. Marketinški kolačići</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Marketinški kolačići se koriste za praćenje posjetitelja kroz različite web stranice. Njihova svrha
                    je prikazivanje relevantnih preporuka kazina i personaliziranog sadržaja. Ovi kolačići pomažu nam
                    razumjeti vaše interese kako bismo vam mogli pokazati najrelevantnije ponude.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong className="text-foreground">Partneri:</strong> Affiliate mreže naših partnerskih online
                    kasina
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Trajanje kolačića</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-foreground mb-2">Sesijski kolačići</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Privremeni kolačići koji se automatski brišu kada zatvorite preglednik. Koriste se za osnovne
                    funkcije tijekom jedne posjete stranici.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Trajni kolačići</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Ostaju pohranjeni na vašem uređaju određeno vrijeme ili dok ih ručno ne obrišete. Omogućavaju
                    stranici da vas prepozna pri sljedećoj posjeti i zapamti vaše postavke.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Upravljanje kolačićima</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Imate potpunu kontrolu nad kolačićima na našoj stranici. Možete ih prihvatiti ili odbiti kroz naš banner
                za kolačiće koji se pojavljuje pri prvoj posjeti. Također možete u bilo kojem trenutku promijeniti svoje
                postavke.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Većina web preglednika automatski prihvaća kolačiće, ali možete promijeniti postavke svog preglednika
                kako biste odbili kolačiće ili dobili obavijest kada vam se kolačić šalje. Imajte na umu da
                onemogućavanje kolačića može utjecati na funkcionalnost naše stranice.
              </p>
              <div className="bg-muted/30 p-4 rounded">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Kako obrisati kolačiće:</strong> U postavkama svog preglednika
                  pronađite odjeljak "Privatnost" ili "Kolačići" i odaberite opciju brisanja kolačića za našu domenu
                  (topigrehr.com).
                </p>
              </div>
            </div>

            <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Promjene politike kolačića</h2>
              <p className="text-muted-foreground leading-relaxed">
                Povremeno možemo ažurirati ovu politiku kolačića kako bismo odrazili promjene u našim praksama ili iz
                drugih operativnih, pravnih ili regulatornih razloga. Preporučamo da povremeno pregledate ovu stranicu
                kako biste bili informirani o tome kako koristimo kolačiće.
              </p>
            </div>

            <div className="bg-card border-2 border-primary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ako imate bilo kakva pitanja ili nedoumice vezane uz našu politiku kolačića, slobodno nas kontaktirajte:
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:info@topigrehr.com" className="text-primary hover:underline font-medium">
                    info@topigrehr.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Web stranica:</strong>{" "}
                  <span className="text-foreground font-medium">topigrehr.com</span>
                </p>
              </div>
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
