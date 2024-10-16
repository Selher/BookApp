import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { onAuthStateChanged, getAuth } from 'firebase/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tbr',
      name: 'tbr',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TBRView.vue'),
      /* meta: { requiresAuth:true } */
    },

    {
      path: '/read',
      name: 'read',

      component: () => import('../views/ReadView.vue'),
     /*  meta: { requiresAuth:true } */
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if(requiresAuth) {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        next();
      }
      else {
        next('/');
      }
    }) 
  }
  else {
    next();
  } 
}
)

export default router
