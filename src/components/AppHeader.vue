<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="lg:hidden">
    <header
      v-if="isMobileMenuOpen == false"
      :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-gradient-to-r from-primary/80 to-accent/80 backdrop-blur-md shadow-md border-b border-white/10 py-3'
          : 'bg-transparent py-4',
      ]"
    >
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center relative group">
            <router-link to="/" class="flex items-center gap-2" data-discover="true"
              ><span class="font-logo font-semibold tracking-wide uppercase text-white text-xl"
                >StarsAndSummits</span
              ></router-link
            >
            <div
              class="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            ></div>
          </div>

          <div class="lg:hidden">
            <button
              @click="toggleMobileMenu"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-10 w-10 rounded-xl transition-all duration-300 hover:bg-muted/50 text-white"
            >
              <svg
                v-if="!isMobileMenuOpen"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-menu h-6 w-6 transition-transform duration-300"
                aria-hidden="true"
              >
                <path d="M4 12h16"></path>
                <path d="M4 18h16"></path>
                <path d="M4 6h16"></path>
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x h-6 w-6 transition-transform duration-300"
                aria-hidden="true"
              >
                <path d="M18 6L6 18"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile menu -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-40 lg:hidden">
      <div @click="closeMobileMenu" class="fixed inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div
        class="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out"
      >
        <div class="flex flex-col h-full">
          <div
            class="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700"
          >
            <router-link to="/" class="flex items-center gap-2">
              <span
                class="font-logo font-semibold tracking-wide uppercase text-gray-900 dark:text-white text-lg"
                >StarsAndSummits</span
              >
            </router-link>
            <button
              @click="closeMobileMenu"
              class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-gray-600 dark:text-gray-400"
              >
                <path d="M18 6L6 18"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <nav class="flex-1 p-6">
            <div class="mb-6">
              <h3
                class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4"
              >
                Główne Menu
              </h3>
              <div class="space-y-2">
                <router-link
                  @click="closeMobileMenu"
                  to="/destinations"
                  data-discover="true"
                  class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span class="text-gray-900 dark:text-white font-medium">Destynacje</span>
                </router-link>

                <router-link
                  @click="closeMobileMenu"
                  to="/activities"
                  data-discover="true"
                  class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors"
                  >
                    <path
                      d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                    ></path>
                  </svg>
                  <span class="text-gray-900 dark:text-white font-medium">Aktywności</span>
                </router-link>

                <router-link
                  @click="closeMobileMenu"
                  to="/contact"
                  data-discover="true"
                  class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                  <span class="text-gray-900 dark:text-white font-medium">Kontakt</span>
                </router-link>
              </div>
            </div>

            <div>
              <h3
                class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4"
              >
                Szybkie Linki
              </h3>
              <div class="space-y-2">
                <router-link
                  @click="closeMobileMenu"
                  to="/about"
                  data-discover="true"
                  class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors"
                  >
                    <path
                      d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
                    ></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300 font-medium">O nas</span>
                </router-link>

                <router-link
                  @click="closeMobileMenu"
                  to="/privacy-policy"
                  data-discover="true"
                  class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors"
                  >
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300 font-medium"
                    >Polityka prywatności</span
                  >
                </router-link>

                <router-link
                  @click="closeMobileMenu"
                  to="/terms"
                  data-discover="true"
                  class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300 font-medium"
                    >Warunki Użytkowania</span
                  >
                </router-link>

                <router-link
                  @click="closeMobileMenu"
                  to="/cookie"
                  data-discover="true"
                  class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors"
                  >
                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                    <path d="M7 21h10"></path>
                    <path d="M12 3v18"></path>
                    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300 font-medium"
                    >Polityka plików cookie</span
                  >
                </router-link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <div data-debug="navigation2-mobile-menu-closed" style="display: none">
      Mobile menu should be closed (state: false)
    </div>
  </div>
</template>

<style></style>
