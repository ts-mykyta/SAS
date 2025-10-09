<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'
import activitiesData from '@/store/activities.json'

import AppSidebar from '@/components/AppSidebar.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppPromo from '@/components/AppPromo.vue'
import AppFooter from '@/components/AppFooter.vue'
import ActivitiesCard from '@/components/activities/ActivitiesCard.vue'
import ActivitiesFilter from '@/components/activities/ActivitiesFilter.vue'

const categories = ['Popularne', 'Nowości', 'Outdoor', 'Kulinaria', 'Relaks']

function slugify(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const activities = ref(
  activitiesData.map((item, index) => ({
    id: index + 1,
    title: item.activity,
    countries: item.countries,
    text: item.text,
    image: item.img,
    category: categories[Math.floor(Math.random() * categories.length)],
    slug: item.slug || slugify(item.activity),
  })),
)

const selectedTags = ref([])

const allCountries = computed(() => {
  const set = new Set()
  for (const a of activities.value) {
    for (const c of a.countries || []) set.add(c)
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b))
})

const filteredActivities = computed(() => {
  if (!selectedTags.value.length) return activities.value
  return activities.value.filter((activity) =>
    selectedTags.value.every((tag) => activity.countries.includes(tag)),
  )
})

useHead({ title: 'Aktywności – Spektakularne Doświadczenia' })
</script>

<template>
  <div class="min-h-screen flex">
    <AppSidebar />
    <AppHeader />

    <div class="flex-1 flex flex-col lg:pl-64">
      <main class="flex-grow">
        <!-- Promo section -->
        <AppPromo
          imageUrl="/images/home-promo.png"
          title="Odkryj Niezapomniane Przygody na Całym Świecie"
          subtitle="Odkryj wyjątkowe chwile – od smaków lokalnej kuchni po emocjonujące przygody na łonie natury. Wybierz aktywności, które sprawią, że Twoja podróż będzie naprawdę niezapomniana."
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

            <div class="flex flex-col md:flex-row gap-8">
              <ActivitiesFilter v-model="selectedTags" :options="allCountries" />

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
