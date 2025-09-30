<script setup>
import HomePromo from "./home/HomePromo.vue";
</script>

<template>
  <div class="flex-1 flex flex-col">
    <main class="flex-grow">
      <!-- Promo section -->
      <HomePromo />

      <div class="bg-gray-50 dark:bg-gray-950">
        <section class="section">
          <div class="container">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Poznaj Popularne Destynacje</h2>
              <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">        Odkryj niesamowite miejsca na całym świecie, od dziewiczych wybrzeży po starożytne cuda miejskie, i zaplanuj swoją kolejną niezapomnianą podróż.</p>
            </div>
            <div class="w-full">
              <div class="flex justify-center mb-8">
                <div class="bg-muted rounded-lg p-1 max-w-4xl">
                  <div class="flex flex-wrap justify-center gap-1"><button class="text-xs lg:text-sm px-3 lg:px-4 py-2 whitespace-nowrap flex-shrink-0 rounded-md transition-colors bg-background text-foreground shadow-sm">Wszystko</button><button class="text-xs lg:text-sm px-3 lg:px-4 py-2 whitespace-nowrap flex-shrink-0 rounded-md transition-colors text-muted-foreground hover:text-foreground">Azja</button><button class="text-xs lg:text-sm px-3 lg:px-4 py-2 whitespace-nowrap flex-shrink-0 rounded-md transition-colors text-muted-foreground hover:text-foreground">Ameryka Południowa</button><button class="text-xs lg:text-sm px-3 lg:px-4 py-2 whitespace-nowrap flex-shrink-0 rounded-md transition-colors text-muted-foreground hover:text-foreground">Europa</button><button class="text-xs lg:text-sm px-3 lg:px-4 py-2 whitespace-nowrap flex-shrink-0 rounded-md transition-colors text-muted-foreground hover:text-foreground">Australia</button><button class="text-xs lg:text-sm px-3 lg:px-4 py-2 whitespace-nowrap flex-shrink-0 rounded-md transition-colors text-muted-foreground hover:text-foreground">Afryka</button><button class="text-xs lg:text-sm px-3 lg:px-4 py-2 whitespace-nowrap flex-shrink-0 rounded-md transition-colors text-muted-foreground hover:text-foreground">Oceania</button><button class="text-xs lg:text-sm px-3 lg:px-4 py-2 whitespace-nowrap flex-shrink-0 rounded-md transition-colors text-muted-foreground hover:text-foreground">Północna Ameryka</button></div>
                </div>
              </div>
              <div class="mt-0">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                  <a class="card-hover h-full flex" href="/pl-PL/destinations/thailand" data-discover="true">
                    <div class="rounded-lg border bg-card text-card-foreground overflow-hidden border-none shadow-md flex flex-col w-full">
                      <div class="aspect-[16/9] overflow-hidden"><img loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Thailand" src="/images/thailand.png"></div>
                      <div class="p-6 flex flex-col flex-1">
                        <div class="flex justify-between items-center mb-3">
                          <h4 class="text-xl font-bold text-gray-900 dark:text-white">Tajlandia</h4>
                          <div class="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary px-3 py-1 rounded-full text-sm font-medium">Azja</div>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 mb-4 flex-grow">Tajlandia jest żywym klejnotem Azji Południowo-Wschodniej, gdzie złote świątynie, bujne dżungle, tętniące życiem targi i nieskazitelne plaże tworzą bogatą mozaikę kultury, historii i piękna natury.</p>
                        <div class="flex flex-wrap gap-2 mb-4"></div>
                        <div class="mt-auto flex justify-end">
                          <span class="text-primary font-medium flex items-center">
                            Odkryj cel podróży
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5 ml-1" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a class="card-hover h-full flex" href="/pl-PL/destinations/brazil" data-discover="true">
                    <div class="rounded-lg border bg-card text-card-foreground overflow-hidden border-none shadow-md flex flex-col w-full">
                      <div class="aspect-[16/9] overflow-hidden"><img loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Brazil" src="/images/brazil.png"></div>
                      <div class="p-6 flex flex-col flex-1">
                        <div class="flex justify-between items-center mb-3">
                          <h4 class="text-xl font-bold text-gray-900 dark:text-white">Brazylia</h4>
                          <div class="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary px-3 py-1 rounded-full text-sm font-medium">Ameryka Południowa</div>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 mb-4 flex-grow">Brazylia to rozległy i tętniący życiem kraj w Ameryce Południowej znany ze swojego bogatego dziedzictwa kulturowego, różnorodnych ekosystemów, od lasu deszczowego Amazonii po dziewicze plaże, oraz światowej sławy festiwali, takich jak Karnawał, które celebrują jego żywiołowego ducha.</p>
                        <div class="flex flex-wrap gap-2 mb-4"></div>
                        <div class="mt-auto flex justify-end">
                          <span class="text-primary font-medium flex items-center">
                            Odkryj cel podróży
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5 ml-1" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a class="card-hover h-full flex" href="/pl-PL/destinations/iceland" data-discover="true">
                    <div class="rounded-lg border bg-card text-card-foreground overflow-hidden border-none shadow-md flex flex-col w-full">
                      <div class="aspect-[16/9] overflow-hidden"><img loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Iceland" src="/images/island.png"></div>
                      <div class="p-6 flex flex-col flex-1">
                        <div class="flex justify-between items-center mb-3">
                          <h4 class="text-xl font-bold text-gray-900 dark:text-white">Islandia</h4>
                          <div class="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary px-3 py-1 rounded-full text-sm font-medium">Europa</div>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 mb-4 flex-grow">Islandia jest krainą ognia i lodu, gdzie wulkaniczne szczyty, potężne lodowce i geotermalne gorące źródła tworzą nieziemskie krajobrazy. Od tętniącej życiem zorzy polarnej tańczącej po niebie po grzmiące wodospady i czarne piaszczyste plaże, Islandia oferuje poszukiwaczom przygód dramatyczną i niezapomnianą podróż.</p>
                        <div class="flex flex-wrap gap-2 mb-4"></div>
                        <div class="mt-auto flex justify-end">
                          <span class="text-primary font-medium flex items-center">
                            Odkryj cel podróży
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5 ml-1" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="text-center mt-12">
              <a class="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200" href="/pl-PL/destinations" data-discover="true">
                Zobacz wszystkie destynacje
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5 ml-2" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
      <section id="price-calendar">
        <section class="py-6 sm:py-8 lg:py-12 bg-background">
          <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div class="text-center mb-6 sm:mb-8 lg:mb-12">
              <h2 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-2 sm:mb-3 lg:mb-4">Prognoza Cen Biletów Lotniczych</h2>
              <p class="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">Porównaj ceny lotów i znajdź najlepsze oferty na swoją następną podróż</p>
            </div>
            <div class="bg-card border rounded-xl p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6 lg:mb-8 shadow-sm">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div class="space-y-1 sm:space-y-2">
                  <label class="block text-sm font-medium text-muted-foreground">Od</label>
                  <div class="relative ">
                    <div class="relative">
                      <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane w-4 h-4 text-primary" aria-hidden="true">
                          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                        </svg>
                      </div>
                      <input class="flex w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 pr-10 h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-primary" placeholder="Wyszukaj lotniska..." required="" type="text" value="">
                      <div class="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1"></div>
                    </div>
                  </div>
                </div>
                <div class="space-y-1 sm:space-y-2">
                  <label class="block text-sm font-medium text-muted-foreground">Do</label>
                  <div class="relative ">
                    <div class="relative">
                      <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4 text-primary" aria-hidden="true">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <input class="flex w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 pr-10 h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-primary" placeholder="Wyszukaj lotniska..." required="" type="text" value="">
                      <div class="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"></div>
          </div>
        </section>
      </section>
      <section class="section bg-primary/10">
        <div class="container">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Popularne aktywności</h2>
            <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Odkryj ekscytujące przygody i wciągające doświadczenia, które zamienią twoje podróże w niezapomniane wspomnienia.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a class="card-hover" href="/pl-PL/activities/bike-tour" data-discover="true">
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
            </a>
            <a class="card-hover" href="/pl-PL/activities/city-tour" data-discover="true">
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
            </a>
            <a class="card-hover" href="/pl-PL/activities/wildlife-safari" data-discover="true">
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
            </a>
            <a class="card-hover" href="/pl-PL/activities/food-tasting" data-discover="true">
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
            </a>
            <a class="card-hover" href="/pl-PL/activities/snorkeling" data-discover="true">
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
            </a>
            <a class="card-hover" href="/pl-PL/activities/beach-day" data-discover="true">
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
            </a>
          </div>
          <div class="text-center mt-12">
            <a class="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors" href="/pl-PL/activities" data-discover="true">
              Pokaż Wszystkie Aktywności
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5 ml-2" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
    <footer class="bg-gray-50 dark:bg-gray-900 border-t">
      <div class="container py-12">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div class="space-y-4">
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane w-6 h-6 text-theme-primary" aria-hidden="true">
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                </svg>
                <span class="text-xl font-bold text-theme-primary">StarsAndSummits</span>
              </div>
              <p class="text-muted-foreground text-sm leading-relaxed">Twój niezawodny towarzysz w niezwykłych podróżach. Starannie wybieramy najlepsze destynacje i wciągające przygody, aby pomóc Ci stworzyć wspomnienia na całe życie.</p>
            </div>
            <div>
              <h4 class="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-900 dark:text-gray-100">Nawigacja</h4>
              <ul class="space-y-2">
                <li><a class="text-sm text-muted-foreground hover:text-theme-primary transition-colors" href="/pl-PL" data-discover="true">Strona główna</a></li>
                <li><a class="text-sm text-muted-foreground hover:text-theme-primary transition-colors" href="/pl-PL/about" data-discover="true">O nas</a></li>
                <li><a class="text-sm text-muted-foreground hover:text-theme-primary transition-colors" href="/pl-PL/destinations" data-discover="true">Destynacje</a></li>
                <li><a class="text-sm text-muted-foreground hover:text-theme-primary transition-colors" href="/pl-PL/activities" data-discover="true">Aktywności</a></li>
                <li><a class="text-sm text-muted-foreground hover:text-theme-primary transition-colors" href="/pl-PL/contact" data-discover="true">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-900 dark:text-gray-100">Prawne &amp; Wsparcie</h4>
              <ul class="space-y-2">
                <li>
                  <a class="text-sm text-muted-foreground hover:text-theme-primary transition-colors flex items-center gap-2" href="/pl-PL/privacy-policy" data-discover="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield w-3 h-3" aria-hidden="true">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                    Polityka prywatności
                  </a>
                </li>
                <li>
                  <a class="text-sm text-muted-foreground hover:text-theme-primary transition-colors flex items-center gap-2" href="/pl-PL/terms-of-use" data-discover="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-3 h-3" aria-hidden="true">
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>
                    Warunki Użytkowania
                  </a>
                </li>
                <li>
                  <a class="text-sm text-muted-foreground hover:text-theme-primary transition-colors flex items-center gap-2" href="/pl-PL/cookie-policy" data-discover="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scale w-3 h-3" aria-hidden="true">
                      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                      <path d="M7 21h10"></path>
                      <path d="M12 3v18"></path>
                      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
                    </svg>
                    Polityka plików cookie
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full mb-6"></div>
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p class="text-xs text-muted-foreground text-center sm:text-left">© 2025 StarsAndSummits. Wszelkie prawa zastrzeżone.</p>
            <div class="flex items-center gap-4 text-xs text-muted-foreground">
              <span class="flex items-center gap-1">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                Dostępne 24/7
              </span>
              <span>•</span><span>Bezpieczna Rezerwacja</span><span>•</span><span>Gwarancja Najniższej Ceny</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
