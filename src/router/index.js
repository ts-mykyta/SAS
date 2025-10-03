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
    { path: '/', name: 'home', component: HomeView },

    { path: '/destinations', name: 'destinations', component: DestinationsView },

    {
      path: '/destinations/:slug',
      name: 'destination',
      component: CountryView,
      props: true,
    },

    { path: '/activities', name: 'activities', component: ActivitiesView },

    {
      path: '/activities/:slug',
      name: 'activity',
      component: ActivityView,
      props: true,
    },

    { path: '/privacy-policy', name: 'privacy-policy', component: PrivacyView },
    { path: '/terms', name: 'terms', component: TermsView },
    { path: '/cookie', name: 'cookie', component: CookieView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/contact', name: 'contact', component: ContactView },
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

export default router
