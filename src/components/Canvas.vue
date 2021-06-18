<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <h2
        class="text-5xl font-bold text-white text-opacity-50"
        v-text="name"
      />
    </div>

    <div class="absolute inset-x-0 bottom-4">
      <div>
        <select
          v-model="tl"
          @change="redraw"
        >
          <option
            v-for="item of colors"
            :key="item"
          >
            {{ item }}
          </option>
        </select>
      </div>

      <div>
        <select
          v-model="tr"
          @change="redraw"
        >
          <option
            v-for="item of colors"
            :key="item"
          >
            {{ item }}
          </option>
        </select>
      </div>

      <div>
        <select
          v-model="bl"
          @change="redraw"
        >
          <option
            v-for="item of colors"
            :key="item"
          >
            {{ item }}
          </option>
        </select>
      </div>

      <div>
        <select
          v-model="br"
          @change="redraw"
        >
          <option
            v-for="item of colors"
            :key="item"
          >
            {{ item }}
          </option>
        </select>
      </div>
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

export default {
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

      const topRight = ctx.createRadialGradient(0, height, 1, 0, height, height)
      topRight.addColorStop(0, topRightColor)
      topRight.addColorStop(1, this.rgba(topRightColor))

      const bottomLeft = ctx.createRadialGradient(width, 0, 1, height, 0, height)
      bottomLeft.addColorStop(0, bottomLeftColor)
      bottomLeft.addColorStop(1, this.rgba(bottomLeftColor))

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