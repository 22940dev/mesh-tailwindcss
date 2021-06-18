<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center justify-center">
      <h2
        class="text-white text-opacity-50 font-bold text-5xl"
        v-text="name"
      />
    </div>

    <span
      ref="topLeft"
      :class="topLeft"
    />
    <span
      ref="topRight"
      :class="topRight"
    />
    <span
      ref="bottomLeft"
      :class="bottomLeft"
    />
    <span
      ref="bottomRight"
      :class="bottomRight"
    />
    <div class="h-screen">
      <canvas ref="canvas" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topLeft: String,
    topRight: String,
    bottomLeft: String,
    bottomRight: String,
    name: String
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
  }
}
</script>