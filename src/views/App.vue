<template>
  <div class="relative">
    <img class="w-full" style="opacity: 0.6" :src="require(`@/assets/${images[2]}`)" />
    <div
      class="absolute inset-0 flex items-center justify-center text-center text-4xl font-serif font-bold text-blue-900 tracking-wider"
    >
      Montana State University
      <br />
      2022 Photos of the Year
    </div>
  </div>

  <div>
    <a href="#">
      <div class="container">
        <div class="grid">
          <div v-for="(image, index) in images" :key="index">
            <v-lazy-image class="w-full h-full" @click.prevent="show(index)" :src="require(`@/assets/${image}`)" />
          </div>
        </div>
      </div>
    </a>

    <Teleport to="body">
      <TheLightbox :images="images" :index="index" v-if="visible" @close="hide()"></TheLightbox>
    </Teleport>
  </div>
</template>

<script>
import TheLightbox from "../components/TheLightbox.vue";
import VLazyImage from "v-lazy-image";

export default {
  components: {
    TheLightbox,
    VLazyImage,
  },
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
        "image-eight.jpg",
        "image-nine.jpeg",
        "image-ten.jpg",
        "image-eleven.jpg",
        "image-twelve.jpg",
        "image-thirteen.jpeg",
        "image-fourteen.jpg",
        "image-fifteen.jpg",
        "image-sixteen.jpg",
        "image-seventeen.jpg",
        "image-eighteen.jpg",
        "image-nineteen.jpg",
        "image-twenty.jpg",
        "image-twentyone.jpeg",
        "image-twentytwo.jpg",
        "image-twentythree.jpg",
        "image-twentyfour.jpeg",
        "image-twentyfive.jpg",
        "image-twentysix.jpg",
        "image-twentyseven.jpg",
        "image-twentyeight.jpg",
        "image-twentynine.jpg",
        "image-thirty.jpeg",
        "image-thirtyone.jpg",
        "image-thirtytwo.jpg",
        "image-thirtythree.jpeg",
        "image-thirtyfour.jpg",
        "image-thirtyfive.jpeg",
        "image-thirtysix.jpg",
        "image-thirtyseven.jpg",
        "image-thirtyeight.jpg",
        "image-thirtynine.jpg",
        "image-forty.jpg",
        "image-fortyone.jpg",
        "image-fortytwo.jpg",
      ],
    };
  },
  methods: {
    show(index) {
      this.index = index;
      this.visible = true;
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    },
    hide() {
      this.visible = false;
      document.getElementsByTagName("body")[0].style.overflow = "auto";
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
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
}
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.3s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
