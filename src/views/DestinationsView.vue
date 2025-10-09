<script setup>
import { useHead } from '@unhead/vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppPromo from '@/components/AppPromo.vue'
import AppDestinations from '@/components/AppDestinations.vue'
import AppFooter from '@/components/AppFooter.vue'

useHead({ title: 'Podróżuj Tam, Gdzie Zaczyna Się Przygoda' });

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
          title="Podróż Bez Granic Poznaj Miejsca, Których Nie Zapomnisz"
          subtitle="Wybierz się w podróż po niezwykłych zakątkach świata. Od złocistych plaż po historyczne metropolie – znajdź miejsce, które stanie się Twoją idealną ucieczką."
        />

        <!-- Country section -->
        <AppDestinations :isBtnShow="false" :countOfCountries="20" />
      </main>

      <AppFooter />
    </div>
  </div>
</template>
