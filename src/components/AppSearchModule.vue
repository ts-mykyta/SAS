<script setup></script>


<template>
  <div class="relative z-10 max-w-4xl mx-auto mb-16 transform rotate-1">
    <div class="bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-card/30 p-8 lg:p-12">
      <div class="text-center mb-8">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Zaplanuj swoją przygodę</h2>
        <p class="text-gray-600 text-lg">Odkryj niezwykłe miejsca i doświadczenia</p>
      </div>
      <div class="w-full">
        <div class="relative ">
          <div class="absolute inset-0 bg-gradient-to-r from-travel-teal via-travel-blue to-travel-teal rounded-2xl blur opacity-75"></div>
          <div class="relative bg-card rounded-2xl p-4 sm:p-6 shadow-2xl">
            <div class="flex flex-col space-y-4 sm:space-y-6 ">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div class="flex items-center gap-2 text-lg sm:text-xl font-semibold text-travel-teal ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                  </svg>
                  <span>Znajdź Najlepsze Ceny</span>
                </div>
                <div class="flex bg-gray-100 rounded-lg p-1 w-fit "><button type="button" class="px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 bg-card dark:bg-gray-700 text-travel-teal shadow-sm">Podróż W Obie Strony</button><button type="button" class="px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Droga Jednokierunkowa</button></div>
              </div>
              <form class="space-y-4 sm:space-y-6 ">
                <div class="flex flex-wrap gap-4 [container-type:inline-size]">
                  <div class="space-y-2 min-w-[180px] flex-1">
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Od<span class="text-red-500 ml-1">*</span></label>
                    <div class="relative ">
                      <div class="relative">
                        <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane w-4 h-4 text-primary" aria-hidden="true">
                            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                          </svg>
                        </div>
                        <input class="flex w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 pr-10 h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-primary" placeholder="Miasto pochodzenia" required="" type="text" value="">
                        <div class="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1"></div>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-2 min-w-[180px] flex-1">
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Do<span class="text-red-500 ml-1">*</span></label>
                    <div class="relative ">
                      <div class="relative">
                        <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4 text-primary" aria-hidden="true">
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <input class="flex w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 pr-10 h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-primary" placeholder="Miasto docelowe" required="" type="text" value="">
                        <div class="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1"></div>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-2 min-w-[180px] flex-1">
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Wyjazd<span class="text-red-500 ml-1">*</span></label>
                    <div class="relative ">
                      <div class="relative">
                        <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4 text-primary" aria-hidden="true">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </div>
                        <input class="flex w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 pr-10 h-12 border-2 transition-colors border-gray-200 dark:border-gray-700 focus:border-primary" placeholder="YYYY-MM" pattern="\d{4}-\d{2}" required="" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«r0»" data-state="closed" type="month" value="">
                        <div class="absolute right-2 top-1/2 transform -translate-y-1/2"></div>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-2 min-w-[180px] flex-1">
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Powrót<span class="text-red-500 ml-1">*</span></label>
                    <div class="relative ">
                      <div class="relative">
                        <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4 text-primary" aria-hidden="true">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </div>
                        <input class="flex w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 pr-10 h-12 border-2 transition-colors border-gray-200 dark:border-gray-700 focus:border-primary" placeholder="YYYY-MM" pattern="\d{4}-\d{2}" required="" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«r1»" data-state="closed" type="month" value="">
                        <div class="absolute right-2 top-1/2 transform -translate-y-1/2"></div>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-2 min-w-[180px] flex-1">
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Pasażerowie</label>
                    <button class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 w-full h-12 justify-start text-left font-normal border-2 border-gray-200 dark:border-gray-700 hover:border-travel-teal" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«r2»" data-state="closed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users mr-2 h-4 w-4 text-travel-teal" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                      2 Pasażerowie
                    </button>
                  </div>
                  <div class="min-w-[180px] flex-1 flex items-end justify-center @[700px]:items-center">
                    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 px-4 py-2 h-12 w-full bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-primary text-white font-semibold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200" type="submit">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search mr-2 h-4 w-4" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                      Wyszukaj Loty
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
