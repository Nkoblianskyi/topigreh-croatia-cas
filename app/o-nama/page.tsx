import Link from "next/link"

export const metadata = {
  title: "O nama - TopIgreHr.com",
  description:
    "Saznajte više o TopIgreHr.com - vodećoj platformi za usporedbu online kasina u Hrvatskoj. Naša misija, tim i vrijednosti.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-[#C9A961] hover:text-[#B8954E] font-semibold">
            ← Povratak na početnu
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-[#F5F1E8] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A3B5C] mb-4 text-center">O nama</h1>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Dobrodošli na TopIgreHr.com - vašeg pouzdanog vodiča u svijetu online kasina u Hrvatskoj
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Mission Section */}
        <section className="bg-white rounded-lg p-8 mb-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#1A3B5C] mb-6">Naša misija</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            TopIgreHr.com osnovan je s jasnom misijom: pomoći hrvatskim igračima da pronađu najbolja i najpouzdanija
            online kasina na tržištu. U svijetu prepunom izbora, razumijemo koliko može biti teško odabrati pravu
            platformu za igru. Zato smo stvorili detaljan sustav ocjenjivanja koji analizira sve ključne aspekte online
            kasina.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Naš tim stručnjaka provodi temeljite analize svakog kasina, provjeravajući licenciranje, sigurnost,
            kvalitetu igara, korisničku podršku i brzinu isplata. Sve informacije prezentiramo na transparentan i
            razumljiv način kako biste mogli donijeti informiranu odluku.
          </p>
        </section>

        {/* What We Do Section */}
        <section className="bg-white rounded-lg p-8 mb-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#1A3B5C] mb-6">Što radimo</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#C9A961] mb-3">Detaljne recenzije kasina</h3>
              <p className="text-gray-700 leading-relaxed">
                Svako kasino koje prikazujemo prolazi kroz temeljit proces ocjenjivanja. Testiramo registraciju, depozit
                metode, igre, bonus ponude i proces povlačenja novca. Naše recenzije temelje se na stvarnom iskustvu, ne
                samo na marketinškim materijalima.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#C9A961] mb-3">Provjera licenci i sigurnosti</h3>
              <p className="text-gray-700 leading-relaxed">
                Sigurnost je naš prioritet broj jedan. Provjeravamo da li kasina posjeduju važeće licence od priznatih
                regulatornih tijela, koriste SSL enkripciju za zaštitu podataka, i primjenjuju odgovorno kockanje.
                Prikazujemo samo licencirana i regulirana kasina.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#C9A961] mb-3">Usporedba bonusa i promocija</h3>
              <p className="text-gray-700 leading-relaxed">
                Bonus ponude mogu biti komplicirane. Analiziramo sve uvjete bonusa, wagering zahtjeve i vremensko
                ograničenja kako biste znali što očekivati. Ističemo najbolje ponude s pravednim uvjetima koje stvarno
                nude vrijednost igračima.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#C9A961] mb-3">Obrazovni sadržaj</h3>
              <p className="text-gray-700 leading-relaxed">
                Pružamo detaljna uputstva za početnike, objašnjenja pravila igara, strategije i savjete za odgovorno
                kockanje. Naš cilj je da budete informirani i sigurni dok igrate online.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="bg-white rounded-lg p-8 mb-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#1A3B5C] mb-6">Naše vrijednosti</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-[#C9A961] pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparentnost</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Svi naši kriteriji ocjenjivanja su javni i jasno objašnjeni. Nikada ne sakrivamo način na koji donosimo
                odluke o rangiranju kasina.
              </p>
            </div>

            <div className="border-l-4 border-[#C9A961] pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Neovisnost</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Naše recenzije su neovisne i objektivne. Kazina ne mogu kupiti bolje pozicije - rangiramo isključivo
                prema kvaliteti i korisničkom iskustvu.
              </p>
            </div>

            <div className="border-l-4 border-[#C9A961] pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Odgovornost</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Promičemo odgovorno kockanje i podržavamo organizacije koje pomažu osobama s problemima kockanja. Igre
                su zabava, ne način zarade.
              </p>
            </div>

            <div className="border-l-4 border-[#C9A961] pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Stručnost</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Naš tim ima godine iskustva u industriji online kockanja i kontinuirano prati sve trendove i promjene na
                tržištu.
              </p>
            </div>
          </div>
        </section>

        {/* How We Rate Section */}
        <section className="bg-white rounded-lg p-8 mb-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#1A3B5C] mb-6">Kako ocjenjujemo kasina</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Naš sustav ocjenjivanja temelji se na nekoliko ključnih kategorija, svaka s određenom težinom u konačnoj
            ocjeni:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#C9A961] text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Licenca i sigurnost (25%)</h4>
                <p className="text-gray-700 text-sm">
                  Provjera važećih licenci, SSL certifikata, politike privatnosti i zaštite podataka.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#C9A961] text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Kvaliteta igara (20%)</h4>
                <p className="text-gray-700 text-sm">
                  Broj i raznolikost igara, kvaliteta softvera, live kasino ponuda i RTP postoci.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#C9A961] text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Bonusi i promocije (15%)</h4>
                <p className="text-gray-700 text-sm">
                  Vrijednost bonusa, pravednost wagering zahtjeva, raznolikost promocija i lojalnost programi.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#C9A961] text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Plaćanja i isplate (20%)</h4>
                <p className="text-gray-700 text-sm">
                  Brzina isplata, raznolikost metoda plaćanja, minimalni limiti i naknade.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#C9A961] text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Korisnička podrška (10%)</h4>
                <p className="text-gray-700 text-sm">
                  Dostupnost podrške 24/7, vrijeme odgovora, jezici podrške i stručnost tima.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#C9A961] text-white rounded-full flex items-center justify-center font-bold">
                6
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Mobilno iskustvo (10%)</h4>
                <p className="text-gray-700 text-sm">
                  Kvaliteta mobilne verzije ili aplikacije, funkcionalnost i brzina učitavanja.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-br from-[#1A3B5C] to-[#2A4B6C] text-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Kontaktirajte nas</h2>
          <p className="mb-6 leading-relaxed">
            Imate pitanja ili prijedloge? Želite da pregledamo određeno kasino? Kontaktirajte nas!
          </p>
          <div className="space-y-2">
            <p>
              <strong>Email:</strong> info@topigrehr.com
            </p>
            <p>
              <strong>Web:</strong> www.topigrehr.com
            </p>
          </div>
          <p className="mt-6 text-sm text-gray-300">Odgovaramo na sve upite u roku od 24-48 sati.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A3B5C] text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-300">
            © 2025 TopIgreHr.com. Sva prava pridržana. Kockanje može biti ovisnost. Igrajte odgovorno. 18+
          </p>
        </div>
      </footer>
    </div>
  )
}
