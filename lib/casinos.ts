export interface Casino {
  id: string
  name: string
  url: string
  bonus: string
  logo: string
  rating: number
  votes: number
  terms: string
  isTopChoice?: boolean
}

export const casinos: Casino[] = [
  {
    id: "germania",
    name: "Germania",
    url: "https://www.germania.hr/",
    bonus: "Do 1000€ + 350 BESPLATNIH VRTNJI + 15€ Besplatna Oklada",
    logo: "/germania.png",
    rating: 9.7,
    votes: 1364,
    terms: "18+ | Uvjeti i odredbe vrijede | Samo za nove kupce | Uvjeti klađenja 30x | Vrijedi 21 dan",
  },
  {
    id: "psk",
    name: "PSK",
    url: "https://www.psk.hr/",
    bonus: "40 WENSHI LION EKSKLUZIVNO U PSK",
    logo: "/psk.webp",
    rating: 9.5,
    votes: 1584,
    terms: "18+ | Igrajte odgovorno | Novi igrači | Promet 35x | 30 dana | Potpuni T&C na web stranici",
  },
  {
    id: "favbet",
    name: "Favbet",
    url: "https://www.favbet.hr/",
    bonus: "do 3000€ + 500 BESPLATNIH VRTNJI",
    logo: "/favbet.svg",
    rating: 9.4,
    votes: 1926,
    terms: "18+ | Odgovorno klađenje | Licencirano | Brze isplate | 24/7 podrška",
    isTopChoice: true,
  },
  {
    id: "supersport",
    name: "SuperSport",
    url: "https://www.supersport.hr/",
    bonus: "do 300€ + 500 BESPLATNIH VRTNJI",
    logo: "/supersport.png",
    rating: 9.3,
    votes: 1649,
    terms: "18+ | Uvjeti vrijede | Samo novi igrači | Uvjeti klađenja 40x | Vrijedi 7 dana | Vidi potpuni T&C",
  },



]

export const topCasino = casinos[0]
