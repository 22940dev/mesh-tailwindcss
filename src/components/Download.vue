<template>
  <button
    type="button"
    class="absolute px-4 py-2 text-sm font-medium text-gray-600 transform -translate-x-1/2 bg-white rounded-full shadow-sm left-1/2 bottom-4"
    @click="fireAction"
  >
    Download
  </button>
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