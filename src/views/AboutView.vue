<script setup>
import AppSidebar from '@/components/AppSidebar.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppPromo from '@/components/AppPromo.vue'
import { useHead } from '@unhead/vue'

useHead({ title: 'O nas – StarsAndSummits' })
</script>

<template>
  <div class="min-h-screen flex" data-navigation-style="vertical" data-website-style="boxed">
    <AppSidebar />
    <AppHeader />
    <div class="flex-1 flex flex-col lg:pl-64">
      <main class="flex-grow">

        <!-- Promo section -->   
         <AppPromo
          imageUrl="/images/home-promo.png"
          title="Title for about page"
          subtitle="Subtitle for about page"
        />
        
        <!-- About section -->
        <div class="bg-gray-50 py-12 mt-20">
          <div class="container mx-auto px-4">
            <div class="text-center mb-16">
              <h1 class="text-4xl font-bold text-gray-900 mb-4">Odkryj StarsAndSummits</h1>
              <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Jesteśmy pasjonatami prowadzenia poszukiwaczy przygód do spektakularnych miejsc i
                tworzenia niezapomnianych podróży po całym świecie.
              </p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Nasza Gwiazda Przewodnia</h2>
                <p class="text-gray-600 mb-6">
                  Tutaj, w StarsAndSummits, wiemy, że odkrywanie nowych miejsc może obudzić ducha,
                  poszerzyć horyzonty i dostarczyć niezapomnianych chwil. Zobowiązujemy się do
                  uproszczenia planowania podróży i rozbudzania Twojej żądzy podróży dzięki
                  obszernym przewodnikom, profesjonalnym poradom i cennym wskazówkom od insiderów.
                </p>
                <p class="text-gray-600">
                  Od ekscytujących eskapad po spokojne schronienia, od immersyjnych spotkań
                  kulturowych po nieodparte kulinarne podróże, jesteśmy tu, by poprowadzić cię w
                  stronę twojego kolejnego wymarzonego wypadu.
                </p>
              </div>
              <div class="relative">
                <img
                  loading="lazy"
                  decoding="async"
                  class="rounded-lg shadow-lg w-full h-96 object-cover"
                  alt="Travel team"
                  src="/images/team.png"
                />
              </div>
            </div>
            <div class="mb-16">
              <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
                Nasze Przewodnie Światła
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div class="flex flex-col space-y-1.5 p-6 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-users h-12 w-12 text-primary mx-auto mb-4"
                      aria-hidden="true"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                    <h3 class="text-2xl font-semibold leading-none tracking-tight">
                      Niebiański Kolektyw
                    </h3>
                  </div>
                  <div class="p-6 pt-0">
                    <p class="text-gray-600 text-sm text-center">
                      Kultywowanie żywego kręgu odkrywców pełnych zamiłowania do podróży, dzielących
                      się przygodami i wspierających się nawzajem.
                    </p>
                  </div>
                </div>
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div class="flex flex-col space-y-1.5 p-6 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-globe h-12 w-12 text-primary mx-auto mb-4"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                    <h3 class="text-2xl font-semibold leading-none tracking-tight">
                      Autentyczność
                    </h3>
                  </div>
                  <div class="p-6 pt-0">
                    <p class="text-gray-600 text-sm text-center">
                      Dostarczanie autentycznych, godnych zaufania porad napędzanych prawdziwymi
                      przygodami i lokalną wiedzą z pierwszej ręki.
                    </p>
                  </div>
                </div>
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div class="flex flex-col space-y-1.5 p-6 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-award h-12 w-12 text-primary mx-auto mb-4"
                      aria-hidden="true"
                    >
                      <path
                        d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                      ></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                    <h3 class="text-2xl font-semibold leading-none tracking-tight">
                      Gwiezdne wyróżnienie
                    </h3>
                  </div>
                  <div class="p-6 pt-0">
                    <p class="text-gray-600 text-sm text-center">
                      Oddani dostarczaniu wyjątkowej jakości w każdym przewodniku turystycznym,
                      każdej rekomendacji i każdej wskazówce, którymi się dzielimy.
                    </p>
                  </div>
                </div>
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div class="flex flex-col space-y-1.5 p-6 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-heart h-12 w-12 text-primary mx-auto mb-4"
                      aria-hidden="true"
                    >
                      <path
                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                      ></path>
                    </svg>
                    <h3 class="text-2xl font-semibold leading-none tracking-tight">Żarliwość</h3>
                  </div>
                  <div class="p-6 pt-0">
                    <p class="text-gray-600 text-sm text-center">
                      Nasz entuzjazm do odkrywania napędza każdą sugestię, którą składamy, i każdą
                      rekomendację, którą dzielimy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mb-16">
              <h2 class="text-3xl font-bold text-gray-900 mb-8">Poznaj Naszą Załogę</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div class="p-6 pt-6">
                    <img
                      loading="lazy"
                      decoding="async"
                      class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                      alt="Team member"
                      src="/images/sierra.png"
                    />
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Sierra Jensen</h3>
                    <p class="text-primary mb-3">Założyciel &amp; Wirtuoz Podróży</p>
                    <p class="text-gray-600 text-sm">
                      Wykorzystując ponad 15 lat eksploracji w 60+ krajach, zapewnia StarsAndSummits
                      niezrównaną ekspertyzę podróżniczą.
                    </p>
                  </div>
                </div>
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div class="p-6 pt-6">
                    <img
                      loading="lazy"
                      decoding="async"
                      class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                      alt="Team member"
                      src="/images/michael.png"
                    />
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                      Michael „Starlight” Chen
                    </h3>
                    <p class="text-primary mb-3">Mistrz Przygód</p>
                    <p class="text-gray-600 text-sm">
                      Poświęcony ekscytującym wyprawom ekspedycyjnym i przygodom na świeżym
                      powietrzu, zdobywając szczyty na wszystkich siedmiu kontynentach.
                    </p>
                  </div>
                </div>
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div class="p-6 pt-6">
                    <img
                      loading="lazy"
                      decoding="async"
                      class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                      alt="Team member"
                      src="/images/emilia.png"
                    />
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Emilia Rodriguez</h3>
                    <p class="text-primary mb-3">Kurator Kulturalnych Przygód</p>
                    <p class="text-gray-600 text-sm">
                      Oddany immersyjnym podróżom kulturowym i autentycznym lokalnym odkryciom,
                      biegle włada pięcioma językami.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center bg-card rounded-lg p-8 shadow-md">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                Gotowy do rozpoczęcia swojej przygody?
              </h2>
              <p class="text-gray-600 mb-6">
                Dołącz do tysięcy odkrywców, którzy polegają na StarsAndSummits, aby odkryć
                niezapomniane miejsca.
              </p>
              <router-link
                to="/destinations"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-11 rounded-md px-8 bg-primary hover:bg-primary/90"
              >
                Odkryj Znakomite Lokalizacje
              </router-link>
            </div>
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
