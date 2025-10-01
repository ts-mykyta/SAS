<script setup>
import AppSidebar from '@/components/AppSidebar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen flex" data-navigation-style="vertical" data-website-style="boxed">
    <AppSidebar />
    <div class="lg:hidden">
      <header
        class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-4 lg:py-6"
      >
        <div class="container mx-auto px-4 lg:px-8">
          <div class="flex items-center justify-between">
            <div class="flex items-center relative group">
              <a class="flex items-center gap-2" href="/pl-PL" data-discover="true"
                ><span class="font-logo font-semibold tracking-wide uppercase text-white text-xl"
                  >StarsAndSummits</span
                ></a
              >
              <div
                class="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              ></div>
            </div>
            <div class="hidden lg:flex items-center">
              <div
                class="bg-muted/20 backdrop-blur-sm rounded-2xl p-2 border border-border/30 shadow-lg"
              >
                <div class="flex items-center space-x-1">
                  <a href="/pl-PL/destinations" data-discover="true">
                    <button
                      class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 font-medium transition-all duration-300 relative rounded-xl px-4 py-2 mx-1 group text-white hover:text-accent hover:bg-white/10"
                    >
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
                        class="lucide lucide-map-pin h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      >
                        <path
                          d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                        ></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      Destynacje
                    </button>
                  </a>
                  <a href="/pl-PL/activities" data-discover="true">
                    <button
                      class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 font-medium transition-all duration-300 relative rounded-xl px-4 py-2 mx-1 group text-white hover:text-accent hover:bg-white/10"
                    >
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
                        class="lucide lucide-activity h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      >
                        <path
                          d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                        ></path>
                      </svg>
                      Aktywności
                    </button>
                  </a>
                  <a href="/pl-PL/contact" data-discover="true">
                    <button
                      class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 font-medium transition-all duration-300 relative rounded-xl px-4 py-2 mx-1 group text-white hover:text-accent hover:bg-white/10"
                    >
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
                        class="lucide lucide-mail h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                      Kontakt
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="hidden lg:flex items-center space-x-4">
              <div
                class="bg-muted/20 backdrop-blur-sm rounded-xl p-2 border border-border/30 shadow-lg text-white"
              >
                <div class="flex items-center space-x-2 lg:space-x-4 flex-wrap">
                  <div class="toggle-container">
                    <button
                      class="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 hover:bg-muted toggle-button flex items-center space-x-1 text-white hover:text-muted-foreground h-9 px-3 min-w-[120px] max-w-[160px]"
                      type="button"
                      id="radix-«r3p»"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-state="closed"
                    >
                      <div class="flex items-center space-x-2 min-w-0">
                        <span
                          class="text-sm flex items-center gap-2 truncate toggle-text flex items-center space-x-1 text-white hover:text-muted-foreground"
                          ><span
                            class="fi fi-pl fis flex-shrink-0"
                            style="width: 16px; height: 16px"
                          ></span>
                          Polski</span
                        >
                      </div>
                    </button>
                  </div>
                  <div class="toggle-container">
                    <button
                      class="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 hover:bg-muted toggle-button flex items-center space-x-1 text-white hover:text-muted-foreground h-9 px-3 min-w-[120px] max-w-[160px]"
                      type="button"
                      id="radix-«r3r»"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-state="closed"
                    >
                      <div class="flex items-center space-x-2 min-w-0">
                        <span
                          class="text-sm flex items-center gap-2 truncate toggle-text flex items-center space-x-1 text-white hover:text-muted-foreground"
                          ><span class="font-medium flex-shrink-0">$</span
                          ><span class="truncate toggle-text">USD</span></span
                        >
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:hidden">
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-10 w-10 rounded-xl transition-all duration-300 hover:bg-muted/50 text-white"
              >
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
                  class="lucide lucide-menu h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M4 12h16"></path>
                  <path d="M4 18h16"></path>
                  <path d="M4 6h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div data-debug="navigation2-mobile-menu-closed" style="display: none">
        Mobile menu should be closed (state: false)
      </div>
    </div>
    <div class="flex-1 flex flex-col" style="padding-left: 256px">
      <main class="flex-grow">
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
