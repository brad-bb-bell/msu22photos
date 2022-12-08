<template>
  <div @click.stop="">
    <img :src="require(`@/assets/${images[index]}`)" />
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
    index: Number,
  },
};
</script>
<style>
.lightbox-image img {
  width: 100%;
  max-width: 100%;
}
</style>
