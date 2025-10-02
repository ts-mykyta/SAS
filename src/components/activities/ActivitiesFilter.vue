<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  modelValue: { type: Array, default: () => [] },
  options: { type: Array, default: () => [] },
  defaultOpen: { type: Boolean, default: true },
})

const emit = defineEmits(['update:modelValue'])

const selected = ref([...props.modelValue])
watch(
  () => props.modelValue,
  (v) => {
    selected.value = [...v]
  },
  { immediate: true },
)

function onChange() {
  emit('update:modelValue', [...selected.value])
}

function reset() {
  selected.value = []
  emit('update:modelValue', [])
}

const isOpen = ref(props.defaultOpen)
const hasSelection = computed(() => selected.value.length > 0)
</script>

<template>
  <div class="md:w-72 shrink-0 block">
    <div class="bg-card rounded-xl shadow-sm overflow-hidden border border-border">
      <div class="p-5 border-b border-border flex items-center justify-between">
        <h3 class="text-lg font-semibold text-card-foreground">Filtry</h3>
        <button
          class="md:hidden text-sm text-muted-foreground hover:text-foreground"
          @click="isOpen = !isOpen"
        >
          {{ isOpen ? 'Ukryj' : 'Pokaż' }}
        </button>
      </div>

      <div class="border-b border-border">
        <button
          type="button"
          :aria-expanded="isOpen"
          class="flex w-full items-center justify-between p-5 text-left font-medium hover:bg-muted text-card-foreground"
          @click="isOpen = !isOpen"
        >
          <span>Destynacje</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-chevron-down h-5 w-5 transition-transform"
            :class="isOpen ? 'rotate-180' : ''"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>

        <div v-show="isOpen" class="px-5 pb-5 space-y-2">
          <div
            v-for="opt in options"
            :key="opt"
            class="flex items-center space-x-2"
          >
            <input
              :id="`destination-${opt}`"
              type="checkbox"
              class="sr-only peer"
              :value="opt"
              v-model="selected"
              @change="onChange"
            />
            <span
              class="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background
                     peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring
                     peer-focus-visible:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50
                     inline-flex items-center justify-center
                     transition-colors
                     peer-checked:bg-primary peer-checked:text-primary-foreground"
            >
              <svg
                v-if="selected.includes(opt)"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                class="h-3 w-3"
                fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </span>

            <label
              :for="`destination-${opt}`"
              class="text-sm leading-none cursor-pointer text-card-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {{ opt }}
            </label>
          </div>
        </div>
      </div>

      <div class="p-5 flex gap-2">
        <button
          class="w-full py-2 px-4 border border-border rounded-md text-sm font-medium text-card-foreground hover:bg-muted"
          @click="reset"
          :disabled="!hasSelection"
        >
          Resetuj filtry
        </button>
      </div>
    </div>
  </div>
</template>
