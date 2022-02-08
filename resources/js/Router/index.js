import { createWebHistory, createRouter } from "vue-router";
import routes from "./routes";

const router = createRouter({
    history: createWebHistory(),
    routes
});

/*router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/home','/login','/register','/'];
    if(publicPages.includes(to.path)){
      next();
    }
    else
    {
      const authRequired = !publicPages.includes(to.path);
      if(!(JSON.parse(localStorage.getItem('vuex')))){
        return next('/login');
      }
      
      const loggedIn = (JSON.parse(localStorage.getItem('vuex'))).user;   

      if (authRequired && !loggedIn) {
        return next('/login'); //verificar no back end se o token é valido ainda
      }
      next();
    }    
});*/

export default router;