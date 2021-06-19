<template>
  <div
    id="app"
    class="h-screen overflow-scroll scroll-snap"
  >
    <Canvas
      v-for="gradient of gradients"
      :key="gradient.name"
      :top-left="gradient.topLeft"
      :top-right="gradient.topRight"
      :bottom-left="gradient.bottomLeft"
      :bottom-right="gradient.bottomRight"
      :name="gradient.name"
      class="scroll-snap-child"
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

<style scoped>
.scroll-snap {
  scroll-snap-type: y mandatory;
  scroll-snap-points-y: repeat(100vh);
}

.scroll-snap-child {
  scroll-snap-align: start;
}
</style>

<style>
button, input {
  @apply focus:outline-none focus:ring focus:ring-pink-600;
}
</style>