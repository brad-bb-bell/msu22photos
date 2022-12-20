<template>
  <div class="relative">
    <img class="w-full" style="opacity: 1" src="../assets/images/campus-life/image-forty.jpg" />
    <p
      class="absolute inset-0 flex items-center justify-center text-center text-4xl font-serif font-bold text-white tracking-wider"
    >
      Welcome to MSU
    </p>
    <p
      class="absolute inset-0 pt-20 flex items-center justify-center text-center text-2xl font-serif italic text-white tracking-wider"
    >
      2022 Photos of the Year
    </p>
  </div>

  <div>
    <SectionTitle title="Academic Life" />
    <SectionDescription
      description="Academic Life Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum."
    />
  </div>

  <div>
    <a href="#">
      <div class="container w-4/5 p-4 ml-auto mr-auto">
        <v-lazy-image :src="require(`@/assets/images/academic-life/image-thirteen.jpeg`)" />
        <div class="grid">
          <div v-for="(image, index) in academicImages" :key="index">
            <v-lazy-image
              class="w-full h-full"
              @click.prevent="show(index)"
              :src="require(`@/assets/images/academic-life/${image}`)"
            />
          </div>
        </div>
      </div>
    </a>

    <Teleport to="body">
      <TheLightbox :images="academicImages" :index="index" v-if="visible" @close="hide()" />
    </Teleport>
  </div>
</template>

<script>
import TheLightbox from "../components/TheLightbox.vue";
import VLazyImage from "v-lazy-image";
import SectionTitle from "../components/SectionTitle.vue";
import SectionDescription from "../components/SectionDescription.vue";

export default {
  components: {
    TheLightbox,
    VLazyImage,
    SectionTitle,
    SectionDescription,
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
