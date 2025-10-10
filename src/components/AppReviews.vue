<script setup>
const props = defineProps({
  reviewsType: String,
  country: String,
  countryActivity: Array,
  reviews: Array,
  reviewsActivity: Array,
})

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function getRandomDate() {
  const year = new Date().getFullYear()
  let month = getRandomNumber(1, 13)
  let day = getRandomNumber(1, 29)

  return `${year}-${month}-${day}`
}
</script>

<template>
  <section class="py-16 bg-gradient-to-b from-background to-muted/30">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col items-center text-center mb-12">
          <div class="p-3 rounded-full bg-primary/10 mb-4">
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
              class="lucide lucide-message-square-quote h-6 w-6 text-primary"
              aria-hidden="true"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M8 12a2 2 0 0 0 2-2V8H8"></path>
              <path d="M14 12a2 2 0 0 0 2-2V8h-2"></path>
            </svg>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">Opinie klientów</h2>
          <p class="text-xl text-muted-foreground max-w-2xl">
            Posłuchaj, co nasi klienci mają do powiedzenia o swoich doświadczeniach
          </p>
        </div>
        <div
          v-if="props.reviewsType == 'activity'"
          data-reviews="activity"
          class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
        >
          <div
            class="rounded-lg text-card-foreground bg-card/90 backdrop-blur-sm border border-border shadow-sm hover:shadow-md transition-all overflow-visible relative"
            v-for="(a, i) in props.reviewsActivity"
            :key="i"
          >
            <div class="p-6 pt-8 pb-6 px-6">
              <div class="absolute -top-6 left-6">
                <span
                  class="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 border-4 border-background shadow-sm"
                  ><img class="aspect-square h-full w-full" alt="person" :src="a.img"
                /></span>
              </div>
              <div class="mb-4 mt-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-semibold text-foreground">{{ a.name }}</h4>
                    <p class="text-sm text-muted-foreground">
                      {{ props.countryActivity.slice(0, 1).toString() }}
                    </p>
                  </div>
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
                      class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
                      aria-hidden="true"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      ></path>
                    </svg>
                    <span class="ml-1 text-sm font-medium text-muted-foreground">5.0</span>
                  </div>
                </div>
              </div>
              <div class="text-muted-foreground mb-4 italic">
                {{ a.text }}
              </div>
              <div class="text-xs text-muted-foreground mt-4">{{ getRandomDate() }}</div>
            </div>
          </div>
        </div>
        <div v-else data-reviews="country" class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div
            class="rounded-lg text-card-foreground bg-card/90 backdrop-blur-sm border border-border shadow-sm hover:shadow-md transition-all overflow-visible relative"
            v-for="(c, i) in props.reviews"
            :key="i"
          >
            <div class="p-6 pt-8 pb-6 px-6">
              <div class="absolute -top-6 left-6">
                <span
                  class="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 border-4 border-background shadow-sm"
                  ><img class="aspect-square h-full w-full" alt="person" :src="c.img"
                /></span>
              </div>
              <div class="mb-4 mt-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-semibold text-foreground">{{ c.name }}</h4>
                    <p class="text-sm text-muted-foreground">{{ props.country }}</p>
                  </div>
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
                      class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
                      aria-hidden="true"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      ></path>
                    </svg>
                    <span class="ml-1 text-sm font-medium text-muted-foreground">5.0</span>
                  </div>
                </div>
              </div>
              <div class="text-muted-foreground mb-4 italic">
                {{ c.text }}
              </div>
              <div class="text-xs text-muted-foreground mt-4">{{ getRandomDate() }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
