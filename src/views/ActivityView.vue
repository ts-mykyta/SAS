<script setup>
import AppPromo from '@/components/AppPromo.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppReviews from '@/components/AppReviews.vue'

import { computed, ref, onMounted } from 'vue'
import activitiesAll from '@/store/activities.json'
import destinationsAll from '@/store/destinations.json'

const props = defineProps({ slug: { type: String, required: true } })

function slugify(s) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const activity = computed(() => {
  return activitiesAll.find((a) => (a.slug || slugify(a.activity)) === props.slug)
})

onMounted(() => {
  document.title = activity.value
    ? `${activity.value.activity} - Twoja podróż czeka na Ciebie`
    : 'Twoja podróż czeka na Ciebie'
})

const activeTab = ref('overview')

const relatedDestinations = computed(() => {
  const countries = activity.value?.countries || []
  if (!countries.length) return []
  return destinationsAll
    .filter((d) => countries.includes(d.country))
    .map((d) => ({
      country: d.country,
      slug: d.slug || slugify(d.country),
      img: d.img,
      title: d.title || d.country,
      text: d.text || d.description,
    }))
})
</script>

<template>
  <div class="min-h-screen flex">
    <AppSidebar />
    <AppHeader />

    <div class="flex-1 flex flex-col lg:pl-64">
      <main class="flex-grow">
        <!-- Promo section -->
        <div v-if="activity">
          <AppPromo
            :imageUrl="activity.img || '/images/home-promo.png'"
            :title="activity.title || `Odkryj ${activity.activity}`"
            :subtitle="activity.subtitle || activity.text"
          />
        </div>
        <div v-else class="container mx-auto px-4 py-12">
          <p>Nie znaleziono aktywności.</p>
        </div>

        <!-- next section -->

        <div
          v-if="activity"
          class="bg-gradient-to-b from-background to-muted/20 py-12 relative z-10"
        >
          <div class="container mx-auto">
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
                      aria-controls="radix-«rhu»-content-overview"
                      :data-state="activeTab === 'overview' ? 'active' : 'inactive'"
                      id="radix-«rhu»-trigger-overview"
                      class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background px-1 py-2.5 text-sm md:text-base font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                      tabindex="-1"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                      @click="activeTab = 'overview'"
                    >
                      Overview</button
                    ><button
                      type="button"
                      role="tab"
                      :aria-selected="activeTab === 'details'"
                      aria-controls="radix-«rhu»-content-details"
                      :data-state="activeTab === 'details' ? 'active' : 'inactive'"
                      id="radix-«rhu»-trigger-details"
                      class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background px-1 py-2.5 text-sm md:text-base font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                      tabindex="-1"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                      @click="activeTab = 'details'"
                    >
                      Details</button
                    ><button
                      type="button"
                      role="tab"
                      :aria-selected="activeTab === 'practical'"
                      aria-controls="radix-«rhu»-content-practical"
                      :data-state="activeTab === 'practical' ? 'active' : 'inactive'"
                      id="radix-«rhu»-trigger-practical"
                      class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background px-1 py-2.5 text-sm md:text-base font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                      tabindex="-1"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                      @click="activeTab = 'practical'"
                    >
                      What's Included
                    </button>
                  </div>
                  <div class="mt-8">
                    <div class="flex flex-col md:flex-row gap-6">
                      <aside
                        class="md:w-1/3 lg:w-1/4 transition-all duration-300 max-h-[2000px] md:max-h-none"
                      >
                        <div class="sticky top-24 space-y-6 relative z-20">
                          <div class="md:hidden w-full">
                            <div data-state="open">
                              <button
                                class="items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full flex justify-between"
                                type="button"
                                aria-controls="radix-«ri2»"
                                aria-expanded="true"
                                data-state="open"
                              >
                                <span>About {{ activity.activity }}</span
                                ><span>↑</span>
                              </button>
                              <div
                                data-state="open"
                                id="radix-«ri2»"
                                class="mt-4"
                                style="transition-duration: 0s; animation-name: none"
                              >
                                <div class="space-y-6 text-sm">
                                  <div class="mb-6">
                                    <p class="leading-relaxed text-muted-foreground mb-3">
                                      {{ activity.description || activity.text }}
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
                                      Key Information
                                    </h3>
                                    <div class="space-y-3">
                                      <div class="flex justify-between items-center text-sm">
                                        <span class="text-muted-foreground">Duration</span
                                        ><span class="font-medium text-card-foreground">{{
                                          activity.duration || '—'
                                        }}</span>
                                      </div>
                                      <div class="flex justify-between items-center text-sm">
                                        <span class="text-muted-foreground">Group Size</span
                                        ><span class="font-medium text-card-foreground">{{
                                          activity.groupSize || '—'
                                        }}</span>
                                      </div>
                                      <div class="flex justify-between items-center text-sm">
                                        <span class="text-muted-foreground">Min Age</span
                                        ><span class="font-medium text-card-foreground"
                                          >{{ activity.minAge || '—' }}+</span
                                        >
                                      </div>
                                      <div class="flex justify-between items-center text-sm">
                                        <span class="text-muted-foreground">Rating</span>
                                        <div class="flex items-center">
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
                                            class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
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
                                            class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
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
                                            class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
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
                                            class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
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
                                            class="lucide lucide-star-half h-4 w-4 fill-yellow-400 text-yellow-400"
                                            aria-hidden="true"
                                          >
                                            <path
                                              d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"
                                            ></path>
                                          </svg>
                                        </div>
                                        <span class="ml-1 font-medium text-card-foreground"
                                          >4.6</span
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
                                      Activity Highlights
                                    </h3>
                                    <ul class="space-y-2">
                                      <li
                                        class="text-sm flex items-start"
                                        v-for="(h, i) in (activity.highlights || []).slice(0, 3)"
                                        :key="'h-sm-' + i"
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
                                        <span class="text-muted-foreground">{{ h }}</span>
                                      </li>
                                    </ul>
                                    <button
                                      class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline rounded-md mt-2 p-0 h-auto text-primary"
                                      :aria-selected="activeTab === 'details'"
                                      aria-controls="radix-«rhu»-content-details"
                                      :data-state="activeTab === 'details' ? 'active' : 'inactive'"
                                      id="radix-«rhu»-trigger-details"
                                      @click="activeTab = 'details'"
                                    >
                                      See all details
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
                                      Top Destinations
                                    </h3>
                                    <ul class="space-y-2">
                                      <li
                                        class="text-sm flex items-start"
                                        v-for="(c, i) in activity.countries || []"
                                        :key="'c-sm-' + i"
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
                                        <span class="text-muted-foreground">{{ c }}</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="hidden md:block">
                            <h3 class="text-lg font-bold mb-4 text-foreground">
                              About {{ activity.activity }}
                            </h3>
                            <div class="space-y-6 text-sm">
                              <div class="mb-6">
                                <p class="leading-relaxed text-muted-foreground mb-3">
                                  {{ activity.description || activity.text }}
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
                                  Key Information
                                </h3>
                                <div class="space-y-3">
                                  <div class="flex justify-between items-center text-sm">
                                    <span class="text-muted-foreground">Duration</span
                                    ><span class="font-medium text-card-foreground">{{
                                      activity.duration || '—'
                                    }}</span>
                                  </div>
                                  <div class="flex justify-between items-center text-sm">
                                    <span class="text-muted-foreground">Group Size</span
                                    ><span class="font-medium text-card-foreground">{{
                                      activity.groupSize || '—'
                                    }}</span>
                                  </div>
                                  <div class="flex justify-between items-center text-sm">
                                    <span class="text-muted-foreground">Min Age</span
                                    ><span class="font-medium text-card-foreground"
                                      >{{ activity.minAge || '—' }}+</span
                                    >
                                  </div>
                                  <div class="flex justify-between items-center text-sm">
                                    <span class="text-muted-foreground">Rating</span>
                                    <div class="flex items-center">
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
                                        class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
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
                                        class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
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
                                        class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
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
                                        class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
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
                                        class="lucide lucide-star-half h-4 w-4 fill-yellow-400 text-yellow-400"
                                        aria-hidden="true"
                                      >
                                        <path
                                          d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"
                                        ></path>
                                      </svg>
                                    </div>
                                    <span class="ml-1 font-medium text-card-foreground">4.6</span>
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
                                  Activity Highlights
                                </h3>
                                <ul class="space-y-2">
                                  <li
                                    class="text-sm flex items-start"
                                    v-for="(h, i) in (activity.highlights || []).slice(0, 3)"
                                    :key="'h-lg-' + i"
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
                                    <span class="text-muted-foreground">{{ h }}</span>
                                  </li>
                                </ul>
                                <button
                                  class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline rounded-md mt-2 p-0 h-auto text-primary"
                                  :aria-selected="activeTab === 'details'"
                                  aria-controls="radix-«rhu»-content-details"
                                  :data-state="activeTab === 'details' ? 'active' : 'inactive'"
                                  id="radix-«rhu»-trigger-details"
                                  @click="activeTab = 'details'"
                                >
                                  See all details
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
                                  Top Destinations
                                </h3>
                                <ul class="space-y-2">
                                  <li
                                    class="text-sm flex items-start"
                                    v-for="(c, i) in activity.countries || []"
                                    :key="'c-lg-' + i"
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
                                    <span class="text-muted-foreground">{{ c }}</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </aside>
                      <div class="md:w-2/3 lg:w-3/4 relative z-10">
                        <div
                          data-orientation="horizontal"
                          role="tabpanel"
                          aria-labelledby="radix-«rhu»-trigger-overview"
                          id="radix-«rhu»-content-overview"
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
                                Experience {{ activity.activity }}
                              </h3>
                            </div>
                            <div class="h-64 md:h-80 relative">
                              <img
                                loading="lazy"
                                decoding="async"
                                class="w-full h-full object-cover"
                                :alt="activity.activity"
                                :src="activity.img || '#'"
                              />
                            </div>
                          </div>
                          <div class="mb-8">
                            <h3 class="text-2xl font-bold mb-4 text-foreground">
                              About This Activity
                            </h3>
                            <p class="text-lg text-muted-foreground leading-relaxed">
                              {{ activity.aboutActivity || activity.text }}
                            </p>
                          </div>
                          <!-- <div class="mb-8">
                            <h3 class="text-xl font-bold mb-4 text-foreground">
                              Activity Categories
                            </h3>
                            <div class="flex flex-wrap gap-3">
                              <span
                                class="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                                >Culture</span
                              ><span
                                class="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                                >Culture</span
                              ><span
                                class="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                                >Art</span
                              ><span
                                class="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                                >History</span
                              >
                            </div>
                          </div> -->
                        </div>
                        <div
                          data-orientation="horizontal"
                          role="tabpanel"
                          aria-labelledby="radix-«rhu»-trigger-details"
                          id="radix-«rhu»-content-details"
                          tabindex="0"
                          class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-8"
                          :data-state="activeTab === 'details' ? 'active' : 'inactive'"
                          v-show="activeTab === 'details'"
                        >
                          <div class="mb-8">
                            <h3 class="text-2xl font-bold mb-6 text-foreground">
                              Activity Highlights
                            </h3>
                            <div class="grid-cols-1 md:grid-cols-2 gap-4">
                              <div
                                v-for="(h, i) in activity.highlights || []"
                                :key="'hi-' + i"
                                class="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-sm flex items-start border border-border"
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
                                  class="lucide lucide-check h-5 w-5 mr-3 text-primary mt-0.5"
                                  aria-hidden="true"
                                >
                                  <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                <p class="text-muted-foreground">{{ h }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="mb-8">
                            <h3 class="text-xl font-bold mb-4 text-foreground">
                              Best Time to Visit
                            </h3>
                            <div class="flex flex-wrap gap-3">
                              <span
                                class="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                                >{{ activity.bestTime || '—' }}</span
                              >
                            </div>
                          </div>
                          <div class="mb-8">
                            <h3 class="text-xl font-bold mb-4 text-foreground">
                              Available Destinations
                            </h3>
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                              <div
                                v-for="(c, i) in activity.countries || []"
                                :key="'dest-' + i"
                                class="bg-card/80 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-border"
                              >
                                <div class="flex items-center">
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
                                    class="lucide lucide-map-pin h-4 w-4 mr-2 text-travel-blue"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                                    ></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  <span class="text-card-foreground font-medium">{{ c }}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-orientation="horizontal"
                          role="tabpanel"
                          aria-labelledby="radix-«rhu»-trigger-practical"
                          id="radix-«rhu»-content-practical"
                          tabindex="0"
                          class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-8"
                          :data-state="activeTab === 'practical' ? 'active' : 'inactive'"
                          v-show="activeTab === 'practical'"
                        >
                          <div class="mb-8">
                            <h3 class="text-2xl font-bold mb-6 text-foreground">What's Included</h3>
                            <div class="grid-cols-1 md:grid-cols-2 gap-4">
                              <div
                                v-for="(inc, i) in activity.includes || []"
                                :key="'inc-' + i"
                                class="bg-primary/10 dark:bg-primary/20 rounded-lg p-4 shadow-sm flex items-start border border-primary/20 dark:border-primary/30"
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
                                  class="lucide lucide-check h-5 w-5 mr-3 text-primary mt-0.5"
                                  aria-hidden="true"
                                >
                                  <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                <p class="text-muted-foreground">{{ inc }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="mb-8">
                            <h3 class="text-2xl font-bold mb-6 text-foreground">
                              What's Not Included
                            </h3>
                            <div class="grid-cols-1 md:grid-cols-2 gap-4">
                              <div
                                v-for="(ninc, i) in activity.notIncludes || []"
                                :key="'ninc-' + i"
                                class="bg-accent/10 dark:bg-accent/20 rounded-lg p-4 shadow-sm flex items-start border border-accent/20 dark:border-accent/30"
                              >
                                <div class="w-5 h-5 mr-3 mt-0.5 flex items-center justify-center">
                                  <div class="w-3 h-3 rounded-full bg-accent"></div>
                                </div>
                                <p class="text-muted-foreground">{{ ninc }}</p>
                              </div>
                            </div>
                          </div>
                          <div
                            class="bg-card/80 backdrop-blur-sm rounded-xl shadow-sm p-6 border border-border"
                          >
                            <h3 class="text-xl font-bold mb-4 text-card-foreground">
                              Requirements &amp; Information
                            </h3>
                            <div class="space-y-4">
                              <div
                                class="flex justify-between items-center p-3 bg-muted/50 rounded-lg"
                              >
                                <span class="font-medium text-card-foreground">Minimum Age</span
                                ><span class="text-muted-foreground"
                                  >{{ activity.minAge || '—' }} years</span
                                >
                              </div>
                              <div
                                class="flex justify-between items-center p-3 bg-muted/50 rounded-lg"
                              >
                                <span class="font-medium text-card-foreground">Difficulty</span
                                ><span class="text-muted-foreground">{{
                                  activity.difficulty || '—'
                                }}</span>
                              </div>
                              <div
                                class="flex justify-between items-center p-3 bg-muted/50 rounded-lg"
                              >
                                <span class="font-medium text-card-foreground">Price Range</span
                                ><span class="text-muted-foreground">{{
                                  activity.price || '—'
                                }}</span>
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

        <section v-if="activity" class="py-16 bg-background relative z-10">
          <div class="container mx-auto">
            <div class="container">
              <div class="flex flex-col items-center text-center mb-12">
                <div class="p-3 rounded-full bg-travel-blue/10 mb-4">
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
                    class="lucide lucide-map-pin h-6 w-6 text-travel-blue"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Top Destinations for {{ activity.activity }}
                </h2>
                <p class="text-xl text-muted-foreground max-w-2xl">
                  Discover the world's best locations for {{ activity.activity }} adventures
                </p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <RouterLink
                  v-for="(d, i) in relatedDestinations"
                  :key="'rel-d-' + i"
                  class="group relative z-10 block"
                  :to="{ name: 'destination', params: { slug: d.slug } }"
                  data-discover="true"
                >
                  <div
                    class="rounded-lg border text-card-foreground shadow-sm h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border bg-card flex flex-col"
                  >
                    <div class="h-48 overflow-hidden relative">
                      <img
                        loading="lazy"
                        decoding="async"
                        class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        :alt="d.country"
                        :src="d.img || '#'"
                      />
                      <div
                        class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      ></div>
                      <div class="absolute bottom-4 left-4 text-white z-20">
                        <div class="flex items-center mb-2">
                          <div class="flex items-center">
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
                              class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
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
                              class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
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
                              class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
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
                              class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
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
                              class="lucide lucide-star-half h-4 w-4 fill-yellow-400 text-yellow-400"
                              aria-hidden="true"
                            >
                              <path
                                d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"
                              ></path>
                            </svg>
                          </div>
                          <span class="ml-1 text-sm font-medium">4.5</span>
                        </div>
                        <h3 class="font-bold text-xl">{{ d.country }}</h3>
                      </div>
                    </div>
                    <div class="p-6 flex flex-col flex-1">
                      <div class="flex-1">
                        <p class="text-muted-foreground mb-4">
                          {{ d.text }}
                        </p>
                        <ul class="space-y-2 mb-6"></ul>
                      </div>
                      <div class="mt-auto pt-4">
                        <div
                          class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <span>Explore {{ d.country }}</span>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </section>
        <AppReviews
          reviewsType="activity"
          :reviewsActivity="activity.reviewsActivity"
          :countryActivity="activity.countries"
        />
      </main>

      <AppFooter />
    </div>
  </div>
</template>
