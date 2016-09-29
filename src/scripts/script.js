

// For 404 page
var notFound = Vue.extend({
   // You can use also use template path (Thanks to @jcerdan)
   // path : '/path/to/component.html'
   template: '<h1>Not Found</h1>'
})

// Root page
var homeComponent = Vue.extend({
    template: 

            '<a v-link="{ path: \'/subroute\' }" class="btn btn-lg btn-primary" role="button">View SubRoute</a>' +
            // To show nested subroute
            '<router-view></router-view>'
})

// About page
var aboutComponent = Vue.extend({
   template: 
            '<div class="jumbotron">' +
            '<h1>About</h1>' +
            '<p>This is about page</p>' +
            '<p>' +
            '<a v-link="{ path: \'/\' }" class="btn btn-lg btn-primary" role="button">Home</a>' +
            '</p>' +
            '</div>' +
            '<router-view></router-view>'
})

// Subroute
var subRouteContent = Vue.extend({
   template: 
               '<h1>subroute example</h1>'
})

// Contact page
var contactComponent = Vue.extend({
   template: 
            '<div class="jumbotron">' +
            '<h1>Contact</h1>' +
            '<p>This is contact page</p>' +
            '</div>'
})

// Tell Vue to use view-router
Vue.use(VueRouter)


var router = new VueRouter({
   history: false,
   root: '/'
})

router.map({
   '*': {
      component: notFound
   },

   '/': {
      component: dashboardComponent,
      
      subRoutes: {
      '/subroute': {
           component: subRouteContent
         }
      }
   },

   '/about': {
      component: aboutComponent,
      subRoutes: {
          
      '/subroute': {
           component: subRouteContent
         }
      }
   },

   '/contact': {
      component: contactComponent
   }
});

var App = Vue.extend()

router.start(App, '#app')