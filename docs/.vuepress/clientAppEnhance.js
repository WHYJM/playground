import { defineClientAppEnhance } from '@vuepress/client'
import HelloWorld from './../../src/components/HelloWorld.vue'
import Test from './../../src/components/Test.vue'


export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('HelloWorld', HelloWorld)
  app.component('Test', Test)
})