<template>
  <div class="relative">
    <img class="w-full" style="opacity: 0.6" :src="require(`@/assets/images/scenic/${images[16]}`)" />
    <div
      class="absolute inset-0 flex items-center justify-center text-center text-4xl font-serif font-bold text-[#002a61] tracking-wider"
    >
      Montana State University
      <br />
      2022 Photos of the Year
    </div>
  </div>

  <div>
    <a href="#">
      <div class="container w-4/5 p-4 ml-auto mr-auto">
        <div class="grid">
          <div v-for="(image, index) in images" :key="index">
            <v-lazy-image class="w-full h-full" @click.prevent="show(index)" :src="require(`@/assets/${image}`)" />
          </div>
        </div>
      </div>
    </a>

    <Teleport to="body">
      <TheLightbox :images="images" :index="index" v-if="visible" @close="hide()" />
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
      academicImages: [
        "image-eighteen.jpg",
        "image-nine.jpeg",
        "image-one.jpg",
        "image-ten.jpg",
        "image-thirteen.jpeg",
        "image-thirty.jpeg",
        "image-thirtyfive.jpeg",
        "image-thirtythree.jpeg",
        "image-twelve.jpg",
      ],
      campusImages: [
        "image-fifteen.jpg",
        "image-forty.jpg",
        "image-fourteen.jpg",
        "image-six.jpg",
        "image-thirtyfour.jpg",
        "image-thirtynine.jpg",
        "image-thirtyseven.jpg",
        "image-twenty.jpg",
        "image-twentynine.jpg",
        "image-twentyone.jpeg",
        "image-twentytwo.jpg",
        "image-two.jpg",
      ],
      scenicImages: [
        "image-eight.jpg",
        "image-eleven.jpg",
        "image-four.jpg",
        "image-seventeen.jpg",
        "image-thirtyeight.jpg",
        "image-three.jpeg",
        "image-twentyfive.jpg",
        "image-twentyfour.jpeg",
        "image-twentythree.jpg",
      ],
      sportsImages: [
        "image-seven.jpg",
        "image-sixteen.jpg",
        "image-thirtyone.jpg",
        "image-thirtysix.jpg",
        "image-thirtytwo.jpg",
        "image-twentyeight.jpg",
        "image-twentyseven.jpg",
        "image-twentysix.jpg",
        "image-five.jpg",
        "image-fortyone.jpg",
        "image-fortytwo.jpg",
        "image-nineteen.jpg",
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
