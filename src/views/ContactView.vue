<script setup>
import AppPromo from '@/components/AppPromo.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen flex">
    <AppSidebar />
    <AppHeader />

    <div class="flex-1 flex flex-col" style="padding-left: 256px">
      <main class="flex-grow">
        <!-- Promo section -->
        <AppPromo
          imageUrl="/images/home-promo.png"
          title="Wyślij sygnał"
          subtitle="Masz pytania dotyczące Twojej następnej przygody? Jesteśmy tutaj, aby pomóc ci zaprojektować niezapomnianą podróż. Skontaktuj się, a razem spełnimy Twoje podróżnicze marzenia."
        />

        <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-950">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div class="space-y-8">
                <div class="rounded-lg text-card-foreground border-0 shadow-lg bg-card">
                  <div class="flex flex-col space-y-1.5 p-6 pb-6">
                    <h3
                      class="tracking-tight text-2xl font-bold text-gray-900 dark:text-white flex items-center"
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
                        class="lucide lucide-globe w-6 h-6 mr-3 text-travel-teal"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Skontaktuj Się Z Nami
                    </h3>
                  </div>
                  <div class="p-6 pt-0 space-y-6">
                    <div
                      class="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                    >
                      <div
                        class="flex-shrink-0 w-12 h-12 bg-travel-teal/10 rounded-full flex items-center justify-center"
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
                          class="lucide lucide-mail w-6 h-6 text-travel-teal"
                          aria-hidden="true"
                        >
                          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
                          Gwiezdna Poczta
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300">info@starsandsummits.com</p>
                      </div>
                    </div>
                    <div
                      class="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                    >
                      <div
                        class="flex-shrink-0 w-12 h-12 bg-travel-blue/10 rounded-full flex items-center justify-center"
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
                          class="lucide lucide-map-pin w-6 h-6 text-travel-blue"
                          aria-hidden="true"
                        >
                          <path
                            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                          ></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
                          Lokalizacja
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300">
                          456 Bulwar Galaxy, Summitview, SS 67890
                        </p>
                      </div>
                    </div>
                    <div
                      class="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                    >
                      <div
                        class="flex-shrink-0 w-12 h-12 bg-travel-purple/10 rounded-full flex items-center justify-center"
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
                          class="lucide lucide-clock w-6 h-6 text-travel-purple"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
                          Godziny Otwarcia
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                          Od poniedziałku do piątku: 9 AM do 6 PM Sobota i niedziela: 10 AM do 4 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="rounded-lg text-card-foreground border-0 shadow-lg bg-gradient-to-br from-travel-teal/5 to-travel-blue/5 dark:from-travel-teal/10 dark:to-travel-blue/10"
                >
                  <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="tracking-tight text-xl font-bold text-gray-900 dark:text-white">
                      Szybka Odpowiedź
                    </h3>
                  </div>
                  <div class="p-6 pt-0">
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Dążymy do udzielenia odpowiedzi na każde zapytanie w ciągu 24 godzin. Jeśli
                      potrzebujesz pilnego wsparcia w podróży, wyślij nam e-mail, a odpowiemy tak
                      szybko, jak to możliwe.
                    </p>
                  </div>
                </div>
                <div
                  class="rounded-lg text-card-foreground border-0 shadow-lg bg-gradient-to-br from-travel-purple/5 to-travel-teal/5 dark:from-travel-purple/10 dark:to-travel-teal/10"
                >
                  <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="tracking-tight text-xl font-bold text-gray-900 dark:text-white">
                      Odkryj StarsAndSummits
                    </h3>
                  </div>
                  <div class="p-6 pt-0">
                    <p class="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                      Odkryj najlepsze ceny lotów i pakiety wakacyjne dzięki naszej intuicyjnej
                      platformie porównawczej.
                    </p>
                    <p class="text-gray-600 dark:text-gray-300">
                      Find us online at
                      <span class="font-semibold text-travel-teal">starsandsummits.com</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:pl-8">
                <div class="rounded-lg text-card-foreground border-0 shadow-xl bg-card">
                  <div class="flex flex-col space-y-1.5 p-6 text-center pb-8">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-travel-teal to-travel-blue rounded-full flex items-center justify-center mx-auto mb-4"
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
                        class="lucide lucide-send w-8 h-8 text-white"
                        aria-hidden="true"
                      >
                        <path
                          d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
                        ></path>
                        <path d="m21.854 2.147-10.94 10.939"></path>
                      </svg>
                    </div>
                    <h3 class="tracking-tight text-3xl font-bold text-gray-900 dark:text-white">
                      Prześlij Nam Swoje Myśli
                    </h3>
                    <p class="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                      Podaj poniżej swoje dane, a my odpowiemy, zanim zdążysz wypowiedzieć życzenie
                      na gwiazdę.
                    </p>
                  </div>
                  <div class="p-6 pt-0 px-8 pb-8">
                    <form class="space-y-6">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                          <label
                            for="name"
                            class="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                            >Twoje Imię *</label
                          ><input
                            class="flex w-full rounded-md px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-travel-teal dark:focus:border-travel-teal bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            id="name"
                            required=""
                            placeholder="Twoje pełne imię i nazwisko"
                            type="text"
                            value=""
                            name="name"
                          />
                        </div>
                        <div class="space-y-2">
                          <label
                            for="email"
                            class="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                            >Twój E-mail *</label
                          ><input
                            class="flex w-full rounded-md px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-travel-teal dark:focus:border-travel-teal bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            id="email"
                            required=""
                            placeholder="your@email.com"
                            type="email"
                            value=""
                            name="email"
                          />
                        </div>
                      </div>
                      <div class="space-y-2">
                        <label
                          for="subject"
                          class="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                          >Temat Wiadomości *</label
                        ><input
                          class="flex w-full rounded-md px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-travel-teal dark:focus:border-travel-teal bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                          id="subject"
                          required=""
                          placeholder="O co tu chodzi?"
                          type="text"
                          value=""
                          name="subject"
                        />
                      </div>
                      <div class="space-y-2">
                        <label
                          for="message"
                          class="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                          >Napisz Do Nas Wiadomość *</label
                        ><textarea
                          class="flex w-full rounded-md px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[140px] border-2 border-gray-200 dark:border-gray-700 focus:border-travel-teal dark:focus:border-travel-teal bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                          id="message"
                          name="message"
                          required=""
                          placeholder="        Powiedz nam o swoich planach podróży lub pytaniach..."
                        ></textarea>
                      </div>
                      <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 px-4 py-2 w-full h-14 bg-gradient-to-r from-travel-teal to-travel-blue hover:from-travel-blue hover:to-travel-teal text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        type="submit"
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
                          class="lucide lucide-send w-5 h-5 mr-2"
                          aria-hidden="true"
                        >
                          <path
                            d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
                          ></path>
                          <path d="m21.854 2.147-10.94 10.939"></path>
                        </svg>
                        Wyślij Nam Wiadomość
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  </div>
</template>
