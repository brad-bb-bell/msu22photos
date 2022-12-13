<template>
  <div>
    <h1>MSU 2022 Photos of the Year</h1>
  </div>

  <div>
    <a href="#" class="w-full">
      <div class="container grid grid-cols-3 gap-2 mx-auto">
        <div v-for="(image, index) in images" :key="index">
          <div class="w-72">
            <img @click.prevent="show(index)" :src="require(`@/assets/${image}`)" />
          </div>
        </div>
      </div>
    </a>

    <!-- lightbox -->
    <div
      class="lightbox absolute top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center"
      v-if="visible"
      @click="hide"
    >
      <!-- close -->
      <div class="absolute top-0 right-0 text-white cursor-pointer text-4xl p-1 mr-2" @click.stop="hide">
        <div class="w-12 h-12 bg-black flex justify-center rounded-full">&times;</div>
      </div>
      <!-- close -->

      <!-- prev -->
      <div
        class="absolute left-0 cursor-pointer self-center px-8"
        @click.stop="prev"
        :class="{ invisible: !hasPrev() }"
      >
        <div class="w-12 h-12 bg-black flex justify-center rounded-full">
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
      </div>
      <!-- prev -->

      <div @click.stop="">
        <img :src="require(`@/assets/${images[index]}`)" class="" />
      </div>

      <!-- next -->
      <div
        class="absolute right-0 cursor-pointer self-center px-8"
        @click.stop="next"
        :class="{ invisible: !hasNext() }"
      >
        <div class="w-12 h-12 bg-black flex justify-center rounded-full">
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
      </div>
      <!-- next -->
    </div>
    <!-- lightbox -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      visible: false,
      index: 0,
      images: [
        "image-one.jpg",
        "image-two.jpg",
        "image-three.jpeg",
        "image-four.jpg",
        "image-five.jpg",
        "image-six.jpg",
        "image-seven.jpg",
      ],
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
