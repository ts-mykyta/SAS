<script setup>
import AppSidebar from '@/components/AppSidebar.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppPromo from '@/components/AppPromo.vue'
import AppDestinations from '@/components/AppDestinations.vue'
import AppFooter from '@/components/AppFooter.vue'
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
          title="Odkryj Zapierające Dech w Piersiach Miejsca"
          subtitle="Wyrusz na przygodę do zapierających dech w piersiach miejsc na całym świecie. Od rozgrzanych słońcem piasków po wielowiekowe panoramy miejskie, odkryj idealne schronienie na swoją następną ucieczkę."
        />

        <!-- Country section -->
        <AppDestinations :isBtnShow="false" :countOfCountries="20" />
      </main>

      <AppFooter />
    </div>
  </div>
</template>
