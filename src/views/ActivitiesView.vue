<script setup>
import { ref, computed } from 'vue'
import activitiesData from '@/store/activities.json'

import AppSidebar from '@/components/AppSidebar.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppPromo from '@/components/AppPromo.vue'
import AppFooter from '@/components/AppFooter.vue'
import ActivitiesCard from '@/components/activities/ActivitiesCard.vue'
import ActivitiesFilter from '@/components/activities/ActivitiesFilter.vue'

const categories = ['Popularne', 'Nowości', 'Outdoor', 'Kulinaria', 'Relaks']

const activities = ref(
  activitiesData.map((item, index) => ({
    id: index + 1,
    title: item.activity,
    countries: item.countries,
    text: item.text,
    image: item.img,
    category: categories[Math.floor(Math.random() * categories.length)],
  })),
)

const selectedTags = ref([])

const filteredActivities = computed(() => {
  if (!selectedTags.value.length) return activities.value
  return activities.value.filter((activity) =>
    selectedTags.value.every((tag) => activity.countries.includes(tag)),
  )
})

// const handleFilterChange = (tags) => {
//   selectedTags.value = tags
// }
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
          title="Odkryj Ekscytujące Doświadczenia Na Całym Świecie"
          subtitle="Odkryj niezapomniane chwile, od kulinarnych przygód po ekscytujące aktywności na świeżym powietrzu. Znajdź idealne aktywności na swoją następną podróż."
        />

        <!-- activities -->

        <section class="py-16 bg-background">
          <div class="container mx-auto px-4">
            <div class="mb-8">
              <h2 class="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Odkryj Spektakularne Doświadczenia
              </h2>
              <p class="text-muted-foreground max-w-4xl">
                Odkryj niezapomniane przygody na całym świecie. Dostosuj filtry, aby znaleźć
                aktywności odpowiadające Twoim zainteresowaniom.
              </p>
            </div>
            <div class="md:hidden mb-6">
              <button
                class="w-full flex items-center justify-between bg-card p-4 rounded-lg shadow border border-border"
              >
                <span class="font-medium text-card-foreground">Filtry</span>
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
                  class="lucide lucide-chevron-down h-5 w-5 transition-transform text-card-foreground rotate-180"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
            <div class="flex flex-col md:flex-row gap-8">
              <ActivitiesFilter />
              <div class="flex-1">
                <div class="grid grid-cols-1 3xl:grid-cols-2 2xl:grid-cols-3 gap-6">
                  <ActivitiesCard
                    v-for="activity in filteredActivities"
                    :key="activity.id"
                    :title="activity.title"
                    :image="activity.image"
                    :text="activity.text"
                    :countries="activity.countries"
                    :category="activity.category"
                  />
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
