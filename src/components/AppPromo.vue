<script setup>
import { useRouter } from 'vue-router'
import AppSearchModule from './AppSearchModule.vue'

const props = defineProps({
  imageUrl: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
})

const router = useRouter()

const goToPriceCalendar = async () => {
  const targetId = 'price-calendar'
  const el = document.getElementById(targetId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }
  await router.push({ name: 'home', hash: `#${targetId}` })
}
</script>

<template>
  <section class="relative min-h-screen overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img
        loading="eager"
        decoding="async"
        class="w-full h-full object-cover"
        alt="Travel destination"
        :src="props?.imageUrl"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30"></div>
    </div>
    <div class="relative z-10 w-full px-4 md:px-8 lg:px-12 py-16 lg:py-24">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20 lg:mb-32 pt-8 lg:pt-12">
          <div
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full border border-primary/30 mb-8 shadow-2xl"
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
              class="lucide lucide-hexagon w-5 h-5 mr-2 text-white"
              aria-hidden="true"
            >
              <path
                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
              ></path>
            </svg>
            <span class="text-white font-semibold text-sm">Odkrycie Nieznane</span>
          </div>
          <h1
            class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none text-white mb-8 tracking-tight"
          >
            {{ props?.title }}
          </h1>
          <div class="max-w-3xl mx-auto">
            <p class="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed">
              {{ props?.subtitle }}
            </p>
          </div>
        </div>
        <div class="relative mb-20 lg:mb-32">
          <!-- Search Module -->
          <AppSearchModule />

          <div class="relative z-20 max-w-2xl mx-auto mb-12 transform -rotate-2">
            <div
              class="bg-gradient-to-br from-primary/25 to-secondary/25 backdrop-blur-md rounded-2xl p-8 border border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div class="text-center">
                <h3 class="text-2xl font-bold text-white mb-6">Gotowi, by poznawać świat?</h3>
                <div class="flex justify-center">
                  <button
                    @click="goToPriceCalendar"
                    type="button"
                    class="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors duration-200 mb-8"
                    aria-label="Przejdź do Kalendarza Cen"
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
                      class="lucide lucide-calendar w-5 h-5 mr-2"
                      aria-hidden="true"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    Kalendarz Cen Lotów
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="relative z-30 max-w-5xl mx-auto transform rotate-1">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div
                class="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-md rounded-2xl p-6 border border-primary/30 shadow-xl text-center transform hover:scale-105 transition-all duration-300"
              >
                <div class="text-3xl font-black text-primary mb-2">500+</div>
                <div class="text-gray-300 font-semibold">Epickie wypady</div>
              </div>
              <div
                class="bg-gradient-to-br from-secondary/20 to-primary/20 backdrop-blur-md rounded-2xl p-6 border border-secondary/30 shadow-xl text-center transform hover:scale-105 transition-all duration-300"
              >
                <div class="text-3xl font-black text-secondary mb-2">10K+</div>
                <div class="text-gray-300 font-semibold">Błogosławieni Odkrywcy</div>
              </div>
              <div
                class="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-md rounded-2xl p-6 border border-primary/30 shadow-xl text-center transform hover:scale-105 transition-all duration-300"
              >
                <div class="text-3xl font-black text-primary mb-2">4.9★</div>
                <div class="text-gray-300 font-semibold">Wynik Szczytu</div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-t-3xl"
          ></div>
          <div class="relative z-10 py-16 lg:py-20">
            <div class="text-center mb-12">
              <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
                Dlaczego Wybrać Gwiazdy &amp; Szczyty
              </h2>
              <p class="text-xl text-gray-300 max-w-2xl mx-auto">
                Odkryj płynne planowanie przygód dzięki naszej pionierskiej usłudze
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div class="text-center group">
                <div
                  class="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
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
                    class="lucide lucide-star w-10 h-10 text-white"
                    aria-hidden="true"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Wybitna Jakość</h3>
                <p class="text-gray-300 text-sm leading-relaxed">
                  Gwiezdne ekspedycje i ucieczki ze szczytu
                </p>
              </div>
              <div class="text-center group">
                <div
                  class="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
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
                    class="lucide lucide-calendar w-10 h-10 text-white"
                    aria-hidden="true"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Całodobowa Pomoc</h3>
                <p class="text-gray-300 text-sm leading-relaxed">Całodobowe wsparcie przygodowe</p>
              </div>
              <div class="text-center group">
                <div
                  class="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
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
                    class="lucide lucide-map-pin w-10 h-10 text-white"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Zasięg ogólno-planetarny</h3>
                <p class="text-gray-300 text-sm leading-relaxed">
                  Epickie eksploracje na każdym kontynencie
                </p>
              </div>
              <div class="text-center group">
                <div
                  class="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
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
                    class="lucide lucide-tag w-10 h-10 text-white"
                    aria-hidden="true"
                  >
                    <path
                      d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                    ></path>
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Oszczędności Prime</h3>
                <p class="text-gray-300 text-sm leading-relaxed">
                  Atrakcyjne stawki i specjalne oferty
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute top-32 left-8 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse"
    ></div>
    <div
      class="absolute top-48 right-12 w-12 h-12 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"
    ></div>
    <div
      class="absolute bottom-32 left-16 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse delay-2000"
    ></div>
    <div
      class="absolute bottom-48 right-8 w-14 h-14 bg-secondary/10 rounded-full blur-xl animate-pulse delay-3000"
    ></div>
  </section>
</template>
