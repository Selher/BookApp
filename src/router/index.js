import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TBRView from '../views/TBRView.vue'
import ReadView from '../views/ReadView.vue'
import BookshelfView from '../views/BookshelfView.vue'
import { getAuth } from 'firebase/auth'


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
      component: TBRView,
      meta: { requiresAuth:true, allowEmail: 'admin@admin.com' }
    },

    {
      path: '/read',
      name: 'read',

      component: ReadView,
      meta: { requiresAuth:true, allowEmail: 'admin@admin.com'}
    },
    {
      path: '/bookshelf',
      name: 'bookshelf',
      component: BookshelfView,
      meta: { requiresAuth:true, }
    }
  ]
})

// Router guard that checks email and auth status
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    const user = auth.currentUser;

    if (user) {
      // Hvis ruten kræver en bestemt e-mail, tjekker vi den
      const allowEmail = to.meta.allowEmail;
      if (allowEmail && user.email !== allowEmail) {
        next('/'); // hvis user doesn't have the correct email send them to the home page
      } else {
        next(); // user is logged in and has the correct email send them to their destination
      }
    } else {
      next('/'); // if user is not logged in send them to the home page
    }
  } else {
    next(); // route does not require auth send them to their destination
  }
});

export default router
