import HomeView from './views/HomeView.vue'
import DestinationsView from './views/DestinationsView.vue'
import ActivitiesView from './views/ActivitiesView.vue'
import PrivacyView from './views/PrivacyView.vue'
import TermsView from './views/TermsView.vue'
import CookieView from './views/CookieView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
const CountryView = () => import('./views/CountryView.vue')
import ActivityView from './views/ActivityView.vue'

export default [
  { path: '/', name: 'home', component: HomeView },
  { path: '/destinations', name: 'destinations', component: DestinationsView },
  { path: '/destinations/:slug', name: 'destination', component: CountryView, props: true },
  { path: '/activities', name: 'activities', component: ActivitiesView },
  { path: '/activities/:slug', name: 'activity', component: ActivityView, props: true },
  { path: '/privacy-policy', name: 'privacy-policy', component: PrivacyView },
  { path: '/terms', name: 'terms', component: TermsView },
  { path: '/cookie', name: 'cookie', component: CookieView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/contact', name: 'contact', component: ContactView },
]
