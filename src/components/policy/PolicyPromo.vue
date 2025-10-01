<script setup>
const props = defineProps({
  budg: String,
  title: String,
  subtitle: String,
});

const lastUpdate = new Date().toDateString();
</script>

<template>
  <section
    class="relative w-full bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden"
  >
    <div class="absolute inset-0 bg-grid-white/10"></div>
    <div class="container mx-auto px-4 py-20 md:py-24 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <div v-if="props?.budg" class="inline-flex items-center px-4 py-2 bg-card/20 rounded-full mb-6">
          <span class="text-white/90 text-sm font-medium">{{ props.budg }}</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">{{ props.title }}</h1>
        <p class="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {{ props.subtitle }}
        </p>
        <div class="flex items-center justify-center gap-4 text-white/80">
          <div class="w-1 h-1 bg-card/60 rounded-full"></div>
          <span class="text-sm">Ostatnia aktualizacja: {{ lastUpdate }}</span>
          <div class="w-1 h-1 bg-card/60 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>
