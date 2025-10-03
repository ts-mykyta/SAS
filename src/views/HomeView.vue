<script setup>
import AppSidebar from '@/components/AppSidebar.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppPriceClaendar from '@/components/AppPriceClaendar.vue'

import AppPromo from '@/components/AppPromo.vue'
import AppDestinations from '@/components/AppDestinations.vue'
import AppActivities from '@/components/AppActivities.vue'
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
        <AppPriceClaendar />

        <!-- Services -->
        <AppActivities
          title="Popularne aktywności"
          subtitle="Odkryj ekscytujące przygody i wciągające doświadczenia, które zamienią twoje podróże w niezapomniane wspomnienia."
        />
      </main>

      <AppFooter />
    </div>
  </div>
</template>
