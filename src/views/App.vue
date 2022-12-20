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
    <SectionTitle text="Academic Life" />
    <SectionDescription
      text="Academic Life Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum."
    />
  </div>

  <div>
    <div class="container w-4/5 p-4 ml-auto mr-auto">
      <div class="grid gap-2">
        <ImageSingle image="academic-life/image-thirteen.jpeg" />
        <ImageDouble image1="academic-life/image-ten.jpg" image2="academic-life/image-thirtythree.jpeg" />
        <ImageSingle image="academic-life/image-twelve.jpg" />
        <ImageDouble image1="academic-life/image-thirtyfive.jpeg" image2="academic-life/image-eighteen.jpg" />
      </div>
    </div>

    <div>
      <SectionTitle text="Campus Life" />
      <SectionDescription
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>

    <div>
      <div class="container w-4/5 p-4 ml-auto mr-auto">
        <div class="grid gap-2">
          <ImageSingle image="campus-life/image-thirtyfour.jpg" />
        </div>
      </div>
    </div>

    <Teleport to="body">
      <TheLightbox :images="academicImages" :index="index" v-if="visible" @close="hide()" />
    </Teleport>
  </div>
</template>

<script>
import TheLightbox from "../components/TheLightbox.vue";
import SectionTitle from "../components/SectionTitle.vue";
import SectionDescription from "../components/SectionDescription.vue";
import ImageSingle from "../components/ImageSingle.vue";
import ImageDouble from "../components/ImageDouble.vue";

export default {
  components: {
    TheLightbox,
    SectionTitle,
    SectionDescription,
    ImageSingle,
    ImageDouble,
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
      images: [
        {
          full: "academic-life/image-thirteen.jpeg",
          thumb: "",
          alt: "",
          caption: "",
        },
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
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.3s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
