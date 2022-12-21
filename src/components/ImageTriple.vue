<template>
  <div class="grid gap-0 md:gap-2 grid-cols-1 md:grid-cols-3">
    <ImageBase :image="imageLeft" @show="$emit('show', indexLeft)" />
    <ImageBase :image="imageCenter" @show="$emit('show', indexCenter)" />
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
    imageCenter: String,
    imageRight: String,
    indexLeft: Number,
    indexCenter: Number,
    indexRight: Number,
  },
};
</script>
