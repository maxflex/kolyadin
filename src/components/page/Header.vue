<template>
  <header :style="{backgroundImage: 'url(/static/img/patterns/' + bgShape + '.png)'}">
    <span class='animated fadeIn'>
      Колядин <span class="color-pink">Массим</span>
    </span>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        bgShape: 'circle'
      }
    },
    mounted() {
      this.bgShape = Math.round(Math.random()) ? 'circle' : 'square'
    }
  }
</script>
