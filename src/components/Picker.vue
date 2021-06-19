<template>
  <div
    class="absolute"
    :class="position"
  >
    <div
      v-if="show"
      v-click-outside="hide"
      class="absolute w-64 h-64 overflow-y-auto bg-white rounded-lg shadow-lg"
      :class="open"
    >
      <input
        ref="input"
        v-model="search"
        type="text"
        class="w-full p-3 border-b border-gray-100"
        placeholder="Search for a color"
      >

      <ul>
        <li
          v-for="color of twColors"
          :key="color"
        >
          <button
            type="button"
            class="flex items-center w-full px-4 py-2 bg-white rounded-full shadow-sm"
            @click="fireAction(color)"
          >
            <span
              class="w-6 h-6 rounded-full"
              :class="color"
            />

            <span class="ml-3 text-sm font-medium text-gray-600">{{ color }}</span>
          </button>
        </li>
      </ul>
    </div>

    <button
      type="button"
      class="flex items-center px-4 py-2 bg-white rounded-full"
      @click="view"
    >
      <span
        class="w-6 h-6 rounded-full"
        :class="value"
      />

      <span class="ml-3 text-sm font-medium text-gray-600">{{ value }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    colors: Array,
    open: String,
    position: String,
    target: String,
    value: String,
  },
  data() {
    return {
      show: false,
      search: ''
    }
  },
  computed: {
    twColors() {
      if(!this.search) return this.colors

      return this.colors.filter((color) => color.includes(this.search))
    }
  },
  methods: {
    fireAction(color) {
      this.$emit('action', this.target, color)
    },
    hide() {
      this.show = false
      this.search = ''
    },
    view() {
      this.show = true
      this.$nextTick(() => this.$refs.input.focus())
    }
  }
}
</script>