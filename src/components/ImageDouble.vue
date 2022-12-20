<template>
  <div class="grid gap-2 grid-cols-2 w-full h-full">
    <v-lazy-image @click.prevent="show(index)" :src="require(`@/assets/images/${image1}`)" />
    <v-lazy-image @click.prevent="show(index)" :src="require(`@/assets/images/${image2}`)" />
  </div>
</template>
<script>
import VLazyImage from "v-lazy-image";
export default {
  components: {
    VLazyImage,
  },
  props: {
    image1: String,
    image2: String,
  },
};
</script>
