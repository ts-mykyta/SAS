<script setup>
import { ref, reactive, computed, onMounted } from 'vue'

// Реактивные данные
const searchForm = reactive({
  origin: '',
  destination: '',
  departureDate: '',
  returnDate: '',
  passengers: 2,
  tripType: 'round-trip',
})

const showOriginSuggestions = ref(false)
const showDestinationSuggestions = ref(false)
const isLoading = ref(false)
const searchResults = ref([])
const showResults = ref(false)

const airportsData = ref([
  { code: 'WAW', name: 'Warszawa Okęcie', country: 'Polska', city: 'Warszawa' },
  { code: 'KRK', name: 'Kraków Balice', country: 'Polska', city: 'Kraków' },
  { code: 'GDN', name: 'Gdańsk Lech Wałęsa', country: 'Polska', city: 'Gdańsk' },
  { code: 'WRO', name: 'Wrocław Strachowice', country: 'Polska', city: 'Wrocław' },
  { code: 'POZ', name: 'Poznań Ławica', country: 'Polska', city: 'Poznań' },
  { code: 'KTW', name: 'Katowice Pyrzowice', country: 'Polska', city: 'Katowice' },
  { code: 'RZE', name: 'Rzeszów Jasionka', country: 'Polska', city: 'Rzeszów' },
  { code: 'SZZ', name: 'Szczecin Goleniów', country: 'Polska', city: 'Szczecin' },
  { code: 'LUZ', name: 'Lublin Świdnik', country: 'Polska', city: 'Lublin' },
  { code: 'BZG', name: 'Bydgoszcz Szwederowo', country: 'Polska', city: 'Bydgoszcz' },
  { code: 'OSR', name: 'Ostrava', country: 'Polska', city: 'Ostrava' },
  { code: 'IEG', name: 'Zielona Góra', country: 'Polska', city: 'Zielona Góra' },
  { code: 'LCJ', name: 'Łódź Lublinek', country: 'Polska', city: 'Łódź' },
  { code: 'SZY', name: 'Olsztyn Mazury', country: 'Polska', city: 'Olsztyn' },
  { code: 'RDO', name: 'Radom Sadków', country: 'Polska', city: 'Radom' },

  // Europe
  { code: 'CDG', name: 'Paryż Charles de Gaulle', country: 'Francja', city: 'Paryż' },
  { code: 'ORY', name: 'Paryż Orly', country: 'Francja', city: 'Paryż' },
  { code: 'LHR', name: 'Londyn Heathrow', country: 'Wielka Brytania', city: 'Londyn' },
  { code: 'LGW', name: 'Londyn Gatwick', country: 'Wielka Brytania', city: 'Londyn' },
  { code: 'STN', name: 'Londyn Stansted', country: 'Wielka Brytania', city: 'Londyn' },
  { code: 'FCO', name: 'Rzym Fiumicino', country: 'Włochy', city: 'Rzym' },
  { code: 'MXP', name: 'Mediolan Malpensa', country: 'Włochy', city: 'Mediolan' },
  { code: 'MAD', name: 'Madryt Barajas', country: 'Hiszpania', city: 'Madryt' },
  { code: 'BCN', name: 'Barcelona El Prat', country: 'Hiszpania', city: 'Barcelona' },
  { code: 'FRA', name: 'Frankfurt', country: 'Niemcy', city: 'Frankfurt' },
  { code: 'MUC', name: 'Monachium', country: 'Niemcy', city: 'Monachium' },
  { code: 'TXL', name: 'Berlin Tegel', country: 'Niemcy', city: 'Berlin' },
  { code: 'AMS', name: 'Amsterdam Schiphol', country: 'Holandia', city: 'Amsterdam' },
  { code: 'VIE', name: 'Wiedeń', country: 'Austria', city: 'Wiedeń' },
  { code: 'ZUR', name: 'Zurych', country: 'Szwajcaria', city: 'Zurych' },
  { code: 'CPH', name: 'Kopenhaga', country: 'Dania', city: 'Kopenhaga' },
  { code: 'ARN', name: 'Sztokholm Arlanda', country: 'Szwecja', city: 'Sztokholm' },
  { code: 'OSL', name: 'Oslo Gardermoen', country: 'Norwegia', city: 'Oslo' },
  { code: 'HEL', name: 'Helsinki Vantaa', country: 'Finlandia', city: 'Helsinki' },
  { code: 'PRG', name: 'Praga', country: 'Czechy', city: 'Praga' },
  { code: 'BUD', name: 'Budapeszt', country: 'Węgry', city: 'Budapeszt' },
  { code: 'IST', name: 'Stambuł', country: 'Turcja', city: 'Stambuł' },
  { code: 'SAW', name: 'Stambuł Sabiha Gökçen', country: 'Turcja', city: 'Stambuł' },

  // Dalekie kierunki
  { code: 'DXB', name: 'Dubaj', country: 'ZEA', city: 'Dubaj' },
  { code: 'JFK', name: 'Nowy Jork JFK', country: 'USA', city: 'Nowy Jork' },
  { code: 'LAX', name: 'Los Angeles', country: 'USA', city: 'Los Angeles' },
  { code: 'NRT', name: 'Tokio Narita', country: 'Japonia', city: 'Tokio' },
  { code: 'ICN', name: 'Seul Incheon', country: 'Korea Południowa', city: 'Seul' },
  { code: 'SIN', name: 'Singapur Changi', country: 'Singapur', city: 'Singapur' },
  { code: 'BKK', name: 'Bangkok Suvarnabhumi', country: 'Tajlandia', city: 'Bangkok' },
  { code: 'SYD', name: 'Sydney Kingsford Smith', country: 'Australia', city: 'Sydney' },
  { code: 'MEL', name: 'Melbourne', country: 'Australia', city: 'Melbourne' },
  { code: 'YYZ', name: 'Toronto Pearson', country: 'Kanada', city: 'Toronto' },
  { code: 'YVR', name: 'Vancouver', country: 'Kanada', city: 'Vancouver' },
])

const filteredOriginSuggestions = computed(() => {
  if (!searchForm.origin) return []
  const query = searchForm.origin.toLowerCase()

  return airportsData.value
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

  return airportsData.value
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

const selectOrigin = (airport) => {
  searchForm.origin = `${airport.city} (${airport.code})`
  showOriginSuggestions.value = false
}

const selectDestination = (airport) => {
  searchForm.destination = `${airport.city} (${airport.code})`
  showDestinationSuggestions.value = false
}

const searchFlights = async () => {
  if (!searchForm.origin || !searchForm.destination || !searchForm.departureDate) {
    alert('Proszę wypełnić wszystkie wymagane pola')
    return
  }

  if (searchForm.tripType === 'round-trip' && !searchForm.returnDate) {
    alert('Proszę wybrać datę powrotu dla podróży w obie strony')
    return
  }

  isLoading.value = true

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const originCode = searchForm.origin.match(/\(([^)]+)\)/)?.[1] || 'WAW'
    const destinationCode = searchForm.destination.match(/\(([^)]+)\)/)?.[1] || 'CDG'

    const baseFlights = [
      {
        id: 1,
        airline: 'LOT Polish Airlines',
        flightNumber: 'LO123',
        departure: {
          airport: originCode,
          time: '08:30',
          date: searchForm.departureDate,
        },
        arrival: {
          airport: destinationCode,
          time: '10:45',
          date: searchForm.departureDate,
        },
        duration: '2h 15m',
        price: searchForm.tripType === 'round-trip' ? 450 : 280,
        currency: 'PLN',
        bookingUrl: 'https://www.lot.com/pl/pl',
      },
      {
        id: 2,
        airline: 'Air France',
        flightNumber: 'AF456',
        departure: {
          airport: originCode,
          time: '14:20',
          date: searchForm.departureDate,
        },
        arrival: {
          airport: destinationCode,
          time: '16:35',
          date: searchForm.departureDate,
        },
        duration: '2h 15m',
        price: searchForm.tripType === 'round-trip' ? 520 : 320,
        currency: 'PLN',
        bookingUrl: 'https://www.airfrance.pl/',
      },
      {
        id: 3,
        airline: 'Ryanair',
        flightNumber: 'FR789',
        departure: {
          airport: originCode,
          time: '19:45',
          date: searchForm.departureDate,
        },
        arrival: {
          airport: destinationCode,
          time: '22:00',
          date: searchForm.departureDate,
        },
        duration: '2h 15m',
        price: searchForm.tripType === 'round-trip' ? 320 : 180,
        currency: 'PLN',
        bookingUrl: 'https://www.ryanair.com/pl/pl',
      },
      {
        id: 4,
        airline: 'Wizz Air',
        flightNumber: 'W6123',
        departure: {
          airport: originCode,
          time: '06:15',
          date: searchForm.departureDate,
        },
        arrival: {
          airport: destinationCode,
          time: '08:30',
          date: searchForm.departureDate,
        },
        duration: '2h 15m',
        price: searchForm.tripType === 'round-trip' ? 280 : 150,
        currency: 'PLN',
        bookingUrl: 'https://wizzair.com/pl-pl',
      },
      {
        id: 5,
        airline: 'Lufthansa',
        flightNumber: 'LH456',
        departure: {
          airport: originCode,
          time: '12:00',
          date: searchForm.departureDate,
        },
        arrival: {
          airport: destinationCode,
          time: '14:15',
          date: searchForm.departureDate,
        },
        duration: '2h 15m',
        price: searchForm.tripType === 'round-trip' ? 580 : 350,
        currency: 'PLN',
        bookingUrl: 'https://www.lufthansa.com/pl/pl/homepage',
      },
    ]

    if (searchForm.tripType === 'round-trip') {
      searchResults.value = baseFlights.map((flight) => ({
        ...flight,
        returnFlight: {
          airline: flight.airline,
          flightNumber: flight.flightNumber.replace(/\d+/, (match) =>
            String(parseInt(match) + 100),
          ),
          departure: {
            airport: destinationCode,
            time: flight.arrival.time,
            date: searchForm.returnDate,
          },
          arrival: {
            airport: originCode,
            time: flight.departure.time,
            date: searchForm.returnDate,
          },
          duration: flight.duration,
        },
      }))
    } else {
      searchResults.value = baseFlights
    }

    showResults.value = true
  } catch (error) {
    console.error('Błąd podczas wyszukiwania lotów:', error)
    alert('Wystąpił błąd podczas wyszukiwania lotów. Spróbuj ponownie.')
  } finally {
    isLoading.value = false
  }
}

const bookFlight = (bookingUrl) => {
  window.open(bookingUrl, '_blank')
}

const resetSearch = () => {
  showResults.value = false
  searchResults.value = []
}

onMounted(() => {
  const today = new Date()
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())
  searchForm.departureDate = nextMonth.toISOString().slice(0, 7)
  searchForm.returnDate = new Date(
    nextMonth.getFullYear(),
    nextMonth.getMonth() + 1,
    nextMonth.getDate(),
  )
    .toISOString()
    .slice(0, 7)
})
</script>

<template>
  <div class="relative z-10 max-w-4xl mx-auto mb-16 transform rotate-1">
    <div
      class="bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-card/30 p-8 lg:p-12"
    >
      <div class="text-center mb-8">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Zaplanuj swoją przygodę</h2>
        <p class="text-gray-600 text-lg">Odkryj niezwykłe miejsca i doświadczenia</p>
      </div>
      <div class="w-full">
        <div class="relative">
          <div
            class="absolute inset-0 bg-gradient-to-r from-travel-teal via-travel-blue to-travel-teal rounded-2xl blur opacity-75"
          ></div>
          <div class="relative bg-card rounded-2xl p-4 sm:p-6 shadow-2xl">
            <div class="flex flex-col space-y-4 sm:space-y-6">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div
                  class="flex items-center gap-2 text-lg sm:text-xl font-semibold text-travel-teal"
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
                    class="lucide lucide-plane w-5 h-5 sm:w-6 sm:h-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                    ></path>
                  </svg>
                  <span>Znajdź Najlepsze Ceny</span>
                </div>
                <div class="flex bg-gray-100 rounded-lg p-1 w-fit">
                  <button
                    type="button"
                    @click="searchForm.tripType = 'round-trip'"
                    :class="[
                      'px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
                      searchForm.tripType === 'round-trip'
                        ? 'bg-card dark:bg-gray-700 text-travel-teal shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200',
                    ]"
                  >
                    Podróż W Obie Strony
                  </button>
                  <button
                    type="button"
                    @click="searchForm.tripType = 'one-way'"
                    :class="[
                      'px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
                      searchForm.tripType === 'one-way'
                        ? 'bg-card dark:bg-gray-700 text-travel-teal shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200',
                    ]"
                  >
                    Droga Jednokierunkowa
                  </button>
                </div>
              </div>
              <form @submit.prevent="searchFlights" class="space-y-4 sm:space-y-6">
                <div class="flex flex-wrap gap-4 [container-type:inline-size]">
                  <div class="space-y-2 min-w-[180px] flex-1">
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >Od<span class="text-red-500 ml-1">*</span></label
                    >
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
                          placeholder="Miasto pochodzenia"
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
                  <div class="space-y-2 min-w-[180px] flex-1">
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >Do<span class="text-red-500 ml-1">*</span></label
                    >
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
                          placeholder="Miasto docelowe"
                          required=""
                          type="text"
                        />
                        <div
                          class="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1"
                        ></div>
                      </div>
                      <div
                        v-if="
                          showDestinationSuggestions && filteredDestinationSuggestions.length > 0
                        "
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
                  <div class="space-y-2 min-w-[180px] flex-1">
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >Wyjazd<span class="text-red-500 ml-1">*</span></label
                    >
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
                            class="lucide lucide-calendar w-4 h-4 text-primary"
                            aria-hidden="true"
                          >
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </div>
                        <input
                          v-model="searchForm.departureDate"
                          class="flex w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 pr-10 h-12 border-2 transition-colors border-gray-200 dark:border-gray-700 focus:border-primary"
                          placeholder="YYYY-MM"
                          pattern="\d{4}-\d{2}"
                          required=""
                          type="month"
                        />
                        <div class="absolute right-2 top-1/2 transform -translate-y-1/2"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="searchForm.tripType === 'round-trip'"
                    class="space-y-2 min-w-[180px] flex-1"
                  >
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >Powrót<span class="text-red-500 ml-1">*</span></label
                    >
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
                            class="lucide lucide-calendar w-4 h-4 text-primary"
                            aria-hidden="true"
                          >
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </div>
                        <input
                          v-model="searchForm.returnDate"
                          class="flex w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 pr-10 h-12 border-2 transition-colors border-gray-200 dark:border-gray-700 focus:border-primary"
                          placeholder="YYYY-MM"
                          pattern="\d{4}-\d{2}"
                          required=""
                          type="month"
                        />
                        <div class="absolute right-2 top-1/2 transform -translate-y-1/2"></div>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-2 min-w-[180px] flex-1">
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >Pasażerowie</label
                    >
                    <div class="relative">
                      <select
                        v-model="searchForm.passengers"
                        class="flex w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 pr-10 h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-primary"
                      >
                        <option value="1">1 Pasażer</option>
                        <option value="2">2 Pasażerowie</option>
                        <option value="3">3 Pasażerowie</option>
                        <option value="4">4 Pasażerowie</option>
                        <option value="5">5 Pasażerowie</option>
                        <option value="6">6 Pasażerowie</option>
                      </select>
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
                          class="lucide lucide-users h-4 w-4 text-travel-teal"
                          aria-hidden="true"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    class="min-w-[180px] flex-1 flex items-end justify-center @[700px]:items-center"
                  >
                    <button
                      :disabled="isLoading"
                      class="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 px-4 py-2 h-12 w-full bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-primary text-white font-semibold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                      type="submit"
                    >
                      <svg
                        v-if="!isLoading"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-search mr-2 h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                      <svg
                        v-else
                        class="animate-spin mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      {{ isLoading ? 'Wyszukiwanie...' : 'Wyszukaj Loty' }}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="showResults"
      class="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6"
    >
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Znalezione Loty</h3>
        <button
          @click="resetSearch"
          class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
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
            class="w-6 h-6"
          >
            <path d="M18 6L6 18"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div class="space-y-4">
        <div
          v-for="flight in searchResults"
          :key="flight.id"
          class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow"
        >
          <div class="flex items-center justify-between">
            <div class="flex-1">
              <div class="flex items-center space-x-4 mb-3">
                <div class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {{ flight.airline }}
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  {{ flight.flightNumber }}
                </div>
              </div>

              <div class="mb-3">
                <div class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  {{ searchForm.tripType === 'round-trip' ? 'Lot w jedną stronę' : 'Lot' }}
                </div>
                <div class="flex items-center space-x-6">
                  <div class="text-center">
                    <div class="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {{ flight.departure.time }}
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      {{ flight.departure.airport }}
                    </div>
                  </div>

                  <div class="flex-1 flex items-center justify-center">
                    <div class="flex items-center space-x-2">
                      <div class="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-gray-400"
                      >
                        <path
                          d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                        ></path>
                      </svg>
                      <div class="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 ml-4">
                      {{ flight.duration }}
                    </div>
                  </div>

                  <div class="text-center">
                    <div class="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {{ flight.arrival.time }}
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      {{ flight.arrival.airport }}
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-if="flight.returnFlight"
                class="border-t border-gray-200 dark:border-gray-600 pt-3"
              >
                <div class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Lot powrotny
                </div>
                <div class="flex items-center space-x-6">
                  <div class="text-center">
                    <div class="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {{ flight.returnFlight.departure.time }}
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      {{ flight.returnFlight.departure.airport }}
                    </div>
                  </div>

                  <div class="flex-1 flex items-center justify-center">
                    <div class="flex items-center space-x-2">
                      <div class="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-gray-400"
                      >
                        <path
                          d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                        ></path>
                      </svg>
                      <div class="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 ml-4">
                      {{ flight.returnFlight.duration }}
                    </div>
                  </div>

                  <div class="text-center">
                    <div class="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {{ flight.returnFlight.arrival.time }}
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      {{ flight.returnFlight.arrival.airport }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="ml-6 text-right">
              <div class="text-2xl font-bold text-travel-teal mb-2">
                {{ flight.price }} {{ flight.currency }}
              </div>
              <button
                @click="bookFlight(flight.bookingUrl)"
                class="bg-gradient-to-r from-travel-teal to-travel-blue hover:from-travel-blue hover:to-travel-teal text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Zarezerwuj
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 text-center">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Ceny mogą się różnić. Sprawdź aktualne ceny u przewoźnika.
        </p>
      </div>
    </div>
  </div>
</template>
