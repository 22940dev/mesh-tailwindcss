<template>
  <div
    class="absolute"
    :class="position"
  >
    <div
      v-if="show"
      v-click-outside="hide"
      class="absolute w-64 h-64 p-4 overflow-y-auto bg-white bg-opacity-25 shadow-sm rounded-xl"
      :class="open"
    >
      <input
        ref="input"
        v-model="search"
        type="text"
        class="w-full p-4 text-sm font-medium text-white placeholder-white bg-white bg-opacity-25 rounded-lg shadow-sm"
        placeholder="Search for a color"
      >

      <ul class="grid grid-cols-8 gap-2 mt-4">
        <li
          v-for="color of twColors"
          :key="color"
        >
          <button
            type="button"
            :class="color"
            class="w-6 h-6 rounded-md"
            @click="fireAction(color)"
          />
        </li>
      </ul>
    </div>

    <button
      type="button"
      class="flex items-center p-4 space-x-4 text-white bg-white bg-opacity-25 rounded-xl"
      @click="view"
    >
      <span
        class="w-6 h-6 rounded-md"
        :class="value"
      />

      <span
        class="text-sm font-medium"
        v-text="name"
      />

      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
          />
        </svg>
      </span>
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
    },
    name() {
      return this.value.replace('bg-', '')
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
    }
  }
}
</script>