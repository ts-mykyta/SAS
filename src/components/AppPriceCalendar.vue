<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue'
import airportsData from '@/store/airports.json'

const searchForm = reactive({
  origin: '',
  destination: '',
  selectedDate: null,
})

const showOriginSuggestions = ref(false)
const showDestinationSuggestions = ref(false)
const currentMonth = ref(new Date())
const isLoading = ref(false)

const flightData = ref({})

// Modal state
const isModalOpen = ref(false)
const selectedDateLabel = computed(() =>
  searchForm.selectedDate ? formatDisplayDate(searchForm.selectedDate) : '',
)
const selectedDateFlights = computed(() => {
  if (!searchForm.selectedDate) return []
  const dateKey = searchForm.selectedDate.toISOString().slice(0, 10)
  return flightData.value[dateKey] || []
})

const filteredOriginSuggestions = computed(() => {
  if (!searchForm.origin) return []
  const query = searchForm.origin.toLowerCase()

  return airportsData
    .filter(
      (airport) =>
        airport.name.toLowerCase().includes(query) ||
        airport.city.toLowerCase().includes(query) ||
        airport.country.toLowerCase().includes(query) ||
        airport.code.toLowerCase().includes(query),
    )
    .sort((a, b) => {
      if (a.country === 'Polska' && b.country !== 'Polska') return -1
      if (a.country !== 'Polska' && b.country === 'Polska') return 1

      const aScore = getMatchScore(a, query)
      const bScore = getMatchScore(b, query)
      return bScore - aScore
    })
    .slice(0, 8)
})

const filteredDestinationSuggestions = computed(() => {
  if (!searchForm.destination) return []
  const query = searchForm.destination.toLowerCase()

  return airportsData
    .filter(
      (airport) =>
        airport.name.toLowerCase().includes(query) ||
        airport.city.toLowerCase().includes(query) ||
        airport.country.toLowerCase().includes(query) ||
        airport.code.toLowerCase().includes(query),
    )
    .sort((a, b) => {
      const europeanCountries = [
        'Francja',
        'Wielka Brytania',
        'Włochy',
        'Hiszpania',
        'Niemcy',
        'Holandia',
        'Austria',
        'Szwajcaria',
        'Dania',
        'Szwecja',
        'Norwegia',
        'Finlandia',
        'Czechy',
        'Węgry',
        'Turcja',
      ]

      const aIsEuropean = europeanCountries.includes(a.country)
      const bIsEuropean = europeanCountries.includes(b.country)

      if (aIsEuropean && !bIsEuropean) return -1
      if (!aIsEuropean && bIsEuropean) return 1

      const aScore = getMatchScore(a, query)
      const bScore = getMatchScore(b, query)
      return bScore - aScore
    })
    .slice(0, 8)
})

const getMatchScore = (airport, query) => {
  let score = 0

  if (airport.city.toLowerCase() === query) score += 100

  if (airport.city.toLowerCase().startsWith(query)) score += 50
  if (airport.name.toLowerCase().startsWith(query)) score += 40
  if (airport.country.toLowerCase().startsWith(query)) score += 30

  if (airport.city.toLowerCase().includes(query)) score += 20
  if (airport.name.toLowerCase().includes(query)) score += 15
  if (airport.country.toLowerCase().includes(query)) score += 10
  if (airport.code.toLowerCase().includes(query)) score += 25

  return score
}

const formatDisplayDate = (date) => {
  if (!date) return ''
  const months = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień',
  ]
  return `${months[date.getMonth()]} ${date.getFullYear()}`
}

const getDaysInMonth = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  const days = []

  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null)
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(new Date(year, month, day))
  }

  return days
}

const isDateDisabled = (date) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date < today
}

const isDateSelected = (date) => {
  return searchForm.selectedDate && date.getTime() === searchForm.selectedDate.getTime()
}

const selectDate = (date) => {
  if (isDateDisabled(date)) return

  searchForm.selectedDate = date
  loadFlightsForDate(date)
  openModal()
}

const nextMonth = () => {
  currentMonth.value = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth() + 1)
}

const prevMonth = () => {
  currentMonth.value = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth() - 1)
}

const selectOrigin = (airport) => {
  searchForm.origin = `${airport.city} (${airport.code})`
  showOriginSuggestions.value = false
}

const selectDestination = (airport) => {
  searchForm.destination = `${airport.city} (${airport.code})`
  showDestinationSuggestions.value = false
}

const loadFlightsForDate = async (date) => {
  if (!searchForm.origin || !searchForm.destination) return

  isLoading.value = true

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const dateKey = date.toISOString().slice(0, 10)
    const originCode = searchForm.origin.match(/\(([^)]+)\)/)?.[1] || 'WAW'
    const destinationCode = searchForm.destination.match(/\(([^)]+)\)/)?.[1] || 'CDG'

    const flights = generateRandomFlights(originCode, destinationCode)

    flightData.value[dateKey] = flights
  } catch (error) {
    console.error('Błąd podczas ładowania lotów:', error)
  } finally {
    isLoading.value = false
  }
}

const generateRandomFlights = (origin, destination) => {
  const airlines = ['LOT Polish Airlines', 'Ryanair', 'Wizz Air', 'Air France', 'Lufthansa']
  const flights = []

  const numFlights = Math.floor(Math.random() * 3) + 3

  for (let i = 0; i < numFlights; i++) {
    const airline = airlines[Math.floor(Math.random() * airlines.length)]
    const hour = Math.floor(Math.random() * 20) + 6 // 06:00 - 02:00
    const minute = Math.floor(Math.random() * 4) * 15 // 0, 15, 30, 45

    const departureTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
    const arrivalHour = hour + Math.floor(Math.random() * 3) + 1
    const arrivalMinute = Math.floor(Math.random() * 4) * 15
    const arrivalTime = `${arrivalHour.toString().padStart(2, '0')}:${arrivalMinute.toString().padStart(2, '0')}`

    flights.push({
      id: i + 1,
      airline,
      flightNumber: `${airline.charAt(0)}${Math.floor(Math.random() * 900) + 100}`,
      departure: {
        airport: origin,
        time: departureTime,
      },
      arrival: {
        airport: destination,
        time: arrivalTime,
      },
      duration: `${Math.floor(Math.random() * 3) + 1}h ${Math.floor(Math.random() * 60)}m`,
      price: Math.floor(Math.random() * 400) + 200,
      currency: 'PLN',
      bookingUrl: 'https://www.lot.com/pl/pl',
    })
  }

  return flights.sort((a, b) => a.price - b.price)
}

onMounted(() => {
  currentMonth.value = new Date()
  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }
  window.addEventListener('keydown', handleEsc)
  // store to remove on unmount
  escHandler.value = handleEsc
})
const escHandler = ref(null)
onBeforeUnmount(() => {
  if (escHandler.value) {
    window.removeEventListener('keydown', escHandler.value)
  }
})

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <section id="price-calendar">
    <section class="py-6 sm:py-8 lg:py-12 bg-background">
      <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2
            class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-2 sm:mb-3 lg:mb-4"
          >
            Prognoza Cen Biletów Lotniczych
          </h2>
          <p
            class="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2"
          >
            Porównaj ceny lotów i znajdź najlepsze oferty na swoją następną podróż
          </p>
        </div>
        <div class="bg-card border rounded-xl p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6 lg:mb-8 shadow-sm">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            <div class="space-y-1 sm:space-y-2">
              <label class="block text-sm font-medium text-muted-foreground">Od</label>
              <div class="relative">
                <div class="relative">
                  <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
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
                      class="lucide lucide-plane w-4 h-4 text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    v-model="searchForm.origin"
                    @focus="showOriginSuggestions = true"
                    @blur="setTimeout(() => (showOriginSuggestions = false), 200)"
                    class="flex w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 pr-10 h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-primary"
                    placeholder="Wyszukaj lotniska..."
                    required=""
                    type="text"
                  />
                  <div
                    class="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1"
                  ></div>
                </div>
                <!-- Автодополнение для пункта отправления -->
                <div
                  v-if="showOriginSuggestions && filteredOriginSuggestions.length > 0"
                  class="absolute top-full left-0 right-0 z-50 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto"
                >
                  <div
                    v-for="airport in filteredOriginSuggestions"
                    :key="airport.code"
                    @click="selectOrigin(airport)"
                    class="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-600 last:border-b-0"
                  >
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-900 dark:text-gray-100">
                          {{ airport.city }}
                        </div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">
                          {{ airport.name }}
                        </div>
                      </div>
                      <div class="text-sm font-mono text-gray-500 dark:text-gray-400">
                        {{ airport.code }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="space-y-1 sm:space-y-2">
              <label class="block text-sm font-medium text-muted-foreground">Do</label>
              <div class="relative">
                <div class="relative">
                  <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
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
                      class="lucide lucide-map-pin w-4 h-4 text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <input
                    v-model="searchForm.destination"
                    @focus="showDestinationSuggestions = true"
                    @blur="setTimeout(() => (showDestinationSuggestions = false), 200)"
                    class="flex w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 pr-10 h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-primary"
                    placeholder="Wyszukaj lotniska..."
                    required=""
                    type="text"
                  />
                  <div
                    class="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1"
                  ></div>
                </div>
                <!-- Автодополнение для пункта назначения -->
                <div
                  v-if="showDestinationSuggestions && filteredDestinationSuggestions.length > 0"
                  class="absolute top-full left-0 right-0 z-50 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto"
                >
                  <div
                    v-for="airport in filteredDestinationSuggestions"
                    :key="airport.code"
                    @click="selectDestination(airport)"
                    class="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-600 last:border-b-0"
                  >
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-900 dark:text-gray-100">
                          {{ airport.city }}
                        </div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">
                          {{ airport.name }}
                        </div>
                      </div>
                      <div class="text-sm font-mono text-gray-500 dark:text-gray-400">
                        {{ airport.code }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Календарь с блоками дат и рейсов -->
        <div
          v-if="searchForm.origin && searchForm.destination"
          class="bg-card border rounded-xl p-3 sm:p-4 lg:p-6 shadow-sm"
        >
          <!-- Навигация по месяцам -->
          <div class="flex items-center justify-between mb-6">
            <button
              @click="prevMonth"
              class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
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
              >
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
            </button>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {{ formatDisplayDate(currentMonth) }}
            </h3>
            <button
              @click="nextMonth"
              class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
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
              >
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>

          <div class="overflow-x-auto">
            <div class="min-w-[680px] sm:min-w-0">
              <!-- Заголовки дней недели -->
              <div class="grid grid-cols-7 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <div
                  class="text-center text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 py-1.5 sm:py-2"
                >
                  <span class="hidden sm:inline">Poniedziałek</span>
                  <span class="sm:hidden">Pn</span>
                </div>
                <div
                  class="text-center text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 py-1.5 sm:py-2"
                >
                  <span class="hidden sm:inline">Wtorek</span>
                  <span class="sm:hidden">Wt</span>
                </div>
                <div
                  class="text-center text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 py-1.5 sm:py-2"
                >
                  <span class="hidden sm:inline">Środa</span>
                  <span class="sm:hidden">Śr</span>
                </div>
                <div
                  class="text-center text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 py-1.5 sm:py-2"
                >
                  <span class="hidden sm:inline">Czwartek</span>
                  <span class="sm:hidden">Czw</span>
                </div>
                <div
                  class="text-center text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 py-1.5 sm:py-2"
                >
                  <span class="hidden sm:inline">Piątek</span>
                  <span class="sm:hidden">Pt</span>
                </div>
                <div
                  class="text-center text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 py-1.5 sm:py-2"
                >
                  <span class="hidden sm:inline">Sobota</span>
                  <span class="sm:hidden">Sb</span>
                </div>
                <div
                  class="text-center text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 py-1.5 sm:py-2"
                >
                  <span class="hidden sm:inline">Niedziela</span>
                  <span class="sm:hidden">Nd</span>
                </div>
              </div>

              <!-- Календарная сетка -->
              <div class="grid grid-cols-7 gap-1.5 sm:gap-2">
                <div
                  v-for="(day, index) in getDaysInMonth(currentMonth)"
                  :key="index"
                  class="min-h-[110px] sm:min-h-[120px] border border-gray-200 dark:border-gray-700 rounded-lg p-1.5 sm:p-2"
                  :class="[
                    !day ? 'bg-gray-50 dark:bg-gray-800' : '',
                    day && isDateDisabled(day) ? 'bg-gray-100 dark:bg-gray-800 opacity-50' : '',
                    day && !isDateDisabled(day)
                      ? 'bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer'
                      : '',
                    day && isDateSelected(day) ? 'ring-2 ring-travel-teal bg-travel-teal/10' : '',
                  ]"
                  @click="day && !isDateDisabled(day) && selectDate(day)"
                >
                  <div v-if="day" class="h-full">
                    <!-- Дата -->
                    <div
                      class="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 mb-1.5 sm:mb-2"
                    >
                      {{ day.getDate() }}
                    </div>

                    <!-- Сообщение о выборе даты -->
                    <div
                      class="text-[9px] sm:text-xs text-gray-400 dark:text-gray-500 text-center mt-1 sm:mt-2"
                      v-if="!isDateDisabled(day)"
                    >
                      <span class="sm:hidden">Kliknij</span>
                      <span class="hidden sm:inline">Kliknij aby zobaczyć loty</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Сообщение о необходимости выбора маршрута -->
        <div v-else class="bg-card border rounded-xl p-8 text-center shadow-sm">
          <div class="text-gray-500 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mx-auto mb-4"
            >
              <path
                d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
              ></path>
            </svg>
            <h3 class="text-lg font-medium mb-2">Wybierz trasę podróży</h3>
            <p>Wprowadź lotnisko wylotu i przylotu, aby zobaczyć kalendarz cen</p>
          </div>
        </div>
      </div>
    </section>
  </section>
  <div v-if="isModalOpen" class="fixed inset-0 z-[100]">
    <div class="absolute inset-0 bg-black/40" @click="closeModal"></div>
    <div class="absolute inset-0 flex items-end sm:items-center justify-center p-3 sm:p-6">
      <div
        class="w-full sm:w-[560px] lg:w-[720px] max-h-[80vh] sm:max-h-[85vh] overflow-hidden rounded-2xl bg-card border shadow-xl mb-2 sm:mb-0 flex flex-col"
        role="dialog"
        aria-modal="true"
        @click.stop
      >
        <div class="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b">
          <div>
            <h3 class="text-base sm:text-lg font-semibold text-foreground">
              {{ selectedDateLabel }}
            </h3>
            <p
              class="text-xs sm:text-sm text-muted-foreground"
              v-if="searchForm.origin && searchForm.destination"
            >
              {{ searchForm.origin }} → {{ searchForm.destination }}
            </p>
          </div>
          <button class="p-2 rounded hover:bg-muted" @click="closeModal" aria-label="Close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div
          class="flex-1 px-4 sm:px-6 py-4 pb-6 sm:pb-8 overflow-y-auto"
          :class="[isLoading ? 'min-h-[240px]' : '']"
        >
          <div v-if="isLoading" class="flex items-center justify-center py-16">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-travel-teal"></div>
          </div>
          <div v-else>
            <div
              v-if="selectedDateFlights.length === 0"
              class="text-center text-muted-foreground py-10"
            >
              Brak lotów dla wybranej daty
            </div>
            <div v-else class="space-y-3">
              <div
                v-for="flight in selectedDateFlights"
                :key="flight.id"
                class="border rounded-lg p-3 sm:p-4 bg-background"
              >
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <div class="flex items-center gap-3">
                      <div class="text-lg sm:text-xl font-semibold text-foreground">
                        {{ flight.departure.time }}
                      </div>
                      <div class="text-muted-foreground text-sm">→ {{ flight.arrival.time }}</div>
                    </div>
                    <div class="text-sm text-muted-foreground mt-1 truncate">
                      {{ flight.airline }} • {{ flight.flightNumber }} • {{ flight.duration }}
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-travel-teal text-base sm:text-lg font-bold whitespace-nowrap">
                      {{ flight.price }} {{ flight.currency }}
                    </div>
                    <a
                      :href="flight.bookingUrl"
                      target="_blank"
                      rel="noopener"
                      class="inline-block mt-2 px-3 py-1.5 text-sm rounded-md bg-travel-teal text-white hover:opacity-90"
                    >
                      Rezerwuj
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
