<template>
  <div @click.stop="">
    <img :src="require(`@/assets/${images[index]}`)" class="" />
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
<style></style>
