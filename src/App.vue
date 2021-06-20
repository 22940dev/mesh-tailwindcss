<template>
  <div id="app">
    <Banner />
    <div class="space-y-1">
      <Canvas
        v-for="gradient of gradients"
        :key="gradient.name"
        :top-left="gradient.topLeft"
        :top-right="gradient.topRight"
        :bottom-left="gradient.bottomLeft"
        :bottom-right="gradient.bottomRight"
        :name="gradient.name"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Canvas from '@/components/Canvas'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'

import { gradients } from '@/data/gradients'

export default {
  name: 'App',
  components: {
    Canvas,
    Banner,
    Footer
  },
  data() {
    return {
      gradients
    }
  },
}
</script>

<style>
html a:focus,
html input:focus,
html button:focus {
  @apply outline-none ring ring-pink-600;
}
</style>