<script setup></script>

<template>
  <nav
    class="hidden lg:block w-64 max-w-64 h-screen fixed left-0 top-0 bg-background shadow-lg z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out border-r border-border sidebar-border"
  >
    <nav class="w-full h-full bg-background overflow-y-auto border-r border-border sidebar-border">
      <div class="p-3 lg:p-4">
        <div class="mb-6 lg:mb-8 flex items-center justify-between">
          <router-link to="/" class="flex items-center gap-2" data-discover="true"
            ><span class="font-logo font-semibold tracking-wide uppercase text-primary text-xl"
              >StarsAndSummits</span
            ></router-link
          >
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 lg:hidden"
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
              class="lucide lucide-x h-5 w-5"
              aria-hidden="true"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div class="space-y-1 mb-4">
          <h3
            class="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2"
          >
            Główne Menu
          </h3>
          <router-link to="/destinations" data-discover="true">
            <button
              class="inline-flex items-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 w-full justify-start font-medium transition-all duration-200 relative text-sm h-9 px-3 text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary hover:bg-muted/50 dark:hover:bg-muted/20"
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
                class="lucide lucide-map-pin h-4 w-4 mr-2"
                aria-hidden="true"
              >
                <path
                  d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                ></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Destynacje
            </button>
          </router-link>
          <router-link to="/activities" data-discover="true">
            <button
              class="inline-flex items-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 w-full justify-start font-medium transition-all duration-200 relative text-sm h-9 px-3 text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary hover:bg-muted/50 dark:hover:bg-muted/20"
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
                class="lucide lucide-activity h-4 w-4 mr-2"
                aria-hidden="true"
              >
                <path
                  d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                ></path>
              </svg>
              Aktywności
            </button>
          </router-link>
          <a href="/pl-PL/contact" data-discover="true">
            <button
              class="inline-flex items-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 w-full justify-start font-medium transition-all duration-200 relative text-sm h-9 px-3 text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary hover:bg-muted/50 dark:hover:bg-muted/20"
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
                class="lucide lucide-mail h-4 w-4 mr-2"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              Kontakt
            </button>
          </a>
        </div>
        <div class="space-y-1 mb-4">
          <h3
            class="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2"
          >
            Szybkie Linki
          </h3>
          <router-link to="/about" data-discover="true">
            <button
              class="inline-flex items-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent py-2 w-full justify-start font-medium transition-all duration-200 relative text-sm h-8 px-3 text-muted-foreground hover:text-foreground"
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
                class="lucide lucide-compass h-3.5 w-3.5 mr-2"
                aria-hidden="true"
              >
                <path
                  d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
                ></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              O nas
            </button>
          </router-link>
          <a href="/pl-PL/contact" data-discover="true">
            <button
              class="inline-flex items-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent py-2 w-full justify-start font-medium transition-all duration-200 relative text-sm h-8 px-3 text-muted-foreground hover:text-foreground"
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
                class="lucide lucide-mail h-3.5 w-3.5 mr-2"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              Kontakt
            </button>
          </a>
          <router-link to="/privacy-policy" data-discover="true">
            <button
              class="inline-flex items-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent py-2 w-full justify-start font-medium transition-all duration-200 relative text-sm h-8 px-3 text-muted-foreground hover:text-foreground"
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
                class="lucide lucide-shield h-3.5 w-3.5 mr-2"
                aria-hidden="true"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                ></path>
              </svg>
              Polityka prywatności
            </button>
          </router-link>
          <router-link to="/terms" data-discover="true">
            <button
              class="inline-flex items-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent py-2 w-full justify-start font-medium transition-all duration-200 relative text-sm h-8 px-3 text-muted-foreground hover:text-foreground"
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
                class="lucide lucide-file-text h-3.5 w-3.5 mr-2"
                aria-hidden="true"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
              Warunki Użytkowania
            </button>
          </router-link>
          <router-link to="/cookie" data-discover="true">
            <button
              class="inline-flex items-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent py-2 w-full justify-start font-medium transition-all duration-200 relative text-sm h-8 px-3 text-muted-foreground hover:text-foreground"
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
                class="lucide lucide-scale h-3.5 w-3.5 mr-2"
                aria-hidden="true"
              >
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="M7 21h10"></path>
                <path d="M12 3v18"></path>
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
              </svg>
              Polityka plików cookie
            </button>
          </router-link>
        </div>
      </div>
    </nav>
  </nav>
</template>

<style></style>
