<script setup>
import AppPromo from '@/components/AppPromo.vue'
import { useHead } from '@unhead/vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppReviews from '@/components/AppReviews.vue'
import AppHeader from '@/components/AppHeader.vue'

import { computed, ref, onMounted } from 'vue'
import all from '@/store/destinations.json'
import activitiesAll from '@/store/activities.json'

const props = defineProps({ slug: { type: String, required: true } })

function slugify(s) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const country = computed(() => {
  return all.find((d) => (d.slug || slugify(d.country)) === props.slug)
})

onMounted(() => {})

useHead(() => ({
  title: country.value
    ? `${country.value.country} - Twoja podróż czeka na Ciebie`
    : 'Twoja podróż czeka na Ciebie',
}))

const activeTab = ref('overview')
const filteredActivities = computed(() => {
  const c = country.value?.country
  if (!c) return []
  return activitiesAll.filter((a) => Array.isArray(a.countries) && a.countries.includes(c))
})

const currentSlide = ref(0)

const slides = computed(() => {
  return (country.value?.popularLocations || []).filter((loc) => loc.img)
})

function next() {
  if (currentSlide.value < slides.value.length - 1) {
    currentSlide.value++
  }
}

function prev() {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}
</script>

<template>
  <div class="min-h-screen flex">
    <AppSidebar />
    <AppHeader />

    <div class="flex-1 flex flex-col lg:pl-64">
      <main class="flex-grow">
        <!-- Promo section -->
        <div v-if="country">
          <AppPromo
            :imageUrl="country.img || '/images/home-promo.png'"
            :title="country.title || `Odkryj ${country.country}`"
            :subtitle="country.subtitle || country.text"
          />

          <div class="bg-gradient-to-b from-background to-muted/20 py-12">
            <div class="container mx-auto px-4">
              <div class="container">
                <div class="mb-8">
                  <div dir="ltr" data-orientation="horizontal" class="w-full">
                    <div
                      role="tablist"
                      aria-orientation="horizontal"
                      class="h-10 items-center rounded-md text-muted-foreground inline-flex bg-transparent p-1 border-b border-border w-full justify-start gap-1 md:gap-8"
                      tabindex="0"
                      data-orientation="horizontal"
                      style="outline: none"
                    >
                      <button
                        type="button"
                        role="tab"
                        :aria-selected="activeTab === 'overview'"
                        aria-controls="radix-«r5m»-content-overview"
                        :data-state="activeTab === 'overview' ? 'active' : 'inactive'"
                        id="radix-«r5m»-trigger-overview"
                        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background px-1 py-2.5 text-sm md:text-base font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                        tabindex="-1"
                        data-orientation="horizontal"
                        data-radix-collection-item=""
                        @click="activeTab = 'overview'"
                      >
                        Odkrywaj</button
                      ><button
                        type="button"
                        role="tab"
                        :aria-selected="activeTab === 'activities'"
                        aria-controls="radix-«r5m»-content-activities"
                        :data-state="activeTab === 'activities' ? 'active' : 'inactive'"
                        id="radix-«r5m»-trigger-activities"
                        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background px-1 py-2.5 text-sm md:text-base font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                        tabindex="-1"
                        data-orientation="horizontal"
                        data-radix-collection-item=""
                        @click="activeTab = 'activities'"
                      >
                        Aktywności</button
                      ><button
                        type="button"
                        role="tab"
                        :aria-selected="activeTab === 'practical'"
                        aria-controls="radix-«r5m»-content-practical"
                        :data-state="activeTab === 'practical' ? 'active' : 'inactive'"
                        id="radix-«r5m»-trigger-practical"
                        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background px-1 py-2.5 text-sm md:text-base font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                        tabindex="-1"
                        data-orientation="horizontal"
                        data-radix-collection-item=""
                        @click="activeTab = 'practical'"
                      >
                        Informacje Praktyczne
                      </button>
                    </div>
                    <div class="mt-8">
                      <div class="flex flex-col md:flex-row gap-6">
                        <aside
                          class="md:w-1/3 lg:w-1/4 transition-all duration-300 max-h-[2000px] md:max-h-none"
                        >
                          <div class="sticky top-24 space-y-6">
                            <div class="md:hidden w-full">
                              <div data-state="open">
                                <button
                                  class="items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full flex justify-between"
                                  type="button"
                                  aria-controls="radix-«r5q»"
                                  aria-expanded="true"
                                  data-state="open"
                                >
                                  <span>O {{ country.country }}</span
                                  ><span>↑</span>
                                </button>
                                <div
                                  data-state="open"
                                  id="radix-«r5q»"
                                  class="mt-4"
                                  style="transition-duration: 0s; animation-name: none"
                                >
                                  <div class="space-y-6 text-sm">
                                    <div class="mb-6">
                                      <p class="leading-relaxed text-muted-foreground mb-3">
                                        {{ country.description || country.text }}
                                      </p>
                                    </div>
                                    <div
                                      class="bg-card rounded-lg p-4 shadow-sm border border-border"
                                    >
                                      <h3
                                        class="font-semibold mb-3 flex items-center text-card-foreground"
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
                                          class="lucide lucide-globe h-4 w-4 mr-2 text-primary"
                                          aria-hidden="true"
                                        >
                                          <circle cx="12" cy="12" r="10"></circle>
                                          <path
                                            d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
                                          ></path>
                                          <path d="M2 12h20"></path>
                                        </svg>
                                        Kluczowe Informacje
                                      </h3>
                                      <div class="space-y-3">
                                        <div class="flex justify-between items-center text-sm">
                                          <span class="text-muted-foreground">Kontynent</span
                                          ><span class="font-medium text-card-foreground">{{
                                            country.tag
                                          }}</span>
                                        </div>
                                        <div class="flex justify-between items-center text-sm">
                                          <span class="text-muted-foreground">Waluta</span
                                          ><span class="font-medium text-card-foreground">{{
                                            country.currency
                                          }}</span>
                                        </div>
                                        <div class="flex justify-between items-center text-sm">
                                          <span class="text-muted-foreground">Język</span
                                          ><span class="font-medium text-card-foreground">{{
                                            country.language
                                          }}</span>
                                        </div>
                                        <div class="flex justify-between items-center text-sm">
                                          <span class="text-muted-foreground">Wiza Wymagana</span
                                          ><span class="font-medium text-card-foreground"
                                            ><span
                                              class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                                              >{{
                                                country.visaRequired === true
                                                  ? 'Tak'
                                                  : country.visaRequired === false
                                                    ? 'Nie'
                                                    : '—'
                                              }}</span
                                            ></span
                                          >
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="bg-primary/10 dark:bg-primary/20 rounded-lg p-4 shadow-sm border border-primary/20 dark:border-primary/30"
                                    >
                                      <h3
                                        class="font-semibold mb-3 flex items-center text-card-foreground"
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
                                          class="lucide lucide-lightbulb h-4 w-4 mr-2 text-primary"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                                          ></path>
                                          <path d="M9 18h6"></path>
                                          <path d="M10 22h4"></path>
                                        </svg>
                                        Wskazówki Kulturowe
                                      </h3>
                                      <ul class="space-y-2">
                                        <li
                                          class="text-sm flex items-start"
                                          v-for="(tip, i) in country.advices.slice(0, 2)"
                                          :key="i"
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
                                            class="lucide lucide-check h-4 w-4 mr-2 text-primary mt-0.5 flex-shrink-0"
                                            aria-hidden="true"
                                          >
                                            <path d="M20 6 9 17l-5-5"></path>
                                          </svg>
                                          <span class="text-muted-foreground">{{ tip }}</span>
                                        </li>
                                      </ul>
                                      <button
                                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline rounded-md mt-2 p-0 h-auto text-primary"
                                        :aria-selected="activeTab === 'practical'"
                                        aria-controls="radix-«r5m»-content-practical"
                                        :data-state="
                                          activeTab === 'practical' ? 'active' : 'inactive'
                                        "
                                        id="radix-«r5m»-trigger-practical"
                                        @click="activeTab = 'practical'"
                                      >
                                        Zobacz wszystkie wskazówki
                                      </button>
                                    </div>
                                    <div
                                      class="bg-accent/10 dark:bg-accent/20 rounded-lg p-4 shadow-sm border border-accent/20 dark:border-accent/30"
                                    >
                                      <h3
                                        class="font-semibold mb-3 flex items-center text-card-foreground"
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
                                          class="lucide lucide-map-pin h-4 w-4 mr-2 text-accent"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                                          ></path>
                                          <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        Najlepsze Destynacje
                                      </h3>
                                      <ul class="space-y-2">
                                        <li
                                          class="text-sm flex items-start"
                                          v-for="(d, i) in country.destinations || []"
                                          :key="i"
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
                                            class="lucide lucide-map-pin h-4 w-4 mr-2 text-accent mt-0.5 flex-shrink-0"
                                            aria-hidden="true"
                                          >
                                            <path
                                              d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                                            ></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                          </svg>
                                          <span class="text-muted-foreground">{{ d }}</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="hidden md:block">
                              <h3 class="text-lg font-bold mb-4 text-foreground">
                                O {{ country.country }}
                              </h3>
                              <div class="space-y-6 text-sm">
                                <div class="mb-6">
                                  <p class="leading-relaxed text-muted-foreground mb-3">
                                    {{ country.description || country.text }}
                                  </p>
                                </div>
                                <div class="bg-card rounded-lg p-4 shadow-sm border border-border">
                                  <h3
                                    class="font-semibold mb-3 flex items-center text-card-foreground"
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
                                      class="lucide lucide-globe h-4 w-4 mr-2 text-primary"
                                      aria-hidden="true"
                                    >
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path
                                        d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
                                      ></path>
                                      <path d="M2 12h20"></path>
                                    </svg>
                                    Kluczowe Informacje
                                  </h3>
                                  <div class="space-y-3">
                                    <div class="flex justify-between items-center text-sm">
                                      <span class="text-muted-foreground">Kontynent</span
                                      ><span class="font-medium text-card-foreground">{{
                                        country.tag
                                      }}</span>
                                    </div>
                                    <div class="flex justify-between items-center text-sm">
                                      <span class="text-muted-foreground">Waluta</span
                                      ><span class="font-medium text-card-foreground">{{
                                        country.currency
                                      }}</span>
                                    </div>
                                    <div class="flex justify-between items-center text-sm">
                                      <span class="text-muted-foreground">Język</span
                                      ><span class="font-medium text-card-foreground">{{
                                        country.language
                                      }}</span>
                                    </div>
                                    <div class="flex justify-between items-center text-sm">
                                      <span class="text-muted-foreground">Wiza Wymagana</span
                                      ><span class="font-medium text-card-foreground"
                                        ><span
                                          class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                                          >{{
                                            country.visaRequired === true
                                              ? 'Tak'
                                              : country.visaRequired === false
                                                ? 'Nie'
                                                : '—'
                                          }}</span
                                        ></span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="bg-primary/10 dark:bg-primary/20 rounded-lg p-4 shadow-sm border border-primary/20 dark:border-primary/30"
                                >
                                  <h3
                                    class="font-semibold mb-3 flex items-center text-card-foreground"
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
                                      class="lucide lucide-lightbulb h-4 w-4 mr-2 text-primary"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                                      ></path>
                                      <path d="M9 18h6"></path>
                                      <path d="M10 22h4"></path>
                                    </svg>
                                    Wskazówki Kulturowe
                                  </h3>
                                  <ul class="space-y-2">
                                    <li
                                      class="text-sm flex items-start"
                                      v-for="(tip, i) in country.advices.slice(0, 2)"
                                      :key="i"
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
                                        class="lucide lucide-check h-4 w-4 mr-2 text-primary mt-0.5 flex-shrink-0"
                                        aria-hidden="true"
                                      >
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                      <span class="text-muted-foreground">{{ tip }}</span>
                                    </li>
                                  </ul>
                                  <button
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline rounded-md mt-2 p-0 h-auto text-primary"
                                    :aria-selected="activeTab === 'practical'"
                                    aria-controls="radix-«r5m»-content-practical"
                                    :data-state="activeTab === 'practical' ? 'active' : 'inactive'"
                                    id="radix-«r5m»-trigger-practical"
                                    @click="activeTab = 'practical'"
                                  >
                                    Zobacz wszystkie wskazówki
                                  </button>
                                </div>
                                <div
                                  class="bg-accent/10 dark:bg-accent/20 rounded-lg p-4 shadow-sm border border-accent/20 dark:border-accent/30"
                                >
                                  <h3
                                    class="font-semibold mb-3 flex items-center text-card-foreground"
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
                                      class="lucide lucide-map-pin h-4 w-4 mr-2 text-accent"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                                      ></path>
                                      <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    Najlepsze Destynacje
                                  </h3>
                                  <ul class="space-y-2">
                                    <li
                                      class="text-sm flex items-start"
                                      v-for="(d, i) in country.destinations || []"
                                      :key="i"
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
                                        class="lucide lucide-map-pin h-4 w-4 mr-2 text-accent mt-0.5 flex-shrink-0"
                                        aria-hidden="true"
                                      >
                                        <path
                                          d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                                        ></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                      <span class="text-muted-foreground">{{ d }}</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </aside>
                        <div class="md:w-2/3 lg:w-3/4">
                          <div
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-«r5m»-trigger-overview"
                            id="radix-«r5m»-content-overview"
                            tabindex="0"
                            class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-8"
                            style=""
                            :data-state="activeTab === 'overview' ? 'active' : 'inactive'"
                            v-show="activeTab === 'overview'"
                          >
                            <div
                              class="mb-8 bg-card/60 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden border border-border"
                            >
                              <div class="p-4 border-b border-border">
                                <h3 class="text-xl font-bold text-card-foreground">
                                  Odkryj {{ country.country }}
                                </h3>
                              </div>
                              <div
                                class="relative w-full"
                                role="region"
                                aria-roledescription="carousel"
                              >
                                <div class="overflow-hidden">
                                  <div
                                    class="flex -ml-4 transition-transform duration-500"
                                    :style="`transform: translate3d(-${currentSlide * 100}%, 0, 0);`"
                                  >
                                    <div
                                      v-for="(loc, i) in country.popularLocations || []"
                                      :key="`slide-` + i"
                                      role="group"
                                      aria-roledescription="slide"
                                      class="min-w-0 shrink-0 grow-0 basis-full pl-4"
                                    >
                                      <div class="h-64 md:h-80 relative">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          class="w-full h-full object-cover"
                                          :alt="country.country"
                                          :src="country.img"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      role="group"
                                      aria-roledescription="slide"
                                      class="min-w-0 shrink-0 grow-0 basis-full pl-4"
                                    ></div>
                                  </div>
                                </div>

                                <button
                                  @click="prev"
                                  :disabled="true"
                                  class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-2"
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
                                    class="lucide lucide-arrow-left h-4 w-4"
                                    aria-hidden="true"
                                  >
                                    <path d="m12 19-7-7 7-7"></path>
                                    <path d="M19 12H5"></path>
                                  </svg>
                                  <span class="sr-only">Previous slide</span>
                                </button>

                                <button
                                  @click="next"
                                  :disabled="true"
                                  class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-2"
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
                                    class="lucide lucide-arrow-right h-4 w-4"
                                    aria-hidden="true"
                                  >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                  </svg>
                                  <span class="sr-only">Next slide</span>
                                </button>
                              </div>
                            </div>
                            <div class="mt-8">
                              <h3 class="text-xl font-bold mb-4 text-foreground">
                                Popularne Lokalizacje
                              </h3>
                              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div
                                  v-for="(pl, i) in country.popularLocations || []"
                                  :key="`pl-` + i"
                                  class="flex rounded-lg overflow-hidden border border-border bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
                                >
                                  <div class="w-1/3 bg-muted">
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      class="w-full h-full object-cover"
                                      :alt="pl.title"
                                      src="/images/place.png"
                                    />
                                  </div>
                                  <div class="w-2/3 p-4">
                                    <h4 class="font-semibold text-card-foreground">
                                      {{ pl.title }}
                                    </h4>
                                    <p class="text-xs text-muted-foreground mb-2">{{ pl.city }}</p>
                                    <ul class="space-y-1">
                                      <li
                                        v-for="(f, j) in pl.features || []"
                                        :key="`f-` + j"
                                        class="text-xs flex items-center"
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
                                          class="lucide lucide-check h-3 w-3 mr-1 text-green-500 flex-shrink-0"
                                          aria-hidden="true"
                                        >
                                          <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                        <span class="text-muted-foreground truncate">{{ f }}</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-«r81»-trigger-activities"
                            id="radix-«r81»-content-activities"
                            tabindex="0"
                            class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-8"
                            :data-state="activeTab === 'activities' ? 'active' : 'inactive'"
                            v-show="activeTab === 'activities'"
                          >
                            <div>
                              <h3 class="text-2xl font-bold mb-6 text-foreground">
                                Popularne aktywności
                              </h3>
                              <div class="space-y-6">
                                <div
                                  v-for="(a, i) in filteredActivities"
                                  :key="`act-` + i"
                                  class="rounded-lg border text-card-foreground overflow-hidden border-border bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
                                >
                                  <div class="flex flex-col md:flex-row">
                                    <div class="md:w-1/3 h-48 md:h-64">
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        class="w-full h-full object-cover"
                                        :alt="a.activity"
                                        :src="a.img || ''"
                                      />
                                    </div>
                                    <div class="md:w-2/3 p-5 flex flex-col">
                                      <RouterLink
                                        :to="{
                                          name: 'activity',
                                          params: { slug: slugify(a.activity) },
                                        }"
                                      >
                                        <h4 class="font-bold text-xl text-card-foreground mb-2">
                                          {{ a.activity }}
                                        </h4>
                                      </RouterLink>
                                      <p class="text-muted-foreground mb-4 flex-grow">
                                        {{ a.text }}
                                      </p>
                                      <div
                                        class="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 mb-4"
                                      >
                                        <div class="flex items-center">
                                          <span class="mr-2">💰</span>
                                        </div>
                                      </div>
                                      <div class="flex flex-wrap gap-2 mb-4"></div>
                                      <RouterLink
                                        :to="{
                                          name: 'activity',
                                          params: { slug: slugify(a.activity) },
                                        }"
                                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-auto"
                                      >
                                        Doświadczenie z książką
                                      </RouterLink>
                                    </div>
                                  </div>
                                </div>
                                <!-- hide old static list -->
                                <div v-if="false">
                                  <div
                                    class="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-border"
                                  >
                                    <div class="flex flex-col md:flex-row">
                                      <div class="md:w-1/3 h-48 md:h-64">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          class="w-full h-full object-cover"
                                          alt="City Tour"
                                          src="/images/bustour.png"
                                        />
                                      </div>
                                      <div class="md:w-2/3 p-5 flex flex-col">
                                        <h4 class="font-bold text-xl text-card-foreground mb-2">
                                          Wycieczka Po Mieście
                                        </h4>
                                        <p class="text-muted-foreground mb-4 flex-grow">
                                          Rozpocznij fascynującą wycieczkę po mieście, która
                                          zabierze Cię przez tętniące życiem ulice, zabytkowe
                                          miejsca i barwne dzielnice. Odkryj ukryte historie,
                                          lokalne tradycje i ikoniczne atrakcje, zanurzając się w
                                          dynamicznej kulturze miasta.
                                        </p>
                                        <div
                                          class="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 mb-4"
                                        >
                                          <div class="flex items-center">
                                            <span class="mr-2">💰</span>
                                          </div>
                                        </div>
                                        <div class="flex flex-wrap gap-2 mb-4"></div>
                                        <button
                                          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-auto"
                                        >
                                          Doświadczenie z książką
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-xl shadow-sm p-6 overflow-hidden mt-8 border border-orange-100 dark:border-orange-900/30"
                            >
                              <div class="flex items-center mb-6">
                                <div
                                  class="p-3 rounded-full bg-orange-100 dark:bg-orange-900/20 mr-4"
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
                                    class="lucide lucide-utensils h-5 w-5 text-orange-600"
                                    aria-hidden="true"
                                  >
                                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                                    <path d="M7 2v20"></path>
                                    <path
                                      d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
                                    ></path>
                                  </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-foreground">
                                  Żywność &amp; Gastronomia
                                </h3>
                              </div>
                              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div
                                  class="bg-card/90 backdrop-blur-sm rounded-lg border border-orange-100 dark:border-orange-900/30 p-3 hover:shadow-md transition-shadow"
                                  v-for="(f, i) in country.food || []"
                                  :key="`restaurant-` + i"
                                >
                                  <h4 class="font-semibold text-card-foreground">
                                    {{ f.restaurant }}
                                  </h4>
                                  <p class="text-xs text-muted-foreground">{{ f.city }}</p>
                                  <div class="flex items-center mt-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      class="lucide lucide-star w-3 h-3 text-yellow-300"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      class="lucide lucide-star w-3 h-3 text-yellow-300"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      class="lucide lucide-star w-3 h-3 text-yellow-300"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      class="lucide lucide-star w-3 h-3 text-yellow-300"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                      ></path>
                                    </svg>
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
                                      class="lucide lucide-star w-3 h-3 text-gray-300 dark:text-gray-600"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                      ></path>
                                    </svg>
                                    <span class="text-xs font-medium text-muted-foreground ml-1"
                                      >4.4</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-xl shadow-sm p-6 overflow-hidden mt-8 border border-purple-100 dark:border-purple-900/30"
                            >
                              <div class="flex items-center mb-6">
                                <div
                                  class="p-3 rounded-full bg-purple-200 dark:bg-purple-900/20 mr-4"
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
                                    class="lucide lucide-wine h-5 w-5 text-purple-700"
                                    aria-hidden="true"
                                  >
                                    <path d="M8 22h8"></path>
                                    <path d="M7 10h10"></path>
                                    <path d="M12 15v7"></path>
                                    <path
                                      d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"
                                    ></path>
                                  </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-foreground">Życie nocne</h3>
                              </div>
                              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div
                                  v-for="(n, i) in country.nightActivities || []"
                                  :key="`night-` + i"
                                  class="bg-card/80 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3 border border-purple-100 dark:border-purple-900/30 hover:shadow-md transition-shadow"
                                >
                                  <div
                                    class="flex justify-center items-center h-12 w-12 rounded-md overflow-hidden bg-purple-100 dark:bg-purple-900/20 flex-shrink-0"
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
                                      class="lucide lucide-martini"
                                      aria-hidden="true"
                                    >
                                      <path d="M8 22h8"></path>
                                      <path d="M12 11v11"></path>
                                      <path d="m19 3-7 8-7-8Z"></path>
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 class="font-semibold text-card-foreground">{{ n }}</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-«r81»-trigger-practical"
                            id="radix-«r81»-content-practical"
                            tabindex="0"
                            class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-8"
                            :data-state="activeTab === 'practical' ? 'active' : 'inactive'"
                            v-show="activeTab === 'practical'"
                          >
                            <div
                              class="bg-card/80 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden border border-border"
                            >
                              <div class="p-6 border-b border-border">
                                <div class="flex items-center">
                                  <div
                                    class="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20 mr-4"
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
                                      class="lucide lucide-plane h-5 w-5 text-primary"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                                      ></path>
                                    </svg>
                                  </div>
                                  <h3 class="text-2xl font-bold text-card-foreground">
                                    Wymagania Dotyczące Podróży
                                  </h3>
                                </div>
                              </div>
                              <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-muted/50">
                                <div class="p-6 bg-card">
                                  <h4 class="font-medium text-muted-foreground mb-2">
                                    Paszport Wymagany
                                  </h4>
                                  <div class="flex items-center">
                                    <span
                                      class="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent"
                                      >Nie</span
                                    >
                                  </div>
                                </div>
                                <div class="p-6 bg-card">
                                  <h4 class="font-medium text-muted-foreground mb-2">
                                    Wiza Wymagana
                                  </h4>
                                  <div class="flex items-center">
                                    <span
                                      class="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                                      >Nie</span
                                    >
                                  </div>
                                </div>
                                <div class="p-6 bg-card">
                                  <h4 class="font-medium text-muted-foreground mb-2">
                                    Informacje Zdrowotne
                                  </h4>
                                  <p class="text-sm text-muted-foreground">
                                    Nie są wymagane żadne szczególne szczepienia dla większości
                                    podróżnych, ale zaleca się być na bieżąco ze szczepieniami
                                    rutynowymi.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              class="bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-xl p-6 shadow-sm mt-8 border border-primary/20 dark:border-primary/30"
                            >
                              <h3 class="text-2xl font-bold mb-6 flex items-center text-foreground">
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
                                  class="lucide lucide-lightbulb h-6 w-6 mr-3 text-primary"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                                  ></path>
                                  <path d="M9 18h6"></path>
                                  <path d="M10 22h4"></path>
                                </svg>
                                Wskazówki Kulturowe dla Podróżnych – {{ country.country }}
                              </h3>
                              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div
                                  class="bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-sm flex items-start border border-primary/20 dark:border-primary/30 hover:shadow-md transition-shadow"
                                  v-for="(a, i) in country.advices || []"
                                  :key="'advice-' + i"
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
                                    class="lucide lucide-lightbulb h-5 w-5 mr-3 text-primary mt-0.5"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                                    ></path>
                                    <path d="M9 18h6"></path>
                                    <path d="M10 22h4"></path>
                                  </svg>
                                  <p class="text-muted-foreground">
                                    {{ a }}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                              <div
                                class="bg-card/80 backdrop-blur-sm rounded-xl shadow-sm p-6 border border-border"
                              >
                                <h3 class="text-xl font-bold mb-4 text-card-foreground">
                                  Informacje Walutowe
                                </h3>
                                <ul class="space-y-4">
                                  <li
                                    class="flex justify-between items-center p-3 bg-muted/50 rounded-lg"
                                  >
                                    <span class="font-medium text-card-foreground">Waluta</span
                                    ><span
                                      class="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                                      >{{ country.currency }}</span
                                    >
                                  </li>
                                  <li
                                    class="flex justify-between items-center p-3 bg-muted/50 rounded-lg"
                                  >
                                    <span class="font-medium text-card-foreground"
                                      >Karty Kredytowe</span
                                    ><span class="text-primary">{{ country.creditCard }}</span>
                                  </li>
                                  <li
                                    class="flex justify-between items-center p-3 bg-muted/50 rounded-lg"
                                  >
                                    <span class="font-medium text-card-foreground text-capitalize"
                                      >bankomaty</span
                                    ><span class="text-primary">{{ country.atm }}</span>
                                  </li>
                                </ul>
                              </div>
                              <div
                                class="bg-card/80 backdrop-blur-sm rounded-xl shadow-sm p-6 border border-border"
                              >
                                <h3 class="text-xl font-bold mb-4 text-card-foreground">
                                  Informacje o języku
                                </h3>
                                <ul class="space-y-4">
                                  <li
                                    class="flex justify-between items-center p-3 bg-muted/50 rounded-lg"
                                  >
                                    <span class="font-medium text-card-foreground"
                                      >Język Urzędowy</span
                                    ><span
                                      class="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                                      >{{ country.language }}</span
                                    >
                                  </li>
                                  <li
                                    class="flex justify-between items-center p-3 bg-muted/50 rounded-lg"
                                  >
                                    <span class="font-medium text-card-foreground"
                                      >Angielski Mówiony</span
                                    ><span class="text-primary">{{ country.english }}</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="container py-12">
          <p>Nie znaleziono destynacji.</p>
        </div>
        <AppReviews :reviews="country.reviews" :country="country.country" />
      </main>

      <AppFooter />
    </div>
  </div>
</template>
