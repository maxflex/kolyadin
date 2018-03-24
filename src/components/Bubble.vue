<template lang="html">
  <div class="bubble-wrapper">
    <svg class='avg-svg' height="66" width="66">
      <circle cx="33" cy="33" r="30" stroke="black" stroke-width="3" fill="#D1DFEA"></circle>
		</svg>
    <div class="bubble">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style lang="css">
</style>
