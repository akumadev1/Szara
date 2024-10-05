"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Hexagon, ChevronLeft, ChevronRight, Menu, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
const footerCategories = [
  {
    title: "Kierunki Kształcenia",
    links: [
      { name: "Oddział Przygotowania Wojskowego", href: "/programs/military-logistics-automotive" },
      { name: "Technik Reklamy", href: "/programs/advertising" },
      { name: "Technik Ekonomista", href: "/programs/economics" },
      { name: "Technik Hotelarstwa", href: "/programs/hotel-management" },
      { name: "Technik Informatyk", href: "/programs/computer-science" },
    ],
  },
  {
    title: "Zasoby",
    links: [
      { name: "Aktualności", href: "/blog" },
      { name: "Wydarzenia", href: "/events" },
      { name: "FAQ", href: "/faq" },
      { name: "Kontakt", href: "/contact" },
    ],
  },
]

const menuItems = [
  { title: "Strona Główna", href: "/" },
  {
    title: "O nas",
    href: "/TBAs",
    content: [
      { title: "TBA", description: "TBA", href: "/TBAs/a" },
      { title: "TBA", description: "TBA", href: "/TBAs/b" },
      { title: "TBA", description: "TBA", href: "/TBAs/c" },
      { title: "TBA", description: "TBA", href: "/TBAs/d" },
      { title: "TBA", description: "TBA", href: "/TBAs/d" },
    ],
  },
  {
    title: "Uczniowie i Rodzice",
    href: "/services",
    content: [
      { title: "TBA", description: "TBA", href: "/TBAs/a" },
      { title: "TBA", description: "TBA", href: "/TBAs/b" },
      { title: "TBA", description: "TBA", href: "/TBAs/c" },
      { title: "TBA", description: "TBA", href: "/TBAs/d" },
      { title: "TBA", description: "TBA", href: "/TBAs/d" },
    ],
  },
  { title: "Rekrutacja", href: "/about" },
  {
    title: "Projekty",
    href: "/resources",
    content: [
      { title: "PO WER", description: "Europejskie praktyki dla ZS nr 1 z Sokołowa Podlaskiego", href: "/TBAs/a" },
      { title: "ERAZMUS+", description: "W roku szkolnym 2021/2022 nasza szkoła realizowała projekt nr 2021-1-PL01-KA122-VET-000017718, dofinansowany przez Unię Europejską. Celem głównym projektu było umożliwienie uczniom Zespołu Szkół Nr 1 im. K. K. Baczyńskiego wszechstronnego rozwoju w obszarze zawodowym i osobistym dzięki wdrożeniu szeregu działań o skali europejskiej, obejmujących swym zakresem zagraniczne praktyki zawodowe.", href: "/TBAs/b" },
      { title: "ZRSZ", description: "Zespół Szkół Nr 1 im. K. K. Baczyńskiego przystąpił do projektu realizowanego przez Samorząd Województwa Mazowieckiego, przy udziale Agencji Rozwoju Mazowsza, pt. „Zintegrowany rozwój szkolnictwa zawodowego”. ", href: "/TBAs/c" },
    ],
  },
  {
    title: "Bezpieczeństwo",
    href: "/company",
    content: [
      { title: "TBA", description: "TBA", href: "/TBAs/a" },
      { title: "TBA", description: "TBA", href: "/TBAs/b" },
      { title: "TBA", description: "TBA", href: "/TBAs/c" },
      { title: "TBA", description: "TBA", href: "/TBAs/d" },
      { title: "TBA", description: "TBA", href: "/TBAs/d" },
    ],
  },
  {
    title: "E-szkoła",
    href: "/company1",
    content: [
      { title: "TBA", description: "TBA", href: "/TBAs/a" },
      { title: "TBA", description: "TBA", href: "/TBAs/b" },
      { title: "TBA", description: "TBA", href: "/TBAs/c" },
      { title: "TBA", description: "TBA", href: "/TBAs/d" },
      { title: "TBA", description: "TBA", href: "/TBAs/d" },
    ],
  },
]

const heroSlides = [
  {
    image: "/img/1.jpg",
    title: "IX Europejski Dzień Języków Obcych",
    description: "W dniach 19-20 września wzięliśmy udział w Warsztatach z okazji IX Europejskiego Dnia Języków Obcych , organizowanych przez Uniwersytet Siedlecki. Warsztaty prowadzone w języku angielskim, niemieckim i rosyjskim poruszały zagadnienia leksykalne, gramatyczne oraz...",
    buttonText: "Czytaj Dalej",
    buttonLink: "/solutions",
  },
  {
    image: "/img/2.jpg",
    title: "„Narodowe Czytanie” w naszej szkole",
    description: "27 września 2024 r. w naszej szkole odbyła się 13. edycja „Narodowego Czytania”, a jej przewodnim mottem stały się słowa francuskiego powieściopisarza Gustave’a Flaubert’a „Czytaj, aby żyć”.  W tym roku uczniowie wraz z nauczycielami wzięli udział we wspólnej lekturze...",
    buttonText: "Czytaj Dalej",
    buttonLink: "/services",
  },
  {
    image: "/img/3.jpg",
    title: "Mamy złoto",
    description: "W Powiatowych Igrzyskach Młodzieży Szkolnej w Piłce Nożnej Chłopców zdobyliśmy pierwsze miejsce. Wielkie gratulacje dla naszych piłkarzy, jesteśmy z Was bardzo dumni.",
    buttonText: "Czytaj Dalej",
    buttonLink: "/about",
  },
]
const educationalPrograms = [
  {
    title: "Oddział Przygotowania Wojskowego - Technik Logistyk - Technik Pojazdów Samochodowych",
    image: "/img/path1.jpg",
    link: "/programs/military-logistics-automotive",
  },
  {
    title: "Technik Reklamy",
    image: "/img/path2.jpg",
    link: "/programs/advertising",
  },
  {
    title: "Technik Ekonomista",
    image: "/img/path3.jpg",
    link: "/programs/economics",
  },
  {
    title: "Technik Hotelarstwa",
    image: "/img/path4.jpg",
    link: "/programs/hotel-management",
  },
  {
    title: "Technik Informatyk",
    image: "/img/path5.jpg",
    link: "/programs/computer-science",
  },
  {
    title: "Technik Logistyk",
    image: "/img/path6.jpg",
    link: "/programs/logistics",
  },
  {
    title: "Technik Pojazdów Samochodowych",
    image: "/img/path7.jpg",
    link: "/programs/automotive",
  },
  {
    title: "LO O Profilu Medyczno-Sportowym",
    image: "/img/path8.jpg",
    link: "/programs/medical-sports",
  },
  {
    title: "LO O Profilu Policyjno-Strażackim",
    image: "/img/path9.jpg",
    link: "/programs/police-fire-service",
  },
  {
    title: "Branżowa Szkoła I Stopnia - Wielozawodowa",
    image: "/img/path10.jpg",
    link: "/programs/vocational-school",
  },
]
const blogPosts = [
  {
    title: "„Narodowe Czytanie” w naszej szkole",
    description: `„Czytaj, aby żyć” (Gustave Flaubert)

27 września 2024 r. w naszej szkole odbyła się 13. edycja „Narodowego Czytania”, a jej przewodnim mottem stały się słowa francuskiego...`,
    image: "/img/blog-1.jpg",
    link: "/blogpost1/",
    author: "Admin",
    date: "2 października 2024",
  },
  {
    title: "Kolejny sukces strzelców sportowych z naszej szkoły",
    description: "W dniach 16-18.09.2024 r na strzelnicy sportowej w Bydgoszczy odbył się finał 63. Zawodów Strzeleckich  „0 Srebrne Muszkiety - 2024 ”...",
    image: "/img/blog-2.jpg",
    link: "/blog/",
    author: "Admin",
    date: "1 października 2024",
  },
  {
    title: "SPRZĄTANIE ŚWIATA - POLSKA 2024",
    description: "20 września 2024 roku  uczniowie naszej szkoły  włączyli się po raz kolejny w  akcję „Sprzątanie Świata – Polska 2024 ”. Tegoroczna ogólnopolska akcja odbywa się pod hasłem: „Na Straży Czystej Ziemi...",
    image: "/img/blog-3.jpg",
    link: "/blog/",
    author: "Admin",
    date: "30 września 2024",
  },
  {
    title: "IX Europejski Dzień Języków Obcych",
    description: "W dniach 19-20 września wzięliśmy udział w Warsztatach z okazji IX Europejskiego Dnia Języków Obcych , organizowanych przez Uniwersytet Siedlecki. Warsztaty prowadzone w języku angielskim...",
    image: "/img/blog-4.jpg",
    link: "/blog/",
    author: "Admin",
    date: "26 września 2024",
  },
  {
    title: "DIECEZJALNY DZIEŃ MŁODZIEŻY",
    description: "18 września- wzorem lat ubiegłych-  uczniowie naszej szkoły uczestniczyli w Diecezjalnym Dniu Młodzieży w Drohiczynie. Hasło tegorocznego spotkania: ,,Do wyższych rzeczy zostałem stworzony’’...",
    image: "/img/blog-5.jpg",
    link: "/blog/",
    author: "Admin",
    date: "24 września 2024",
  },
  {
    title: "UROCZYSTOŚĆ ROZPOCZĘCIA NOWEGO ROKU SZKOLNEGO 2024 / 2025",
    description: "W dzisiejszym dniu, po ponad dwumiesięcznym okresie wakacyjnym, spotkaliśmy się ponownie, pełni  entuzjazmu w murach naszej szkoły na uroczystości rozpoczęcia nowego roku szkolnego 2024 / 2025...",
    image: "/img/blog-6.jpg",
    link: "/blog/",
    author: "Admin",
    date: "21 września 2024",
  },
  {
    title: "Ogólnopolski Przegląd Musztry Klas Mundurowych",
    description: "Mamy powód do dumy.IV miejsce w Ogólnopolskim Przeglądzie Musztry Klas Mundurowych. Radom 2024.Przegraliśmy III miejsce w dogrywce 1 punktem .",
    image: "/img/blog-7.jpg",
    link: "/blog/",
    author: "Admin",
    date: "18 września 2024",
  },
  {
    title: "Posiłek w ciemno",
    description: `17 czerwca uczniowie Zespołu Szkół Nr 1 uczestniczyli w niezwykłym przedsięwzięciu edukacyjno - społecznym "Posiłek w ciemno", przygotowanym przez Kulinarne Poddasze w Siedlcach.   Eksperyment polegał na wyłączeniu zmysłu wzroku... `,
    image: "/img/blog-8.jpg",
    link: "/blog/",
    author: "Admin",
    date: "10 września 2024",
  },
  {
    title: "Otwarte Zawody Strzeleckie Klas Mundurowych o Puchar Starosty Sokołowskiego",
    description: "W zawodach brała udział młodzież ze szkół: Szkoły im. 72 Pułku Piechoty w Radomiu, Zespołu Szkół Ponadgimnazjalnych im. Jana Kochanowskiego w Węgrowie oraz Zespołu Szkół Nr 1 im. Krzysztofa Kamila Baczyńskiego z Sokołowa Podlaskiego...",
    image: "/img/blog-9.jpg",
    link: "/blog/",
    author: "Admin",
    date: "2 września 2024",
  },
  {
    title: "Uroczyste ślubowanie kadetów Zespół Szkół Nr 1 im. Krzysztofa Kamila Baczyńskiego w Sokołowie Podlaskim",
    description: "13 maja br. w Zespole Szkół Nr 1 im. K.K. Baczyńskiego odbyła się wyjątkowa uroczystość, ślubowanie na sztandar szkoły uczniów klas pierwszych Oddziału Przygotowania Wojskowego​​, liceum o profilu policyjnym i technikum o profilu wojskowym...",
    image: "/img/blog-10.jpg",
    link: "/blog/",
    author: "Admin",
    date: "13 Maja 2024",
  },
  {
    title: "Powrót młodzieży z programu Erasmus+",
    description: "Przez dwa tygodnie, w ramach programu Erasmus+, uczniowie technikum w zawodzie technik logistyk, technik informatyk i technik pojazdów samochodowych, uczestniczyli w zajęciach oraz odwiedzali branżowe greckie przedsiębiorstwa, obserwując i uczestnicząc...",
    image: "/img/blog-11.jpg",
    link: "/blog/ai-driven-customer-experience",
    author: "Admin",
    date: "12 Maja 2024",
  },
  {
    title: "Technik logistyk – wycieczka zawodowa do Centrum Logistycznego Lidl w Kałuszynie",
    description: "W dniu 17 maja 2024r. uczniowie klasy 2f  kształcący się w zawodzie technik logistyk wraz z opiekunami: p. Izabelą Malinowską, Izabellą Skórą, Agnieszką Raszuk odwiedzili Centrum Logistyczne Lidl w Kałuszynie oraz zespół parkowo-pałacowy w Mińsku Mazowieckim.",
    image: "/img/blog-12.jpg",
    link: "/blog/",
    author: "Admin",
    date: "17 Maja 2024",
  },
]

export function NavbarHeroSliderBlog() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [visiblePosts, setVisiblePosts] = React.useState(12)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const showMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + 4, blogPosts.length))
  }

  return (
    
    <div className="flex flex-col min-h-screen">
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Hexagon className="h-6 w-6 mr-2" />
              <span className="font-bold">Szara</span>
            </Link>
            <div className="hidden md:flex">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center space-x-1">
                  {menuItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      {item.content ? (
                        <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-medium">
                          {item.title}
                        </NavigationMenuTrigger>
                      ) : (
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                            {item.title}
                          </NavigationMenuLink>
                        </Link>
                      )}
                      {item.content && (
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.content.map((subItem) => (
                              <li key={subItem.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {subItem.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-lg font-medium hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {heroSlides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-[600px]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      style={{objectFit:"cover"}}
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                        <p className="text-xl mb-6">{slide.description}</p>
                        <Button asChild>
                          <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Najnowsze Wiadomości</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {blogPosts.slice(0, visiblePosts).map((post, index) => (
                <Card key={index} className="flex flex-col h-full overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{objectFit:"cover"}}
                      className="rounded-lg"
                    />
                  </div>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <p className="text-muted-foreground mb-4">{post.description}</p>
                    <div className="text-sm text-muted-foreground">
                      <p>Przez {post.author}</p>
                      <p>{post.date}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href={post.link}>Czytaj Dalej</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            {visiblePosts < blogPosts.length && (
              <div className="mt-12 text-center">
                <Button onClick={showMorePosts}>Show More</Button>
              </div>
            )}
          </div>
        </section>
        <section className="py-16 px-4 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Kierunki Kształcenia</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {educationalPrograms.map((program, index) => (
                <Link href={program.link} key={index} className="group">
                  <div className="relative w-[330px] h-[411px] rounded-lg overflow-hidden mx-auto">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      style={{objectFit:"cover"}}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 transition-opacity duration-300 group-hover:bg-opacity-75">
                      <h3 className="text-white text-center text-lg font-semibold">{program.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">O Nas</h3>
              <p className="text-sm text-gray-600">
                Zespół Szkół nr. 1 im. K.K Baczyńskiego w Sokołowie Podlaskim.
              </p>
              <div className="mt-4 flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
            {footerCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-400 text-center">
              © 2024 Zespół Szkoł nr. 1 im. K.K Baczyńskiego w Sokołowie Podlaskim. Wszelkie prawa zastrzeżone.
            </p>
            <p className="text-sm text-gray-400 text-center mt-2">
              Liczba odwiedzin: N/A
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
