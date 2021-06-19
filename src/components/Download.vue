<template>
  <div class="absolute transform -translate-x-1/2 left-1/2 bottom-4">
    <button
      type="button"
      class="flex items-center p-4 text-white bg-white bg-opacity-25 shadow-sm rounded-xl"
      @click="fireAction"
    >
      <span class="text-sm font-medium">
        Save as Image
      </span>

      <span class="ml-3">
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
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    fireAction() {
      this.$emit('action')
    }
  }
}
</script>