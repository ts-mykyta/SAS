import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationsView from '@/views/DestinationsView.vue'
import ActivitiesView from '@/views/ActivitiesView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import TermsView from '@/views/TermsView.vue'
import CookieView from '@/views/CookieView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import ActivityView from '@/views/ActivityView.vue'

const CountryView = () => import('@/views/CountryView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Twoja podróż czeka na Ciebie' } },

    { path: '/destinations', name: 'destinations', component: DestinationsView, meta: { title: 'Podróżuj Tam, Gdzie Zaczyna Się Przygoda' } },

    {
      path: '/destinations/:slug',
      name: 'destination',
      component: CountryView,
      props: true,
      meta: { title: 'destination' }
    },

    { path: '/activities', name: 'activities', component: ActivitiesView, meta: { title: 'activities' } },

    {
      path: '/activities/:slug',
      name: 'activity',
      component: ActivityView,
      props: true,
      meta: { title: 'activity' }
    },

    { path: '/privacy-policy', name: 'privacy-policy', component: PrivacyView, meta: { title: 'privacy-policy' } },
    { path: '/terms', name: 'terms', component: TermsView, meta: { title: 'terms' } },
    { path: '/cookie', name: 'cookie', component: CookieView, meta: { title: 'Polityka plików cookie' } },
    { path: '/about', name: 'about', component: AboutView, meta: { title: 'about' } },
    { path: '/contact', name: 'contact', component: ContactView, meta: { title: 'contact' } },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      const el = document.querySelector(to.hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const defaultTitle = 'Twoja podróż czeka na Ciebie'
  document.title = to.meta.title || defaultTitle
})


export default router
