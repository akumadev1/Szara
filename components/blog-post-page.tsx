'use client'

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Share2 } from "lucide-react"

export function BlogPostPageComponent() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <div className="flex justify-center space-x-2 mb-4">
          <Badge variant="secondary">N/A</Badge>
          <Badge variant="secondary">N/A</Badge>
          <Badge variant="secondary">N/A</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">„Narodowe Czytanie” w naszej szkole</h1>
        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
          <span className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            2 Października , 2024
          </span>
          <span className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            5 min czytania
          </span>
        </div>
      </header>

      <Image
        src="/img/blog-1.jpg"
        alt="Minimalist web design example"
        width={1600}
        height={800}
        className="rounded-lg object-cover w-full mb-8"
      />

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Author" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">Admin</p>
            <p className="text-sm text-muted-foreground">Admin</p>
          </div>
        </div>
        <Button variant="outline" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          Udostepnij
        </Button>
      </div>

      <div className="prose prose-gray max-w-none dark:prose-invert">
      <p className="text-lg leading-relaxed">
      27 września 2024 r. w naszej szkole odbyła się 13. edycja „Narodowego Czytania”, a jej przewodnim mottem stały się słowa francuskiego powieściopisarza Gustave’a Flaubert’a „Czytaj, aby żyć”. 
   W tym roku uczniowie wraz z nauczycielami wzięli udział we wspólnej lekturze „Kordiana” Juliusza Słowackiego. Przy wspaniałej scenerii, wzbogaconej prezentacją multimedialną, akompaniamencie fortepianu oraz arcymistrzowskim wykonaniu elementów pantomimy przez grupę teatralną „Sposób na teatr” spotkaliśmy się z Kordianem – młodym człowiekiem szukającym sensu życia i swojego miejsca w świecie. Dla młodzieży naszej szkoły była to bardzo pouczająca i wartościowa lekcja patriotyzmu połączona z popularyzacją czytelnictwa. Bowiem poświęcenie dla dobra ojczyzny stanowi ważny element naszego ducha narodowego. I jak napisał Prezydent RP Andrzej Duda w okolicznościowym liście, zachęcając do udziału w „Narodowym Czytaniu” dramatu J. Słowackiego: „utwór nadal przekonuje, że realizacja naszych polskich spraw z myślą o dobru i rozwoju Rzeczypospolitej dalej musi się opierać na odwadze i determinacji, a krytyczna analiza błędów i zaniechań z przeszłości jest równie ważna, jak inspiracja tym, co w naszej tradycji najpiękniejsze”.
   „Narodowe Czytanie” przygotowali: p. Agnieszka Pachołowska, p. Karolina Zalewska, p. Dorota Jastrzębska oraz uczniowie: Maja Machniewska (2a), Weronika Grzymała (2j), Dominika Ostrowska (3h), Krystian Sadokierski (2j), Kacper Baliński (5f), Michał Kałuski (3j), Jakub Paczóski (3j), Stanisław Puścian (3j), Cezary Sarna (3j), Kacper Rosak (3j), Michał Rydzewski (3j).
   Dziękujemy Dyrekcji, pedagogom i uczniom za udział w „Narodowym Czytaniu”. Mamy nadzieję, że wspólna lektura „Kordiana” wzmocniła poczucie naszej tożsamości i uzmysłowiła wszystkim, że nawet w natłoku obowiązków jesteśmy w stanie znaleźć czas na popularyzację czytelnictwa.
      </p>
      </div>
    </article>
  )
}