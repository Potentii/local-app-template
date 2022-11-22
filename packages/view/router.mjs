import {createRouter, createWebHashHistory} from 'vue-router';

// *Getting the app's sections:
import AppSection from './v-app-section.vue';


// const routerHistory = createWebHistory();
const routerHistory = createWebHashHistory();


// *Building the router:
const router = createRouter({

   history: routerHistory,

	strict: false,

   routes: [
      {
         path: '/',
         component: AppSection,
         children: [

			]
      }
   ]
});


export default router;
