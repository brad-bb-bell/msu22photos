<template>
  <div class="grid-cols-1 w-full h-full">
    <v-lazy-image class="" @click.prevent="show(index)" :src="require(`@/assets/images/${image}`)" />
  </div>
</template>
<script>
import VLazyImage from "v-lazy-image";
export default {
  components: {
    VLazyImage,
  },
  props: {
    image: String,
  },
};
</script>
