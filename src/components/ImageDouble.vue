<template>
  <div class="grid gap-2 grid-cols-2">
    <ImageBase :image="imageLeft" @show="$emit('show', indexLeft)" />
    <ImageBase :image="imageRight" @show="$emit('show', indexRight)" />
  </div>
</template>
<script>
import ImageBase from "./ImageBase.vue";
export default {
  components: {
    ImageBase,
  },
  props: {
    imageLeft: String,
    imageRight: String,
    indexLeft: Number,
    indexRight: Number,
  },
};
</script>
