import { createRouter, createWebHistory } from "vue-router";
import ErrorPage from  "../pages/ErrorPage.vue"

export default createRouter({
    history : createWebHistory(),
    routes : [
      {
        path:'/',
        name:'search-page',
        component:( ) => import( "../pages/HomePage.vue")
      },
      {
        path:'/movies',
        name:'movies',
        component:( ) => import( "../pages/MoviesPage.vue")
      },
      {
        path:'/movies/:id',
        name: 'movie',
        component: ( ) => import( "../pages/Movie.vue"),
        props:true
      },
      {
        path:'/user-movie',
        name: 'user-movies',
        component: () => import("../pages/UserMoviePage.vue")
      },
      {
        path:'/:catchAll(.*)',
        name:'Error',
        component: ErrorPage
      }
    ]
});