// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
   // Add a meta tag
   head.meta.push({
    name: 'keywords',
    content: 'HTML,CSS,JavaScript,Agile,Startups,Innovation,Creative Technologist,Design Technologist'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}