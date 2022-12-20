<template>
  <v-lazy-image class="w-full mb-2" @click.prevent="$emit('show')" :src="require(`@/assets/images/${image}`)" />
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
