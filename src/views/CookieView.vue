<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useHead } from '@unhead/vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppHeader from '@/components/AppHeader.vue'
import PolicyPromo from '@/components/policy/PolicyPromo.vue'
import AppFooter from '@/components/AppFooter.vue'

const toc = [
  { label: 'Czym Są Ciasteczka', id: 'what-are-cookies' },
  { label: 'Jak Używamy Plików Cookie', id: 'how-we-use' },
  { label: 'Rodzaje Plików Cookie Które Używamy', id: 'types-of-cookies' },
  { label: 'Ciasteczka stron trzecich', id: 'third-party-cookies' },
  { label: 'Zarządzanie plikami cookie', id: 'managing-cookies' },
  { label: 'Zgoda Na Pliki Cookie', id: 'cookie-consent' },
  { label: 'Aktualizacje tej polityki', id: 'updates' },
  { label: 'Skontaktuj się z nami', id: 'contact' },
]

const activeId = ref(toc[0].id)

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', `#${id}`)
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  history.replaceState(null, '', ' ')
}

let observer

onMounted(() => {
  const sections = toc.map((i) => document.getElementById(i.id)).filter(Boolean)

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeId.value = entry.target.id
      })
    },
    {
      root: null,
      rootMargin: '-120px 0px -60% 0px',
      threshold: 0.1,
    },
  )

  sections.forEach((s) => observer.observe(s))

  if (location.hash) {
    const id = decodeURIComponent(location.hash.slice(1))
    setTimeout(() => scrollToId(id), 0)
  }
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})

useHead({ title: 'Polityka plików cookie – StarsAndSummits' })
</script>

<template>
  <div class="min-h-screen flex">
    <AppSidebar />
    <AppHeader />

    <div class="flex-1 flex flex-col lg:pl-64">
      <main class="flex-grow">
        <!-- Promo section -->
        <PolicyPromo
          title="Polityka plików cookie"
          subtitle="Dowiedz się, jak nasze pliki cookie poprawiają Twoje wrażenia z przeglądania My Trips Poland."
        />

        <section class="container mx-auto px-4 py-8">
          <div class="max-w-4xl mx-auto">
            <div
              class="rounded-lg border bg-card text-card-foreground mb-8 p-6 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <h3 class="font-semibold text-lg mb-4" style="color: var(--theme-primary)">
                Spis Treści
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <button
                  v-for="item in toc"
                  :key="item.id"
                  type="button"
                  @click="scrollToId(item.id)"
                  class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-auto p-2 justify-start text-left border"
                  :class="
                    activeId === item.id
                      ? 'bg-accent text-accent-foreground border-transparent'
                      : 'hover:bg-accent hover:text-accent-foreground border-input'
                  "
                >
                  {{ item.label }}
                </button>
              </div>
            </div>
            <div class="space-y-8">
              <div
                class="rounded-lg border bg-card text-card-foreground p-6 md:p-8 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <section id="what-are-cookies">
                  <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary)">
                    Czym Są Ciasteczka
                  </h2>
                  <p class="dark:text-gray-300 mb-4">
                    Na My Trips Poland umieszczamy na Twoim komputerze lub urządzeniu mobilnym
                    niewielkie fragmenty tekstu — zwane ciasteczkami — gdy przeglądasz naszą
                    witrynę. Te małe pomocniki usprawniają Twoje przeglądanie i dostarczają nam
                    kluczowych informacji, aby ulepszyć Twoje doświadczenie.
                  </p>
                  <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li class="dark:text-gray-300">
                      Pliki cookie przechowują małe fragmenty danych, które są zapisywane na dysku
                      twardym komputera.
                    </li>
                    <li class="dark:text-gray-300">
                      Oni wspierają nas w udoskonalaniu naszej strony internetowej, umożliwiając
                      bogatsze i bardziej spersonalizowane doświadczenie.
                    </li>
                  </ul>
                </section>
              </div>
              <div
                class="rounded-lg border bg-card text-card-foreground p-6 md:p-8 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <section id="how-we-use">
                  <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary)">
                    Jak Używamy Plików Cookie
                  </h2>
                  <p class="dark:text-gray-300 mb-4">Wykorzystujemy pliki cookie do tych celów:</p>
                  <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li class="dark:text-gray-300">
                      Ciasteczka Trailblazer: One napędzają podróż naszej witryny, utrzymując każdą
                      stronę na właściwym kursie.
                    </li>
                    <li class="dark:text-gray-300">
                      Ciasteczka wydajności: dają nam wgląd w to, jak odwiedzający przeglądają naszą
                      witrynę i wchodzą z nią w interakcję.
                    </li>
                    <li class="dark:text-gray-300">
                      Pliki cookie funkcjonalne: Zapewniają bogatsze funkcje i spersonalizowane
                      ustawienia.
                    </li>
                    <li class="dark:text-gray-300">
                      Ciasteczka Expedition: Używamy ich do wyświetlania reklam skrojonych na miarę,
                      które odpowiadają Twoim pasjom podróżniczym.
                    </li>
                  </ul>
                </section>
              </div>
              <div
                class="rounded-lg border bg-card text-card-foreground p-6 md:p-8 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <section id="types-of-cookies">
                  <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary)">
                    Rodzaje Plików Cookie Które Używamy
                  </h2>
                  <p class="dark:text-gray-300 mb-4">Nieznane Widoki</p>
                  <div class="space-y-4">
                    <div class="border-l-4 border-primary/20 pl-4">
                      <h3 class="text-lg font-semibold mb-2 dark:text-gray-200">
                        Ciasteczka sesyjne
                      </h3>
                      <p class="dark:text-gray-300">
                        Są to pliki cookie sesji, które znikają po zamknięciu przeglądarki.
                        Pozwalają nam zapamiętywać Twoje wybory podczas przeglądania naszej witryny.
                      </p>
                    </div>
                    <div class="border-l-4 border-primary/20 pl-4">
                      <h3 class="text-lg font-semibold mb-2 dark:text-gray-200">
                        Trwałe Pliki Cookie
                      </h3>
                      <p class="dark:text-gray-300">
                        Jak drogowskazy na górskiej ścieżce, te pliki cookie pozostają na Twoim
                        urządzeniu przez określony czas—or dopóki ich nie usuniesz—zapewniając, że
                        za każdym razem, gdy ponownie odwiedzasz naszą stronę, rozpoznajemy Cię.
                      </p>
                    </div>
                    <div class="border-l-4 border-primary/20 pl-4">
                      <h3 class="text-lg font-semibold mb-2 dark:text-gray-200">
                        Pierwszej-Strony Ciasteczka
                      </h3>
                      <p class="dark:text-gray-300">
                        Te pliki cookie pochodzą od samego My Trips Poland, i tylko nasza strona
                        potrafi je odszyfrować.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <div
                class="rounded-lg border bg-card text-card-foreground p-6 md:p-8 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <section id="third-party-cookies">
                  <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary)">
                    Ciasteczka stron trzecich
                  </h2>
                  <p class="dark:text-gray-300 mb-4">
                    W My Trips Poland, kilka plików cookie pochodzi z usług naszych partnerów.
                    Możesz napotkać:
                  </p>
                  <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li class="dark:text-gray-300">
                      Google Analytics: Twój silnik analizy witryny
                    </li>
                    <li class="dark:text-gray-300">
                      Sieci społecznościowe zbudowane z myślą o bezwysiłkowym udostępnianiu.
                    </li>
                    <li class="dark:text-gray-300">
                      Dostosowane sieci reklamowe do precyzyjnego targetowania
                    </li>
                    <li class="dark:text-gray-300">
                      Bramki płatności klasy przygodowej do bezpiecznych transakcji
                    </li>
                  </ul>
                </section>
              </div>
              <div
                class="rounded-lg border bg-card text-card-foreground p-6 md:p-8 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <section id="managing-cookies">
                  <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary)">
                    Zarządzanie plikami cookie
                  </h2>
                  <p class="dark:text-gray-300 mb-4">
                    W My Trips Poland masz kilka opcji dostosowywania i zarządzania plikami
                    cookie:
                  </p>
                  <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li class="dark:text-gray-300">
                      W ustawieniach prywatności przeglądarki możesz wybrać, czy zezwolić na pliki
                      cookie, czy je zablokować.
                    </li>
                    <li class="dark:text-gray-300">
                      Usuń pliki cookie przeglądarki: Łatwo usuń wszystkie pliki cookie już zapisane
                      na Twoim urządzeniu.
                    </li>
                    <li class="dark:text-gray-300">
                      Zapobiegaj nadchodzącym plikom cookie: Możesz zablokować zapisywanie nowych
                      plików cookie
                    </li>
                  </ul>
                </section>
              </div>
              <div
                class="rounded-lg border bg-card text-card-foreground p-6 md:p-8 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <section id="cookie-consent">
                  <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary)">
                    Zgoda Na Pliki Cookie
                  </h2>
                  <p class="dark:text-gray-300 mb-4">
                    Kontynuując eksplorację My Trips Poland, zgadzasz się na użycie plików
                    cookie zgodnie z tą polityką. Zgodę możesz cofnąć w dowolnym momencie,
                    zmieniając ustawienia przeglądarki lub kontaktując się z nami bezpośrednio.
                  </p>
                </section>
              </div>
              <div
                class="rounded-lg border bg-card text-card-foreground p-6 md:p-8 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <section id="updates">
                  <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary)">
                    Aktualizacje tej polityki
                  </h2>
                  <p class="dark:text-gray-300 mb-4">
                    Na mytripspoland.com możemy okresowo odświeżać naszą Politykę plików cookie,
                    aby dostosować ją do nowych praktyk lub spełnić wymagania operacyjne, prawne lub
                    regulacyjne. Gdy wprowadzimy jakiekolwiek znaczące aktualizacje, opublikujemy
                    zmienioną politykę na naszej stronie internetowej, abyś zawsze był
                    poinformowany.
                  </p>
                </section>
              </div>
              <div
                class="rounded-lg border bg-card text-card-foreground p-6 md:p-8 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <section id="contact">
                  <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary)">
                    Skontaktuj się z nami
                  </h2>
                  <p class="dark:text-gray-300 mb-4">
                    Masz jakieś pytania dotyczące tego, jak obsługujemy cookies? Skontaktuj się z
                    nami tutaj:
                  </p>
                  <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p class="font-medium mb-2 dark:text-gray-200">Dane Kontaktowe:</p>
                    <ul class="space-y-2">
                      <li class="dark:text-gray-300">
                        Email:
                        <a
                          href="mailto:cookies@mytripspoland.com"
                          class="hover:underline font-medium"
                          style="color: var(--theme-primary)"
                          >cookies@mytripspoland.com</a
                        >
                      </li>
                      <li class="dark:text-gray-300">
                        Visit our
                        <router-link
                          class="hover:underline font-medium"
                          to="/contact"
                          data-discover="true"
                          style="color: var(--theme-primary)"
                          >contact page</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
            <div class="flex justify-center mt-8">
              <button
                @click="scrollToTop"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-full"
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
                  class="lucide lucide-chevron-up h-4 w-4 mr-1"
                  aria-hidden="true"
                >
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
                Powrót do Góry
              </button>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  </div>
</template>
