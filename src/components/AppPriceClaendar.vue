<script setup></script>

<template>
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
</template>
