// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({


css: ['~/assets/main.css'], 

  modules: [
      ['@nuxtjs/google-fonts', {
        families: {
          Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          download: true,
          inject: true
        }
      }]
    ],
    
   


  app:{
      // pageTransition: { name: 'page', mode: 'in-out' },
      
      head:{
        htmlAttrs: {
          lang: 'nl',
        },
          title: 'Rocketsourcers',
          link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
          ],

          meta:[
            {name: 'ahrefs-site-verification', content: 'c3822cb0a940488dccc312b18c286c9b24653dcaf5432030ea7ccd73dc41ddd1'}
          ],
          // script: [
          //   {
          //     src: "https://assets.calendly.com/assets/external/widget.js",
          //     type: "text/javascript",
          //     defer: true
          //   },
          // ],
      }
  },
  

  ssr: true,


})
