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
      <!-- x icon... needs to be moved to top right -->
      <div class="absolute top-0 right-0 text-white cursor-pointer text-4xl p-1 mr-2" @click.stop="hide">&times;</div>
      <!-- x icon -->

      <div class="flex">
        <!-- previous image icon -->
        <div class="cursor-pointer self-center px-8" @click.stop="prev" :class="{ invisible: !hasPrev() }">
          <svg
            class="pointer-events-none"
            fill="#fff"
            height="48"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
            <path d="M0-.5h24v24H0z" fill="none" />
          </svg>
        </div>
        <!-- previous image icon -->

        <LightboxImage :images="images" :index="index" />

        <!-- next image icon -->
        <div class="cursor-pointer self-center px-8" @click.stop="next" :class="{ invisible: !hasNext() }">
          <svg
            class="pointer-events-none"
            fill="#fff"
            height="48"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
            <path d="M0-.25h24v24H0z" fill="none" />
          </svg>
        </div>
        <!-- next image icon -->
      </div>
    </div>
  </div>
</template>

<script>
import LightboxImage from "./LightboxImage.vue";
export default {
  props: {
    images: {
      type: Array,
    },
  },
  components: {
    LightboxImage,
  },
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
