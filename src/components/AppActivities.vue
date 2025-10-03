<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false
  },
  subtitle: {
    type: String,
    required: false
  }
})
</script>

<template>
  <section class="section bg-primary/10">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{{ props?.title }}</h2>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{{ props?.subtitle }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RouterLink class="card-hover" :to="{ name: 'activity', params: { slug: 'wycieczka-rowerowa' } }" data-discover="true">
          <div class="rounded-lg border bg-card text-card-foreground overflow-hidden h-full border-none shadow-md">
            <div class="aspect-[16/9] overflow-hidden"><img loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Bike Tour" src="/images/biketour.png"></div>
            <div class="p-6">
              <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Bike Tour</h4>
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">Poczuj dreszczyk emocji odkrywając lokalne krajobrazy na dwóch kółkach, pedałując malowniczymi szlakami, urokliwymi wioskami, i zapierającymi dech w piersiach widokami.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Przygoda</div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary font-medium flex items-center">
                  Pokaż szczegóły
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4 ml-1" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </RouterLink>
        <RouterLink class="card-hover" :to="{ name: 'activity', params: { slug: 'wycieczka-po-miescie' } }" data-discover="true">
          <div class="rounded-lg border bg-card text-card-foreground overflow-hidden h-full border-none shadow-md">
            <div class="aspect-[16/9] overflow-hidden"><img loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="City Tour" src="/images/bustour.png"></div>
            <div class="p-6">
              <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3">City Tour</h4>
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">Rozpocznij fascynującą wycieczkę po mieście, która zabierze Cię przez tętniące życiem ulice, zabytkowe miejsca i barwne dzielnice. Odkryj ukryte historie, lokalne tradycje i ikoniczne atrakcje, zanurzając się w dynamicznej kulturze miasta.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Kultura</div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary font-medium flex items-center">
                  Pokaż szczegóły
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4 ml-1" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </RouterLink>
        <RouterLink class="card-hover" :to="{ name: 'activity', params: { slug: 'safari-dzikiej-przyrody' } }" data-discover="true">
          <div class="rounded-lg border bg-card text-card-foreground overflow-hidden h-full border-none shadow-md">
            <div class="aspect-[16/9] overflow-hidden"><img loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Wildlife Safari" src="/images/safari.png"></div>
            <div class="p-6">
              <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Wildlife Safari</h4>
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">Wyrusz na ekscytujące safari w dzikiej przyrodzie, aby obserwować majestatyczne stworzenia swobodnie przemierzające rozległe sawanny i bujne tereny podmokłe, oferujące niezapomniane spotkania z najbardziej ikonicznymi gatunkami natury.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Natura</div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary font-medium flex items-center">
                  Pokaż szczegóły
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4 ml-1" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </RouterLink>
        <RouterLink class="card-hover" :to="{ name: 'activity', params: { slug: 'degustacja-potraw' } }" data-discover="true">
          <div class="rounded-lg border bg-card text-card-foreground overflow-hidden h-full border-none shadow-md">
            <div class="aspect-[16/9] overflow-hidden"><img loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Food Tasting" src="/images/degustation.png"></div>
            <div class="p-6">
              <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Food Tasting</h4>
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">        Odkryj bogate smaki i kulinarne tradycje swojego miejsca docelowego, próbując różnorodnych lokalnych potraw, przekąsek i napojów. Prowadzeni przez kompetentnych gospodarzy odkryjesz ukryte perełki, poznasz regionalne składniki i zanurzysz się w kulturze poprzez jedzenie.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Jedzenie</div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary font-medium flex items-center">
                  Pokaż szczegóły
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4 ml-1" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </RouterLink>
        <RouterLink class="card-hover" :to="{ name: 'activity', params: { slug: 'nurkowanie-z-rurka' } }" data-discover="true">
          <div class="rounded-lg border bg-card text-card-foreground overflow-hidden h-full border-none shadow-md">
            <div class="aspect-[16/9] overflow-hidden"><img loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Snorkeling" src="/images/snorkeling.png"></div>
            <div class="p-6">
              <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Snorkeling</h4>
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">Nurkowanie z rurką oferuje ekscytujący wgląd w podwodne światy, pozwalając płynąć tuż nad kolorowymi ogrodami koralowymi i ciekawskim życiem morskim w czystych, płytkich wodach. Idealne dla wszystkich grup wiekowych, to dostępna przygoda, która odkrywa ukryte skarby natury.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Przygoda</div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary font-medium flex items-center">
                  Pokaż szczegóły
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4 ml-1" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </RouterLink>
        <RouterLink class="card-hover" :to="{ name: 'activity', params: { slug: 'dzien-na-plazy' } }" data-discover="true">
          <div class="rounded-lg border bg-card text-card-foreground overflow-hidden h-full border-none shadow-md">
            <div class="aspect-[16/9] overflow-hidden"><img loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Beach Day" src="/images/beach.png"></div>
            <div class="p-6">
              <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Beach Day</h4>
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">Beach Day to skąpane w słońcu nadmorskie doświadczenie, w którym możesz odpocząć na złotym piasku, popływać w krystalicznie czystych wodach i chłonąć tętniącą życiem nadmorską atmosferę z przyjaciółmi i rodziną.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">Natura</div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary font-medium flex items-center">
                  Pokaż szczegóły
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4 ml-1" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="text-center mt-12">
        <a class="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors" href="/pl-PL/activities" data-discover="true">
           Zobacz Pełną Listę Aktywności
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5 ml-2" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
