//import {createRouter, createWebHistory} from 'vue-router'
//import Vue from 'https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.esm.browser.min.js'

/* import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import ForgotView from '../views/ForgotView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'
import RegView from '../views/RegView.vue'
import VerifyView from '../views/VerifyView.vue'
import LogoutView from '../views/LogoutView.vue'
import SuccessfulRegistrationView from '../views/SuccessfulRegistrationView.vue'
import SuccessfulForgotView from "../views/SuccessfulForgotView";
import ProgramsView from '../views/ProgramsView.vue'
import ProgramsAdministrationView from '../views/programs/AdministrationView.vue'
import ProgramsEconomyView from '../views/programs/EconomyView.vue'
import ProgramsManagementView from '../views/programs/ManagementView.vue'
import ProgramsPoliticsView from '../views/programs/PoliticsView.vue'
import TransferView from '../views/TransferView.vue'
import TransferStep1View from '../views/TransferStep1View.vue'
import TransferStep2View from '../views/TransferStep2View.vue'
import TransferStep3View from '../views/TransferStep3View.vue'
import PersonalRequest121530 from '../views/PersonalRequest-121530.vue'
import PersonalRequest121531 from '../views/PersonalRequest-121531.vue'
import PersonalRequest121532 from '../views/PersonalRequest-121532.vue'
import PersonalView from '../views/PersonalView.vue'
import FavouritesView from '../views/FavouritesView.vue'
import RequestView from '../views/RequestView.vue'
import RequestByIdView from '../views/RequestByIdView.vue'
 */



//Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/auth',
    name: 'auth',
    meta: { hideHeader: true, hideFooter: true },
    component: AuthView,
  }, {
    path: '/reg',
    name: 'reg',
    meta: { hideHeader: true, hideFooter: true },
    component: RegView,
  }, {
    path: '/verify-user',
    name: 'verify-user',
    meta: { hideHeader: true, hideFooter: true },
    component: VerifyView,
  }, {
    path: '/logout',
    name: 'logout',
    meta: { hideHeader: true, hideFooter: true },
    component: LogoutView,
  }, {
    path: '/successful',
    name: 'successful',
    meta: { hideHeader: true, hideFooter: true },
    component: SuccessfulRegistrationView,
  }, {
    path: '/forgot-successful',
    name: 'forgot-successful',
    meta: { hideHeader: true, hideFooter: true },
    component: SuccessfulForgotView,
  }, {
    path: '/forgot',
    name: 'forgot',
    meta: { hideHeader: true, hideFooter: true },
    component: ForgotView,
  }, {
    path: '/reset-password',
    name: 'reset-password',
    meta: { hideHeader: true, hideFooter: true },
    component: ResetPasswordView,
  }, {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, {
    path: '/programs',
    name: 'programs',
    component: ProgramsView,
  }, {
    path: '/programs/administration',
    name: 'programsAdministration',
    component: ProgramsAdministrationView,
  }, {
    path: '/programs/economy',
    name: 'programsEconomy',
    component: ProgramsEconomyView,
  }, {
    path: '/programs/management',
    name: 'programsManagement',
    component: ProgramsManagementView,
  }, {
    path: '/programs/politics',
    name: 'programsPolitics',
    component: ProgramsPoliticsView,
  }, {
    path: '/transfer',
    name: 'transfer',
    component: TransferView,
  }, {
    path: '/transfer-step-1',
    name: 'transfer-step-1',
    component: TransferStep1View,
  }, {
    path: '/transfer-step-2',
    name: 'transfer-step-2',
    component: TransferStep2View,
  }, {
    path: '/transfer-step-3',
    name: 'transfer-step-3',
    component: TransferStep3View,
  }, {
    path: '/personal',
    name: 'personal',
    component: PersonalView,
  }, {
    path: '/personal/favourites',
    name: 'favourites',
    component: FavouritesView,
  }, {
    path: '/personal/request',
    name: 'request',
    component: RequestView,
  }, {
    path: '/personal/request/:id/:prg_id',
    name: 'request-by-id',
    component: RequestByIdView,
  }, {
    path: '/personal/request-121530',
    name: 'request-121530',
    component: PersonalRequest121530,
  }, {
    path: '/personal/request-121531',
    name: 'request-121531',
    component: PersonalRequest121531,
  }, {
    path: '/personal/request-121532',
    name: 'request-121532',
    component: PersonalRequest121532,
  }
]

const router = new VueRouter({
  // scroll to top
  scrollBehavior: function (to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      window.scrollTo(0, 0);
    }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
