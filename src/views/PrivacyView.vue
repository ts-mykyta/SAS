<script setup>
import { useHead } from '@unhead/vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppHeader from '@/components/AppHeader.vue'
import PolicyPromo from '@/components/policy/PolicyPromo.vue'
import AppFooter from '@/components/AppFooter.vue'

useHead({ title: 'Polityka prywatności – My Trips poland' })
</script>

<template>
  <div class="min-h-screen flex">
    <AppSidebar />
    <AppHeader />

    <div class="flex-1 flex flex-col lg:pl-64">
      <main class="flex-grow">
        <!-- Promo section -->
        <PolicyPromo
          budg="Informacje Prawne"
          title="Polityka prywatności"
          subtitle="Twoja prywatność to nasza pasja. Poznaj, jak mytripspoland.com zabezpiecza Twoje dane."
        />

        <section class="container mx-auto px-4 py-12 md:py-16">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <a
                href="#inform"
                class="rounded-lg bg-card text-card-foreground shadow-sm group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/30"
              >
                <div class="p-6">
                  <div class="flex items-center justify-between mb-4">
                    <h3
                      class="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                    >
                      Informacje Które Zbieramy
                    </h3>
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
                      class="lucide lucide-chevron-right h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                  <p class="text-sm text-muted-foreground line-clamp-2">
                    Kiedy zakładasz konto, rezerwujesz podróż, zapisujesz się do naszego newslettera
                    lub zwracasz się o pomoc, gromadzimy podane przez Ciebie szczegóły. Takie
                    informacje mogą obejmować:
                  </p>
                </div>
              </a>
              <a
                href="#useinform"
                class="rounded-lg bg-card text-card-foreground shadow-sm group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/30"
              >
                <div class="p-6">
                  <div class="flex items-center justify-between mb-4">
                    <h3
                      class="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                    >
                      Jak Korzystamy Z Informacji
                    </h3>
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
                      class="lucide lucide-chevron-right h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                  <p class="text-sm text-muted-foreground line-clamp-2">
                    Na My Trips Poland wykorzystujemy szczegóły, które zbieramy, do realizacji
                    kilku celów, takich jak:
                  </p>
                </div>
              </a>
              <a
                href="#accesability"
                class="rounded-lg bg-card text-card-foreground shadow-sm group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/30"
              >
                <div class="p-6">
                  <div class="flex items-center justify-between mb-4">
                    <h3
                      class="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                    >
                      Udostępnianie Informacji
                    </h3>
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
                      class="lucide lucide-chevron-right h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                  <p class="text-sm text-muted-foreground line-clamp-2">
                    W My Trips Poland, nigdy nie sprzedajemy, nie wymieniamy ani nie udostępniamy
                    Twoich danych osobowych osobom trzecim bez Twojej wyraźnej zgody, z wyjątkiem
                    następujących przypadków:
                  </p>
                </div>
              </a>
              <a
                href="#secure"
                class="rounded-lg bg-card text-card-foreground shadow-sm group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/30"
              >
                <div class="p-6">
                  <div class="flex items-center justify-between mb-4">
                    <h3
                      class="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                    >
                      Bezpieczeństwo Danych
                    </h3>
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
                      class="lucide lucide-chevron-right h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                  <p class="text-sm text-muted-foreground line-clamp-2">
                    Na stronie mytripspoland.com stosujemy solidne zabezpieczenia, aby chronić
                    Twoje dane osobowe przed nieautoryzowanym dostępem, modyfikacją, ujawnieniem lub
                    zniszczeniem. Nasze środki ostrożności obejmują:
                  </p>
                </div>
              </a>
              <a
                href="#rights"
                class="rounded-lg bg-card text-card-foreground shadow-sm group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/30"
              >
                <div class="p-6">
                  <div class="flex items-center justify-between mb-4">
                    <h3
                      class="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                    >
                      Twoje Prawa
                    </h3>
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
                      class="lucide lucide-chevron-right h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                  <p class="text-sm text-muted-foreground line-clamp-2">
                    W My Trips Poland zachowujesz określone prawa związane z Twoimi danymi
                    osobowymi, w tym:
                  </p>
                </div>
              </a>
              <a
                href="#cookie"
                class="rounded-lg bg-card text-card-foreground shadow-sm group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/30"
              >
                <div class="p-6">
                  <div class="flex items-center justify-between mb-4">
                    <h3
                      class="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                    >
                      Ciasteczka i Śledzenie
                    </h3>
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
                      class="lucide lucide-chevron-right h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                  <p class="text-sm text-muted-foreground line-clamp-2">
                    W My Trips Poland używamy plików cookie i powiązanych narzędzi śledzących, aby
                    wzbogacić Twoją przygodę na stronie. Aby zapoznać się ze wszystkimi szczegółami
                    dotyczącymi korzystania z plików cookie, zobacz naszą Politykę plików cookie.
                  </p>
                </div>
              </a>
              <a
                href="#childrens"
                class="rounded-lg bg-card text-card-foreground shadow-sm group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/30"
              >
                <div class="p-6">
                  <div class="flex items-center justify-between mb-4">
                    <h3
                      class="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                    >
                      Prywatność Dzieci
                    </h3>
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
                      class="lucide lucide-chevron-right h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                  <p class="text-sm text-muted-foreground line-clamp-2">
                    Nasze oferty nie są skierowane do osób w wieku poniżej 13 lat i nie zbieramy
                    celowo danych osobowych od osób niepełnoletnich poniżej 13 lat. Jeśli jesteś
                    rodzicem lub opiekunem, który uważa, że Twoje dziecko przekazało nam jakieś
                    informacje, prosimy o kontakt.
                  </p>
                </div>
              </a>
              <a
                href="#changes"
                class="rounded-lg bg-card text-card-foreground shadow-sm group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/30"
              >
                <div class="p-6">
                  <div class="flex items-center justify-between mb-4">
                    <h3
                      class="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                    >
                      Zmiany Polityki
                    </h3>
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
                      class="lucide lucide-chevron-right h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                  <p class="text-sm text-muted-foreground line-clamp-2">
                    W ramach naszego trwającego zobowiązania do ochrony Twoich informacji możemy
                    okresowo aktualizować niniejszą Politykę prywatności. Za każdym razem, gdy
                    nastąpią zmiany, opublikujemy tutaj nową wersję i zaktualizujemy datę „Ostatnia
                    aktualizacja”. Kontynuacja korzystania z naszych usług po wprowadzeniu tych
                    zmian oznacza akceptację zaktualizowanej Polityki prywatności.
                  </p>
                </div>
              </a>
              <a
                href="#contact"
                class="rounded-lg bg-card text-card-foreground shadow-sm group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/30"
              >
                <div class="p-6">
                  <div class="flex items-center justify-between mb-4">
                    <h3
                      class="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                    >
                      Skontaktuj się z nami
                    </h3>
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
                      class="lucide lucide-chevron-right h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                  <p class="text-sm text-muted-foreground line-clamp-2">
                    Masz pytania dotyczące naszej Polityki prywatności w My Trips Poland?
                    Skontaktuj się z naszym zespołem:
                  </p>
                </div>
              </a>
            </div>
            <div class="space-y-6">
              <div
                id="inform"
                class="rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden border-2 hover:border-primary/20 transition-colors"
              >
                <section id="information-collection">
                  <div class="bg-gradient-to-r from-muted/50 to-muted/30 p-6 border-b">
                    <h2
                      class="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3"
                    >
                      <span
                        class="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold"
                        >1</span
                      >Informacje Które Zbieramy
                    </h2>
                  </div>
                  <div class="p-6 md:p-8">
                    <div class="prose prose-lg max-w-none">
                      <p class="text-muted-foreground leading-relaxed mb-6">
                        Kiedy zakładasz konto, rezerwujesz podróż, zapisujesz się do naszego
                        newslettera lub zwracasz się o pomoc, gromadzimy podane przez Ciebie
                        szczegóły. Takie informacje mogą obejmować:
                      </p>
                      <div class="bg-muted/30 rounded-lg p-6 mb-6">
                        <h4 class="font-semibold text-foreground mb-4">Kluczowe Punkty:</h4>
                        <ul class="space-y-3">
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Twoje dane odkrywcy (pełne imię i nazwisko, adres e-mail oraz numer
                              telefonu)</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Informacje o transakcji (dane karty kredytowej, adres
                              rozliczeniowy)</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Wybory przygód i rejestr rezerwacji</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground">Preferencje Sygnału</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                id="useinform"
                class="rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden border-2 hover:border-primary/20 transition-colors"
              >
                <section id="how-we-use">
                  <div class="bg-gradient-to-r from-muted/50 to-muted/30 p-6 border-b">
                    <h2
                      class="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3"
                    >
                      <span
                        class="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold"
                        >2</span
                      >Jak Korzystamy Z Informacji
                    </h2>
                  </div>
                  <div class="p-6 md:p-8">
                    <div class="prose prose-lg max-w-none">
                      <p class="text-muted-foreground leading-relaxed mb-6">
                        Na My Trips Poland wykorzystujemy szczegóły, które zbieramy, do
                        realizacji kilku celów, takich jak:
                      </p>
                      <div class="bg-muted/30 rounded-lg p-6 mb-6">
                        <h4 class="font-semibold text-foreground mb-4">Kluczowe Punkty:</h4>
                        <ul class="space-y-3">
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Dostarczanie i utrzymywanie naszych ofert</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Usprawnianie rezerwacji i płatności</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Dostarczanie potwierdzeń rezerwacji, terminowych aktualizacji i
                              przyjaznych alertów wsparcia.</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Dopasowywanie twojej przygody z wyselekcjonowanymi spostrzeżeniami i
                              ekskluzywnymi ofertami</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Udoskonalanie naszej strony i oferty</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Wypełnianie wszystkich obowiązków prawnych</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                id="accesability"
                class="rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden border-2 hover:border-primary/20 transition-colors"
              >
                <section id="information-sharing">
                  <div class="bg-gradient-to-r from-muted/50 to-muted/30 p-6 border-b">
                    <h2
                      class="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3"
                    >
                      <span
                        class="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold"
                        >3</span
                      >Udostępnianie Informacji
                    </h2>
                  </div>
                  <div class="p-6 md:p-8">
                    <div class="prose prose-lg max-w-none">
                      <p class="text-muted-foreground leading-relaxed mb-6">
                        W My Trips Poland, nigdy nie sprzedajemy, nie wymieniamy ani nie
                        udostępniamy Twoich danych osobowych osobom trzecim bez Twojej wyraźnej
                        zgody, z wyjątkiem następujących przypadków:
                      </p>
                      <div class="bg-muted/30 rounded-lg p-6 mb-6">
                        <h4 class="font-semibold text-foreground mb-4">Kluczowe Punkty:</h4>
                        <ul class="space-y-3">
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Z pomocą dedykowanych partnerów serwisowych, którzy zasilają naszą
                              stronę internetową i wspierają nasze działania biznesowe.</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Z niezawodnymi partnerami podróży zarządzającymi Twoimi
                              rezerwacjami.</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground">
                              Kiedy jesteśmy prawnie zobowiązani lub aby dochodzić naszych
                              praw.</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Podczas przeniesienia własności lub połączenia przedsiębiorstw</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                id="secure"
                class="rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden border-2 hover:border-primary/20 transition-colors"
              >
                <section id="data-security">
                  <div class="bg-gradient-to-r from-muted/50 to-muted/30 p-6 border-b">
                    <h2
                      class="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3"
                    >
                      <span
                        class="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold"
                        >4</span
                      >Bezpieczeństwo Danych
                    </h2>
                  </div>
                  <div class="p-6 md:p-8">
                    <div class="prose prose-lg max-w-none">
                      <p class="text-muted-foreground leading-relaxed mb-6">
                        Na stronie mytripspoland.com stosujemy solidne zabezpieczenia, aby chronić
                        Twoje dane osobowe przed nieautoryzowanym dostępem, modyfikacją, ujawnieniem
                        lub zniszczeniem. Nasze środki ostrożności obejmują:
                      </p>
                      <div class="bg-muted/30 rounded-lg p-6 mb-6">
                        <h4 class="font-semibold text-foreground mb-4">Kluczowe Punkty:</h4>
                        <ul class="space-y-3">
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Zapewnij, że Twoje dane są przesyłane bezpiecznie dzięki szyfrowaniu
                              opartemu na SSL</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Wzmocnione serwery i magazyny danych</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Systematyczne oceny bezpieczeństwa i aktualizacje</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Warsztaty dla personelu w zakresie ochrony danych</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                id="rights"
                class="rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden border-2 hover:border-primary/20 transition-colors"
              >
                <section id="user-rights">
                  <div class="bg-gradient-to-r from-muted/50 to-muted/30 p-6 border-b">
                    <h2
                      class="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3"
                    >
                      <span
                        class="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold"
                        >5</span
                      >Twoje Prawa
                    </h2>
                  </div>
                  <div class="p-6 md:p-8">
                    <div class="prose prose-lg max-w-none">
                      <p class="text-muted-foreground leading-relaxed mb-6">
                        W My Trips Poland zachowujesz określone prawa związane z Twoimi danymi
                        osobowymi, w tym:
                      </p>
                      <div class="bg-muted/30 rounded-lg p-6 mb-6">
                        <h4 class="font-semibold text-foreground mb-4">Kluczowe Punkty:</h4>
                        <ul class="space-y-3">
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Twoje prawo dostępu do twoich danych osobowych.</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Twoje prawo do sprostowania wszelkich wprowadzających w błąd
                              informacji</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Twoje prawo do usunięcia twoich śladów danych osobowych</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Twoje prawo do ograniczenia sposobu, w jaki przetwarzane są Twoje
                              dane osobowe</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Wolność przenoszenia Twoich danych</span
                            >
                          </li>
                          <li class="flex items-start gap-3">
                            <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span class="text-muted-foreground"
                              >Twoje prawo do zakwestionowania przetwarzania danych</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                id="cookie"
                class="rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden border-2 hover:border-primary/20 transition-colors"
              >
                <section id="cookies">
                  <div class="bg-gradient-to-r from-muted/50 to-muted/30 p-6 border-b">
                    <h2
                      class="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3"
                    >
                      <span
                        class="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold"
                        >6</span
                      >Ciasteczka i Śledzenie
                    </h2>
                  </div>
                  <div class="p-6 md:p-8">
                    <div class="prose prose-lg max-w-none">
                      <p class="text-muted-foreground leading-relaxed mb-6">
                        W My Trips Poland używamy plików cookie i powiązanych narzędzi śledzących,
                        aby wzbogacić Twoją przygodę na stronie. Aby zapoznać się ze wszystkimi
                        szczegółami dotyczącymi korzystania z plików cookie, zobacz naszą Politykę
                        plików cookie.
                      </p>
                      <div
                        class="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10"
                      >
                        <h4 class="font-semibold text-foreground mb-4 flex items-center gap-2">
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
                            class="lucide lucide-mail h-5 w-5"
                            aria-hidden="true"
                          >
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                          </svg>
                          Dane Kontaktowe
                        </h4>
                        <div class="space-y-3">
                          <div class="flex items-center gap-3">
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
                              class="lucide lucide-external-link h-4 w-4 text-muted-foreground"
                              aria-hidden="true"
                            >
                              <path d="M15 3h6v6"></path>
                              <path d="M10 14 21 3"></path>
                              <path
                                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                              ></path>
                            </svg>
                            <span class="text-muted-foreground">
                              Visit our
                              <router-link
                                to="/cookie-policy"
                                class="text-primary hover:underline font-medium inline-flex items-center gap-1"
                                data-discover="true"
                              >
                                Cookie Policy
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
                                  class="lucide lucide-chevron-right h-3 w-3"
                                  aria-hidden="true"
                                >
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </router-link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                id="childrens"
                class="rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden border-2 hover:border-primary/20 transition-colors"
              >
                <section id="children-privacy">
                  <div class="bg-gradient-to-r from-muted/50 to-muted/30 p-6 border-b">
                    <h2
                      class="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3"
                    >
                      <span
                        class="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold"
                        >7</span
                      >Prywatność Dzieci
                    </h2>
                  </div>
                  <div class="p-6 md:p-8">
                    <div class="prose prose-lg max-w-none">
                      <p class="text-muted-foreground leading-relaxed mb-6">
                        Nasze oferty nie są skierowane do osób w wieku poniżej 13 lat i nie zbieramy
                        celowo danych osobowych od osób niepełnoletnich poniżej 13 lat. Jeśli jesteś
                        rodzicem lub opiekunem, który uważa, że Twoje dziecko przekazało nam jakieś
                        informacje, prosimy o kontakt.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <div
                id="changes"
                class="rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden border-2 hover:border-primary/20 transition-colors"
              >
                <section id="policy-changes">
                  <div class="bg-gradient-to-r from-muted/50 to-muted/30 p-6 border-b">
                    <h2
                      class="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3"
                    >
                      <span
                        class="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold"
                        >8</span
                      >Zmiany Polityki
                    </h2>
                  </div>
                  <div class="p-6 md:p-8">
                    <div class="prose prose-lg max-w-none">
                      <p class="text-muted-foreground leading-relaxed mb-6">
                        W ramach naszego trwającego zobowiązania do ochrony Twoich informacji możemy
                        okresowo aktualizować niniejszą Politykę prywatności. Za każdym razem, gdy
                        nastąpią zmiany, opublikujemy tutaj nową wersję i zaktualizujemy datę
                        „Ostatnia aktualizacja”. Kontynuacja korzystania z naszych usług po
                        wprowadzeniu tych zmian oznacza akceptację zaktualizowanej Polityki
                        prywatności.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <div
                id="contact"
                class="rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden border-2 hover:border-primary/20 transition-colors"
              >
                <section id="contact">
                  <div class="bg-gradient-to-r from-muted/50 to-muted/30 p-6 border-b">
                    <h2
                      class="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3"
                    >
                      <span
                        class="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold"
                        >9</span
                      >Skontaktuj się z nami
                    </h2>
                  </div>
                  <div class="p-6 md:p-8">
                    <div class="prose prose-lg max-w-none">
                      <p class="text-muted-foreground leading-relaxed mb-6">
                        Masz pytania dotyczące naszej Polityki prywatności w My Trips Poland?
                        Skontaktuj się z naszym zespołem:
                      </p>
                      <div
                        class="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10"
                      >
                        <h4 class="font-semibold text-foreground mb-4 flex items-center gap-2">
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
                            class="lucide lucide-mail h-5 w-5"
                            aria-hidden="true"
                          >
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                          </svg>
                          Dane Kontaktowe
                        </h4>
                        <div class="space-y-3">
                          <div class="flex items-center gap-3">
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
                              class="lucide lucide-mail h-4 w-4 text-muted-foreground"
                              aria-hidden="true"
                            >
                              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            </svg>
                            <span class="text-muted-foreground">
                              Email:
                              <a
                                href="mailto:privacy@mytripspoland.com"
                                class="text-primary hover:underline font-medium inline-flex items-center gap-1"
                              >
                                privacy@mytripspoland.com
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
                                  class="lucide lucide-external-link h-3 w-3"
                                  aria-hidden="true"
                                >
                                  <path d="M15 3h6v6"></path>
                                  <path d="M10 14 21 3"></path>
                                  <path
                                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                  ></path>
                                </svg>
                              </a>
                            </span>
                          </div>
                          <div class="flex items-center gap-3">
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
                              class="lucide lucide-external-link h-4 w-4 text-muted-foreground"
                              aria-hidden="true"
                            >
                              <path d="M15 3h6v6"></path>
                              <path d="M10 14 21 3"></path>
                              <path
                                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                              ></path>
                            </svg>
                            <span class="text-muted-foreground">
                              Visit our
                              <router-link
                                to="/contact"
                                class="text-primary hover:underline font-medium inline-flex items-center gap-1"
                                data-discover="true"
                              >
                                contact page
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
                                  class="lucide lucide-chevron-right h-3 w-3"
                                  aria-hidden="true"
                                >
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </router-link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  </div>
</template>
