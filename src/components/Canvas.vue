<template>
  <div class="relative">
    <div class="absolute top-4 left-4">
      <Select
        position="tl"
        :value="tl"
        :colors="colors"
        open="top-12 left-0"
        @action="handleColorChange"
      />
    </div>

    <div class="absolute top-4 right-4">
      <Select
        position="tr"
        :value="tr"
        :colors="colors"
        open="top-12 right-0"
        @action="handleColorChange"
      />
    </div>

    <div class="absolute bottom-4 left-4">
      <Select
        position="bl"
        :value="bl"
        :colors="colors"
        open="bottom-12 left-0"
        @action="handleColorChange"
      />
    </div>

    <div class="absolute bottom-4 right-4">
      <Select
        position="br"
        :value="br"
        :colors="colors"
        open="bottom-12 right-0"
        @action="handleColorChange"
      />
    </div>

    <span
      ref="topLeft"
      :class="tl"
    />
    <span
      ref="topRight"
      :class="tr"
    />
    <span
      ref="bottomLeft"
      :class="bl"
    />
    <span
      ref="bottomRight"
      :class="br"
    />

    <div class="h-screen">
      <canvas ref="canvas" />
    </div>
  </div>
</template>

<script>
import { colors } from '@/data/colors'

import Select from '@/components/Select'

export default {
  components: {
    Select,
  },
  props: {
    topLeft: String,
    topRight: String,
    bottomLeft: String,
    bottomRight: String,
    name: String
  },
  data() {
    return {
      colors,
      tl: this.topLeft,
      tr: this.topRight,
      bl: this.bottomLeft,
      br: this.bottomRight
    }
  },
  mounted() {
    this.draw()
  },
  methods: {
    handleColorChange(position, value) {
      this[position] = value
      this.redraw()
    },
    color(el) {
      return getComputedStyle(el).getPropertyValue('background-color')
    },
    rgba(color) {
      return color.replace('rgb', 'rgba').replace(')', ', 0)')
    },
    draw() {
      let canvas = this.$refs.canvas
      let ctx = canvas.getContext('2d')

      let [width, height] = [window.innerWidth, window.innerHeight]

      canvas.width = width
      canvas.height = height

      let topLeftColor = this.color(this.$refs.topLeft)
      let topRightColor = this.color(this.$refs.topRight)
      let bottomLeftColor = this.color(this.$refs.bottomLeft)
      let bottomRightColor = this.color(this.$refs.bottomRight)

      const topLeft = ctx.createRadialGradient(0, 0, 1, 0, 0, height)
      topLeft.addColorStop(0, topLeftColor)
      topLeft.addColorStop(1, this.rgba(topLeftColor))

      const bottomLeft = ctx.createRadialGradient(0, height, 1, 0, height, height)
      bottomLeft.addColorStop(0, bottomLeftColor)
      bottomLeft.addColorStop(1, this.rgba(bottomLeftColor))

      const topRight = ctx.createRadialGradient(width, 0, 1, height, 0, height)
      topRight.addColorStop(0, topRightColor)
      topRight.addColorStop(1, this.rgba(topRightColor))

      const bottomRight = ctx.createRadialGradient(width, height, 1, height, height, width)
      bottomRight.addColorStop(0, bottomRightColor)
      bottomRight.addColorStop(1, this.rgba(bottomRightColor))

      ctx.fillStyle = bottomRight
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = bottomLeft
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = topRight
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = topLeft
      ctx.fillRect(0, 0, width, height)
    },
    redraw() {
      this.$nextTick(() => this.draw())
    }
  }
}
</script>