<template>
  <div class="relative">
    <Controls
      :tl-color="tlColor"
      :tr-color="trColor"
      :bl-color="blColor"
      :br-color="brColor"
      @action="handleColor"
    />

    <Download @action="handleDownload" />

    <Colors
      ref="colors"
      :tl-color="tlColor"
      :tr-color="trColor"
      :bl-color="blColor"
      :br-color="brColor"
    />

    <div class="h-screen">
      <canvas ref="canvas" />
    </div>
  </div>
</template>

<script>
import Colors from '@/components/Colors'
import Controls from '@/components/Controls'
import Download from '@/components/Download'

import { getColor, getRGBA } from '@/utils/colors'

export default {
  components: {
    Controls,
    Download,
    Colors,
  },
  props: {
    name: String,
    topLeft: String,
    topRight: String,
    bottomLeft: String,
    bottomRight: String,
  },
  data() {
    return {
      tlColor: this.topLeft,
      trColor: this.topRight,
      blColor: this.bottomLeft,
      brColor: this.bottomRight,
      width: '',
      height: ''
    }
  },
  mounted() {
    const canvas = this.$refs.canvas

    this.width = window.innerWidth
    this.height = window.innerHeight

    canvas.width = this.width
    canvas.height = this.height

    this.draw()
  },
  methods: {
    handleDownload() {
      const link = document.createElement('a')

      link.download = `Hypermesh - ${this.name}.png`
      link.href = this.$refs.canvas.toDataURL()
      link.click()
    },
    handleColor(target, value) {
      this[target] = value
      this.redraw()
    },
    draw() {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      const height = this.height
      const width = this.width
      const colors = this.$refs.colors
      const tlColor = getColor(colors.$refs.topLeft)
      const trColor = getColor(colors.$refs.topRight)
      const blColor = getColor(colors.$refs.bottomLeft)
      const brColor = getColor(colors.$refs.bottomRight)

      const topLeft = ctx.createRadialGradient(0, 0, 1, 0, 0, height)
      topLeft.addColorStop(0, tlColor)
      topLeft.addColorStop(1, getRGBA(tlColor))

      const bottomLeft = ctx.createRadialGradient(0, height, 1, 0, height, height)
      bottomLeft.addColorStop(0, blColor)
      bottomLeft.addColorStop(1, getRGBA(blColor))

      const topRight = ctx.createRadialGradient(width, 0, 1, height, 0, height)
      topRight.addColorStop(0, trColor)
      topRight.addColorStop(1, getRGBA(trColor))

      const bottomRight = ctx.createRadialGradient(width, height, 1, height, height, width)
      bottomRight.addColorStop(0, brColor)
      bottomRight.addColorStop(1, getRGBA(brColor))

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