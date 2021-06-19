<template>
  <div>
    <Picker
      :colors="colors"
      :value="tlColor"
      open="top-16 left-0"
      position="absolute top-4 left-4"
      target="tlColor"
      @action="emitColor"
    />

    <Picker
      :colors="colors"
      :value="trColor"
      open="top-16 right-0"
      position="absolute top-4 right-4"
      target="trColor"
      @action="emitColor"
    />

    <Picker
      :colors="colors"
      :value="blColor"
      open="bottom-16 left-0"
      position="absolute bottom-4 left-4"
      target="blColor"
      @action="emitColor"
    />

    <Picker
      :colors="colors"
      :value="brColor"
      open="bottom-16 right-0"
      position="absolute bottom-4 right-4"
      target="brColor"
      @action="emitColor"
    />
  </div>
</template>

<script>
import Picker from '@/components/Picker'

import { colors } from '@/data/colors'

export default {
  components: {
    Picker
  },
  props: {
    tlColor: String,
    trColor: String,
    blColor: String,
    brColor: String,
  },
  data() {
    return {
      colors,
    }
  },
  methods: {
    emitColor(target, color) {
      this.$emit('action', target, color)
    }
  }
}
</script>