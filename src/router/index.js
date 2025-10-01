import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationsView from '@/views/DestinationsView.vue'
import ActivitiesView from '@/views/ActivitiesView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import TermsView from '@/views/TermsView.vue'
import CookieView from '@/views/CookieView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/destinations',
      name: 'destinations',
      component: DestinationsView
    },
    {
      path: '/activities',
      name: 'activities',
      component: ActivitiesView
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyView
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsView
    },
    {
      path: '/cookie',
      name: 'cookie',
      component: CookieView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
