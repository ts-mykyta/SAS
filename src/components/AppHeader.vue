<script></script>

<template>
  <div class="lg:hidden">
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-4 lg:py-6">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center relative group">
            <a class="flex items-center gap-2" href="/pl-PL" data-discover="true"><span class="font-logo font-semibold tracking-wide uppercase text-white text-xl">StarsAndSummits</span></a>
            <div class="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>
          <div class="hidden lg:flex items-center">
            <div class="bg-muted/20 backdrop-blur-sm rounded-2xl p-2 border border-border/30 shadow-lg">
              <div class="flex items-center space-x-1">
                <a href="/pl-PL/destinations" data-discover="true">
                  <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 font-medium transition-all duration-300 relative rounded-xl px-4 py-2 mx-1 group text-white hover:text-accent hover:bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Destynacje
                  </button>
                </a>
                <a href="/pl-PL/activities" data-discover="true">
                  <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 font-medium transition-all duration-300 relative rounded-xl px-4 py-2 mx-1 group text-white hover:text-accent hover:bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                    </svg>
                    Aktywności
                  </button>
                </a>
                <a href="/pl-PL/contact" data-discover="true">
                  <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 font-medium transition-all duration-300 relative rounded-xl px-4 py-2 mx-1 group text-white hover:text-accent hover:bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                    Kontakt
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="hidden lg:flex items-center space-x-4">
            <div class="bg-muted/20 backdrop-blur-sm rounded-xl p-2 border border-border/30 shadow-lg text-white">
              <div class="flex items-center space-x-2 lg:space-x-4 flex-wrap">
                <div class="toggle-container">
                  <button class="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 hover:bg-muted toggle-button flex items-center space-x-1 text-white hover:text-muted-foreground h-9 px-3 min-w-[120px] max-w-[160px]" type="button" id="radix-«r32»" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                    <div class="flex items-center space-x-2 min-w-0"><span class="text-sm flex items-center gap-2 truncate toggle-text flex items-center space-x-1 text-white hover:text-muted-foreground"><span class="fi fi-pl fis flex-shrink-0" style="width: 16px; height: 16px;"></span> Polski</span></div>
                  </button>
                </div>
                <div class="toggle-container">
                  <button class="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 hover:bg-muted toggle-button flex items-center space-x-1 text-white hover:text-muted-foreground h-9 px-3 min-w-[120px] max-w-[160px]" type="button" id="radix-«r34»" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                    <div class="flex items-center space-x-2 min-w-0"><span class="text-sm flex items-center gap-2 truncate toggle-text flex items-center space-x-1 text-white hover:text-muted-foreground"><span class="font-medium flex-shrink-0">$</span><span class="truncate toggle-text">USD</span></span></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:hidden">
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-10 w-10 rounded-xl transition-all duration-300 hover:bg-muted/50 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6" aria-hidden="true">
                <path d="M4 12h16"></path>
                <path d="M4 18h16"></path>
                <path d="M4 6h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    <div data-debug="navigation2-mobile-menu-closed" style="display: none;">Mobile menu should be closed (state: false)</div>
  </div>
</template>

<style></style>
