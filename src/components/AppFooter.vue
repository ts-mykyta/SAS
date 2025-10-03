<script setup></script>

<template>
  <footer class="bg-gray-50 dark:bg-gray-900 border-t">
    <div class="container py-12">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div class="space-y-4">
            <div class="flex items-center gap-2">
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
                class="lucide lucide-plane w-6 h-6 text-theme-primary"
                aria-hidden="true"
              >
                <path
                  d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                ></path>
              </svg>
              <span class="text-xl font-bold text-theme-primary">MYTRIPSPOLAND</span>
            </div>
            <p class="text-muted-foreground text-sm leading-relaxed">
              Z nami każda podróż staje się wyjątkowa. Wybieramy tylko najlepsze miejsca i atrakcje, aby zapewnić Ci wspomnienia, które pozostaną z Tobą na zawsze.
            </p>
          </div>
          <div>
            <h4
              class="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-900 dark:text-gray-100"
            >
              Nawigacja
            </h4>
            <ul class="space-y-2">
              <li>
                <router-link
                  to="/"
                  class="text-sm text-muted-foreground hover:text-theme-primary transition-colors"
                  data-discover="true"
                  >Strona główna</router-link
                >
              </li>
              <li>
                <router-link
                  to="/about"
                  class="text-sm text-muted-foreground hover:text-theme-primary transition-colors"
                  data-discover="true"
                  >O nas</router-link
                >
              </li>
              <li>
                <router-link
                  to="/destinations"
                  class="text-sm text-muted-foreground hover:text-theme-primary transition-colors"
                  data-discover="true"
                  >Destynacje</router-link
                >
              </li>
              <li>
                <router-link
                  to="/activities"
                  class="text-sm text-muted-foreground hover:text-theme-primary transition-colors"
                  data-discover="true"
                  >Aktywności</router-link
                >
              </li>
              <li>
                <router-link
                  to="/contact"
                  class="text-sm text-muted-foreground hover:text-theme-primary transition-colors"
                  data-discover="true"
                  >Kontakt</router-link
                >
              </li>
            </ul>
          </div>
          <div>
            <h4
              class="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-900 dark:text-gray-100"
            >
              Prawne &amp; Wsparcie
            </h4>
            <ul class="space-y-2">
              <li>
                <router-link
                  to="/privacy-policy"
                  class="text-sm text-muted-foreground hover:text-theme-primary transition-colors flex items-center gap-2"
                  data-discover="true"
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
                    class="lucide lucide-shield w-3 h-3"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                  </svg>
                  Polityka prywatności
                </router-link>
              </li>
              <li>
                <router-link
                  to="terms"
                  class="text-sm text-muted-foreground hover:text-theme-primary transition-colors flex items-center gap-2"
                  data-discover="true"
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
                    class="lucide lucide-file-text w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                  Warunki Użytkowania
                </router-link>
              </li>
              <li>
                <router-link
                  to="/cookie"
                  class="text-sm text-muted-foreground hover:text-theme-primary transition-colors flex items-center gap-2"
                  data-discover="true"
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
                    class="lucide lucide-scale w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                    <path d="M7 21h10"></path>
                    <path d="M12 3v18"></path>
                    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
                  </svg>
                  Polityka plików cookie
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          class="shrink-0 bg-border h-[1px] w-full mb-6"
        ></div>
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-xs text-muted-foreground text-center sm:text-left">
            © 2025 MyTripsPoland. Wszelkie prawa zastrzeżone.
          </p>
          <div class="flex items-center gap-4 text-xs text-muted-foreground">
            <span class="flex items-center gap-1">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              Dostępne 24/7
            </span>
            <span>•</span><span>Bezpieczna Rezerwacja</span><span>•</span
            ><span>Gwarancja Najniższej Ceny</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
