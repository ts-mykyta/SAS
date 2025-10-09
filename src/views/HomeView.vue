<script setup>
import { useHead } from '@unhead/vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

import AppPromo from '@/components/AppPromo.vue'
import AppDestinations from '@/components/AppDestinations.vue'
import AppActivities from '@/components/AppActivities.vue'
import AppPriceCalendar from '@/components/AppPriceCalendar.vue'

useHead({ title: 'Twoja podróż czeka na Ciebie' })
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
          title="Otwórz Nową Podróż"
          subtitle="Porównuj i wybieraj najlepsze oferty lotów oraz podróży dzięki naszej intuicyjnej platformie."
        />

        <!-- Country section -->
        <AppDestinations :isBtnShow="true" :countOfCountries="3" />

        <!-- Price Calendar -->
        <AppPriceCalendar />

        <!-- Services -->
        <AppActivities
          title="Najczęściej wybierane atrakcje"
          subtitle="Poznaj fascynujące przeżycia i pełne emocji aktywności, które sprawią, że każda podróż stanie się wyjątkowa."
        />
      </main>

      <AppFooter />
    </div>
  </div>
</template>
