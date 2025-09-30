<script setup>
import { ref, computed } from 'vue'
import rawDestinations from '@/store/destinations.json'


const props = defineProps({
  isBtnShow: {
    type: Boolean,
    required: true
  },
  countOfCountries: {
    type: Number,
    required: true
  }
});


function slugify(input) {
  return input
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const destinations = (rawDestinations).map(d => ({
  ...d,
  slug: d.slug ?? slugify(d.country)
}))

const ALL = 'Wszystko'
const tags = computed(() => {
  const set = new Set(destinations.map(d => d.tag))
  return [ALL, ...Array.from(set)]
})

const activeTag = ref(ALL)

const filtered = computed(() => {
  if (activeTag.value === ALL) return destinations
  return destinations.filter(d => d.tag === activeTag.value)
})

function tagBtnClass(tag) {
  const base = 'text-xs lg:text-sm px-3 lg:px-4 py-2 whitespace-nowrap flex-shrink-0 rounded-md transition-colors'
  return tag === activeTag.value
    ? `${base} bg-background text-foreground shadow-sm`
    : `${base} text-muted-foreground hover:text-foreground`
}
</script>


<template>
  <div class="bg-gray-50 dark:bg-gray-950">
    <section class="section">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Poznaj Popularne Destynacje
          </h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Odkryj niesamowite miejsca na całym świecie, od dziewiczych wybrzeży po starożytne cuda miejskie,
            i zaplanuj swoją kolejną niezapomnianą podróż.
          </p>
        </div>

        <!-- Фильтры -->
        <div class="w-full">
          <div class="flex justify-center mb-8">
            <div class="bg-muted rounded-lg p-1 max-w-4xl">
              <div class="flex flex-wrap justify-center gap-1">
                <button
                  v-for="tag in tags"
                  :key="tag"
                  type="button"
                  :class="tagBtnClass(tag)"
                  @click="activeTag = tag"
                >
                  {{ tag }}
                </button>
              </div>
            </div>
          </div>

          <!-- Сетка карточек -->
          <div class="mt-0">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              <a
                v-for="d in filtered.slice(0, props?.countOfCountries)"
                :key="d.slug"
                class="card-hover h-full flex"
                :href="`/pl-PL/destinations/${d.slug}`"
                data-discover="true"
              >
                <div class="rounded-lg border bg-card text-card-foreground overflow-hidden border-none shadow-md flex flex-col w-full">
                  <div class="aspect-[16/9] overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      :alt="d.country"
                      :src="d.img"
                    >
                  </div>
                  <div class="p-6 flex flex-col flex-1">
                    <div class="flex justify-between items-center mb-3">
                      <h4 class="text-xl font-bold text-gray-900 dark:text-white">{{ d.country }}</h4>
                      <div class="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {{ d.tag }}
                      </div>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                      {{ d.text }}
                    </p>
                    <div class="mt-auto flex justify-end">
                      <span class="text-primary font-medium flex items-center">
                        Odkryj cel podróży
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5 ml-1" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <!-- Если ничего не найдено -->
            <div v-if="filtered.length === 0" class="text-center text-muted-foreground mt-8">
              Brak destynacji dla wybranego filtra.
            </div>
          </div>
        </div>

        <div v-if="props?.isBtnShow" class="text-center mt-12">
          <a class="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200" href="/pl-PL/destinations" data-discover="true">
            Zobacz wszystkie destynacje
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5 ml-2" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
