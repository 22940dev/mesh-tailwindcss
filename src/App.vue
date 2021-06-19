<template>
  <div id="app">
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
</template>

<script>
import { gradients } from '@/data/gradients'

import Canvas from './components/Canvas'

export default {
  name: 'App',
  components: {
    Canvas
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