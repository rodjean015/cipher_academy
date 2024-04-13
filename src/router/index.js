import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '@/views/Students/View.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '@/views/AboutView.vue'
import StudentCreate from '@/views/Students/Create.vue'
import StudentEdit from '@/views/Students/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/students/view',
      name: 'studentView',
      component: StudentView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/students/create',
      name: 'studentCreate',
      component: StudentCreate
    },
    {
      path: '/students/:id/edit',
      name: 'studentEdit',
      component: StudentEdit
    },
  ]
})

export default router
