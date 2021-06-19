<template>
  <div>
    <span
      ref="topLeft"
      :class="tlColor"
    />
    <span
      ref="topRight"
      :class="trColor"
    />
    <span
      ref="bottomLeft"
      :class="blColor"
    />
    <span
      ref="bottomRight"
      :class="brColor"
    />
  </div>
</template>

<script>
export default {
  props: {
    tlColor: String,
    trColor: String,
    blColor: String,
    brColor: String,
  }
}
</script>