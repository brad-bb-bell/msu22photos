<template>
  <div>
    <a href="#" class="w-full">
      <div v-for="(image, index) in images" :key="index">
        <img @click.prevent="show(index)" class="w-64" :src="require(`@/assets/${image}`)" />
      </div>
    </a>

    <div
      class="lightbox absolute top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center"
      v-if="visible"
      @click="hide"
    >
      <CloseIcon @hide="hide" />
      <div class="flex">
        <PreviousIcon :index="index" @prev="prev" />
        <LightboxImage :images="images" :index="index" />
        <NextIcon :index="index" :length="this.images.length" @next="next" />
      </div>
    </div>
  </div>
</template>

<script>
import LightboxImage from "./LightboxImage.vue";
import CloseIcon from "./CloseIcon.vue";
import PreviousIcon from "./PreviousIcon.vue";
import NextIcon from "./NextIcon.vue";
export default {
  props: {
    images: {
      type: Array,
    },
  },
  components: {
    LightboxImage,
    CloseIcon,
    PreviousIcon,
    NextIcon,
  },
  emits: ["hide"],
  data() {
    return {
      visible: false,
      index: 0,
    };
  },
  methods: {
    show(index) {
      this.index = index;
      this.visible = true;
    },
    hide() {
      this.visible = false;
      this.index = 0;
    },
    hasNext() {
      return this.index + 1 < this.images.length;
    },
    hasPrev() {
      return this.index - 1 >= 0;
    },
    next() {
      if (this.hasNext()) {
        this.index += 1;
      }
    },
    prev() {
      if (this.hasPrev()) {
        this.index -= 1;
      }
    },
    onKeydown(e) {
      if (this.visible) {
        switch (e.key) {
          case "ArrowRight":
            this.next();
            break;
          case "ArrowLeft":
            this.prev();
            break;
          case "ArrowDown":
          case "ArrowUp":
          case " ":
            e.preventDefault();
            break;
          case "Escape":
            this.hide();
            break;
        }
      }
    },
  },
  mounted() {
    window.addEventListener("keydown", this.onKeydown);
  },
  unmounted() {
    window.removeEventListener("keydown", this.onKeydown);
  },
};
</script>
<style>
.lightbox {
  background: rgba(0, 0, 0, 0.8);
}
</style>
